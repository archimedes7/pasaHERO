"use client";

import dynamic from "next/dynamic";
import SearchForm from "./SearchForm";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("./Map"), { ssr: false });

const HeroSection = () => (
  <section className="relative">
    <div className="relative h-[300px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="absolute inset-0 overflow-hidden rounded-lg z-0">
        <Map />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>{" "}
        {/* Add overlay */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h2 className="text-5xl font-bold mb-4 text-custom-orange">
          Share rides with Carpooler
        </h2>{" "}
        {/* Ensure text-custom-orange class is applied */}
        <p className="mb-8 text-lg text-custom-orange">
          Discover rides near you!
        </p>{" "}
        {/* Ensure text-custom-orange class is applied */}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full px-8">
        <div
          className="card mx-auto flex items-center justify-center"
          style={{
            width: "1000px",
            height: "80px",
            backgroundColor: "#e8e8e8",
            borderRadius: "100px",
          }}
        >
          <SearchForm />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
