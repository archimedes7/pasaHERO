"use client";
import Link from "next/link";
import Image from "next/image";
import pasaheroLogo from "../../styles/pasahero-teal-border.svg";

const Header = () => (
  <header className="bg-black shadow-md">
    {" "}
    {/* Added shadow for depth */}
    <div className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={pasaheroLogo}
            alt="pasaHERO.PH"
            width={50}
            height={50}
            className="mr-8"
          />
        </Link>
        <nav className="flex space-x-8">
          <Link
            href="/howitworks"
            className="text-white hover:text-custom-green-900 transition duration-300"
          >
            How it works?
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-custom-green transition duration-300"
          >
            About Us
          </Link>
          {/* <Link
            href="/mission"
            className="text-white hover:text-custom-green transition duration-300"
          >
            About Us
          </Link> */}
        </nav>
      </div>
      <div>
        <button className="bg-white text-custom-green px-4 py-2 rounded-xl text-sm mr-2 hover:bg-custom-green hover:text-white transition duration-300">
          Join
        </button>
        <button className="bg-[#007f8a] text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-[#006d75] transition duration-300">
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;
