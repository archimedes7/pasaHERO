"use client";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-black py-4 mt-auto">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <p className="text-white font-bold">pasaHERO.PH</p>
        <p className="text-white">
          Your go-to ride-sharing platform this A1stCentury!
        </p>
        <p className="text-custom-green">pasaHERO &copy; 2024</p>
      </div>
      <div className="text-right">
        <p className="text-white font-bold">Support</p>
        <p className="text-white">Help Center</p>
        <Link href="/legal" className="text-white hover:text-custom-green">
          Legal
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
