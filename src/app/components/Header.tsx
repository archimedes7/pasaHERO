"use client";
import Link from "next/link";
import Image from "next/image";
import pasaheroLogo from "../../styles/pasaheroadoversionone.svg";
import LaunchSoon from "./LaunchSoon";

const Header = () => (
  <header className="bg-gray-200">
    <div className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <Image
          src={pasaheroLogo}
          alt="pasaHERO.PH"
          width={100}
          height={30}
          className="mr-8"
        />
        <nav className="flex space-x-8">
          {/* <Link href="/drivers" className="text-gray-600 hover:text-gray-900">
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
          <Link href="/mission" className="text-gray-600 hover:text-gray-900">
            Our Mission
          </Link> */}
          <Link
            href="/launchsoon"
            className="text-custom-green hover:text-gray-900"
          >
            Launching Soon
          </Link>
        </nav>
      </div>
      <div>
        <button className="bg-[#ffffff] text-custom-green px-4 py-2 rounded-xl text-sm mr-2">
          Join
        </button>
        <button className="bg-[#007f8a] text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5">
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;
