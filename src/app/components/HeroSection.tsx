"use client";

import dynamic from "next/dynamic";
import SearchForm from "./SearchForm";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("./Map"), { ssr: false });
const BackgroundVideo = dynamic(() => import("./BackgroundVideo"), {
  ssr: false,
});

const HeroSection = () => (
  <section className="relative w-full">
    <div className="relative h-[400px] w-full">
      {" "}
      <div className="absolute inset-0 overflow-hidden z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Add overlay */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h2
          className="font-bold mb-4 text-white"
          style={{ fontSize: "1.25rem" }}
        >
          Become a HERO: Share Rides, Save Costs, Make an Impact.
        </h2>{" "}
        <p className="mb-8 text-lg text-white">Discover rides near you!</p>{" "}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full px-8">
        <div className="card mx-auto flex items-center justify-center">
          <SearchForm />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
