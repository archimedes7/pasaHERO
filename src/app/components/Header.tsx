"use client";
import Link from "next/link";

const Header = () => (
  <header className="bg-gray-200">
    <div className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-8">pasaHERO.PH</h1>
        <nav className="flex space-x-8">
          <Link href="/drivers" className="text-gray-600 hover:text-gray-900">
            Drivers
          </Link>
          <Link
            href="/passengers"
            className="text-gray-600 hover:text-gray-900"
          >
            Passengers
          </Link>
          <Link href="/routes" className="text-gray-600 hover:text-gray-900">
            Routes
          </Link>
        </nav>
      </div>
      <div>
        <button className="bg-[#b9deff] text-black px-4 py-2 rounded-xl text-sm mr-2">
          Join
        </button>
        <button className="bg-[#ff9500] text-black px-4 py-2 rounded-xl text-sm font-roboto leading-5">
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;
