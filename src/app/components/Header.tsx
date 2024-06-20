// src/app/components/Header.tsx
"use client";

import Link from "next/link";

const styles = {
  header: {
    top: "0px",
    left: "1px",
    width: "100%", // Changed to 100% for responsiveness
    height: "102px",
    backgroundColor: "#e8e8e8",
  },
};

const Header = () => (
  <header style={styles.header} className="fixed top-0 w-full shadow-md">
    <div className="container mx-auto flex justify-between items-center h-full px-4">
      <h1 className="text-xl font-bold">pasaHERO.PH</h1>
      <nav className="flex space-x-4">
        <Link href="/drivers" className="text-gray-600 hover:text-gray-900">
          Drivers
        </Link>
        <Link href="/passengers" className="text-gray-600 hover:text-gray-900">
          Passengers
        </Link>
        <Link href="/routes" className="text-gray-600 hover:text-gray-900">
          Routes
        </Link>
      </nav>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Join
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;
