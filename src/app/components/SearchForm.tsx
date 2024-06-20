"use client";

const SearchForm = () => (
  <form className="flex items-center justify-between w-full h-full space-x-4 px-4">
    <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md flex-grow">
      <input
        type="text"
        placeholder="Where to?"
        className="text-gray-700 focus:outline-none w-full"
      />
    </div>
    <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md flex-grow">
      <input
        type="text"
        placeholder="Select time"
        className="text-gray-700 focus:outline-none w-full"
      />
    </div>
    <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md flex-grow">
      <input
        type="text"
        placeholder="Select destination"
        className="text-gray-700 focus:outline-none w-full"
      />
    </div>
    <div className="flex items-center justify-center bg-white rounded-full px-4 py-2 shadow-md flex-grow">
      <input
        type="text"
        placeholder="Number of seats"
        className="text-gray-700 focus:outline-none w-full"
      />
    </div>
    <button
      type="submit"
      className="bg-custom-orange text-white px-4 py-2 rounded-full shadow-md"
    >
      Search
    </button>
  </form>
);

export default SearchForm;
