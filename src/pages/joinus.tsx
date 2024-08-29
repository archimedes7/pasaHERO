import React from "react";
import Image from "next/image";
import Link from "next/link";

const JoinUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/logo.png" alt="PasaHero Logo" width={150} height={50} />
          <nav>
            <Link
              href="/login"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Join Us and Become a HERO!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Share Rides, Save Costs, and Travel with Pets. Download our app now
            and discover rides near you!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-800 transition"
            >
              <Image
                src="/apple-logo.png"
                alt="Apple Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              App Store
            </Link>
            <Link
              href="#"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-teal-700 transition"
            >
              <Image
                src="/google-play-logo.png"
                alt="Google Play Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Google Play
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/mobile-app-preview.png"
            alt="PasaHero Mobile App"
            width={300}
            height={600}
            className="mx-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2023 PasaHero. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default JoinUsPage;
