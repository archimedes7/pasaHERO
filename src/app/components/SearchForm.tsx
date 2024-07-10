"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  XCircle,
  Loader2,
  Calendar,
  MapPin,
  Users,
  PawPrint,
} from "lucide-react";

// Custom hook for debouncing (unchanged)
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchForm = () => {
  const [whereToValue, setWhereToValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");
  const [seatsValue, setSeatsValue] = useState("");
  const [petsValue, setPetsValue] = useState("");
  const [whereToSuggestions, setWhereToSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [isLoadingWhereTo, setIsLoadingWhereTo] = useState(false);
  const [isLoadingDestination, setIsLoadingDestination] = useState(false);
  const [error, setError] = useState("");
  const whereToRef = useRef(null);
  const destinationRef = useRef(null);

  const debouncedWhereToValue = useDebounce(whereToValue, 300);
  const debouncedDestinationValue = useDebounce(destinationValue, 300);

  // fetchSuggestions function (unchanged)
  const fetchSuggestions = useCallback(
    async (input, setSuggestions, setIsLoading) => {
      if (input.length > 2) {
        setIsLoading(true);
        setError("");
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              input
            )}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch suggestions");
          }
          const data = await response.json();
          setSuggestions(data.slice(0, 5));
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setError("Failed to load suggestions. Please try again.");
        } finally {
          setIsLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    },
    []
  );

  // useEffect hooks (unchanged)
  useEffect(() => {
    fetchSuggestions(
      debouncedWhereToValue,
      setWhereToSuggestions,
      setIsLoadingWhereTo
    );
  }, [debouncedWhereToValue, fetchSuggestions]);

  useEffect(() => {
    fetchSuggestions(
      debouncedDestinationValue,
      setDestinationSuggestions,
      setIsLoadingDestination
    );
  }, [debouncedDestinationValue, fetchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whereToRef.current && !whereToRef.current.contains(event.target)) {
        setWhereToSuggestions([]);
      }
      if (
        destinationRef.current &&
        !destinationRef.current.contains(event.target)
      ) {
        setDestinationSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", {
      whereToValue,
      timeValue,
      destinationValue,
      seatsValue,
      petsValue,
    });
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const renderInput = (
    value,
    setValue,
    placeholder,
    suggestions,
    ref,
    isLoading,
    icon
  ) => (
    <div ref={ref} className="relative flex-grow">
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
        {icon}
        <input
          type="text"
          placeholder={placeholder}
          className="ml-2 w-full text-gray-700 focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="text-gray-400 hover:text-gray-600"
          >
            <XCircle size={20} />
          </button>
        )}
        {isLoading && (
          <Loader2 size={20} className="animate-spin text-gray-400 ml-2" />
        )}
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white mt-1 rounded-2xl shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setValue(suggestion.display_name);
                ref.current.querySelector("input").focus();
              }}
            >
              {truncateString(suggestion.display_name, 40)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full space-y-4 px-4"
    >
      {error && <div className="text-red-500 w-full text-center">{error}</div>}
      <div className="flex w-full space-x-2">
        {renderInput(
          whereToValue,
          setWhereToValue,
          "Where to?",
          whereToSuggestions,
          whereToRef,
          isLoadingWhereTo,
          <MapPin size={20} className="text-gray-400" />
        )}
        <div className="relative flex-grow">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <Calendar size={20} className="text-gray-400" />
            <input
              type="datetime-local"
              className="ml-2 w-full text-gray-700 focus:outline-none"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
            />
          </div>
        </div>
        {renderInput(
          destinationValue,
          setDestinationValue,
          "Select destination",
          destinationSuggestions,
          destinationRef,
          isLoadingDestination,
          <MapPin size={20} className="text-gray-400" />
        )}
        <div className="relative flex-grow">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <Users size={20} className="text-gray-400" />
            <input
              type="number"
              placeholder="Seats"
              className="ml-2 w-full text-gray-700 focus:outline-none"
              value={seatsValue}
              onChange={(e) => setSeatsValue(e.target.value)}
            />
          </div>
        </div>
        <div className="relative flex-grow">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <PawPrint size={20} className="text-gray-400" />
            <input
              type="number"
              placeholder="Pets"
              className="ml-2 w-full text-gray-700 focus:outline-none"
              value={petsValue}
              onChange={(e) => setPetsValue(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-white text-custom-green border-2 border-custom-green px-6 py-2 rounded-full shadow-md hover:bg-custom-green hover:text-white transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
