import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [formData, setFormData] = useState({
    whereTo: "",
    time: "",
    destination: "",
    seats: "",
    pets: "",
  });
  const [suggestions, setSuggestions] = useState({
    whereTo: [],
    destination: [],
  });
  const [isLoading, setIsLoading] = useState({
    whereTo: false,
    destination: false,
  });
  const [error, setError] = useState("");
  const inputRefs = { whereTo: useRef(null), destination: useRef(null) };

  const debouncedWhereToValue = useDebounce(formData.whereTo, 300);
  const debouncedDestinationValue = useDebounce(formData.destination, 300);

  const fetchSuggestions = useCallback(async (input, type) => {
    if (input.length > 2) {
      setIsLoading((prev) => ({ ...prev, [type]: true }));
      setError("");
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            input
          )}&countrycodes=ph`
        );
        if (!response.ok) throw new Error("Failed to fetch suggestions");
        const data = await response.json();
        setSuggestions((prev) => ({ ...prev, [type]: data.slice(0, 5) }));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setError("Failed to load suggestions. Please try again.");
      } finally {
        setIsLoading((prev) => ({ ...prev, [type]: false }));
      }
    } else {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
    }
  }, []);

  useEffect(() => {
    fetchSuggestions(debouncedWhereToValue, "whereTo");
  }, [debouncedWhereToValue, fetchSuggestions]);

  useEffect(() => {
    fetchSuggestions(debouncedDestinationValue, "destination");
  }, [debouncedDestinationValue, fetchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(inputRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setSuggestions((prev) => ({ ...prev, [key]: [] }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add your form submission logic here
  };

  const renderInput = (name, placeholder, icon) => (
    <div ref={inputRefs[name]} className="relative flex-grow">
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
        {icon}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="ml-2 w-full text-gray-700 focus:outline-none"
          value={formData[name]}
          onChange={handleInputChange}
        />
        {formData[name] && (
          <button
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, [name]: "" }))}
            className="text-gray-400 hover:text-gray-600"
          >
            <XCircle size={20} />
          </button>
        )}
        {isLoading[name] && (
          <Loader2 size={20} className="animate-spin text-gray-400 ml-2" />
        )}
      </div>
      {suggestions[name].length > 0 && (
        <ul className="absolute z-10 w-full bg-white mt-1 rounded-2xl shadow-lg max-h-60 overflow-auto">
          {suggestions[name].map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  [name]: suggestion.display_name,
                }));
                setSuggestions((prev) => ({ ...prev, [name]: [] }));
              }}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full space-x-2 px-4"
    >
      {error && <div className="text-red-500 w-full text-center">{error}</div>}
      {renderInput(
        "whereTo",
        "Where to?",
        <MapPin size={20} className="text-gray-400" />
      )}
      <div className="relative flex-grow">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <Calendar size={20} className="text-gray-400" />
          <input
            type="datetime-local"
            name="time"
            className="ml-2 w-full text-gray-700 focus:outline-none"
            value={formData.time}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {renderInput(
        "destination",
        "Select destination",
        <MapPin size={20} className="text-gray-400" />
      )}
      <div className="relative flex-grow">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <Users size={20} className="text-gray-400" />
          <input
            type="number"
            name="seats"
            placeholder="Seats"
            className="ml-2 w-full text-gray-700 focus:outline-none"
            value={formData.seats}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="relative flex-grow">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <PawPrint size={20} className="text-gray-400" />
          <input
            type="number"
            name="pets"
            placeholder="Pets"
            className="ml-2 w-full text-gray-700 focus:outline-none"
            value={formData.pets}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-white text-custom-green border-2 border-custom-green px-6 py-2 rounded-full shadow-md hover:bg-custom-green hover:text-white transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
