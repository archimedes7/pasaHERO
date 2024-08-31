"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pasaheroLogo from "../../styles/pasahero-teal-border.svg";
import SearchForm from "@/app/components/SearchForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={pasaheroLogo}
                alt="pasaHERO.PH"
                width={50}
                height={50}
                className="mr-4 md:mr-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/howitworks"
              className="text-white hover:text-custom-green transition duration-300"
            >
              How it works?
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-custom-green transition duration-300"
            >
              About Us
            </Link>
          </nav>

          {/* Early Bird Signup Button */}
          <div className="hidden md:block">
            <button className="bg-custom-green text-white px-6 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-green-dark transition duration-300">
              Early Bird Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/howitworks"
                className="text-white hover:text-custom-green transition duration-300"
              >
                How it works?
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-custom-green transition duration-300"
              >
                About Us
              </Link>
              <SearchForm isMobile={true} />
              <button className="bg-custom-green text-white px-6 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-green-dark transition duration-300 self-start">
                Early Bird Signup
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
