"use client";
import dynamic from "next/dynamic";
import SearchForm from "./SearchForm";

// Dynamically import the Map component with SSR disabled
const BackgroundVideo = dynamic(() => import("./BackgroundVideo"), {
  ssr: false,
});

const HeroSection = () => (
  <section className="relative w-full">
    <div className="relative h-[400px] w-full">
      <div className="absolute inset-0 overflow-hidden z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center">
        <h2 className="font-bold mb-2 sm:mb-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Become a HERO: Share Rides, Save Costs, Make an Impact.
        </h2>
        <p className="mb-4 sm:mb-8 text-base sm:text-lg md:text-xl text-white max-w-md mx-auto">
          Discover rides near you!
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full px-8 hidden md:block">
        <div className="card mx-auto flex items-center justify-center">
          <SearchForm />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
