import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-8 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-2xl font-sans max-w-3xl mx-auto">
        Discover popular destinations and enjoy comfortable rides with our
        service.
      </p>
    </div>
  );
};

const destinations = [
  {
    category: "Popular Ride",
    title: "Tagaytay Commute",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    content: <DummyContent />,
  },
  {
    category: "Long Distance",
    title: "Central Luzon Ride",
    src: "https://images.unsplash.com/photo-1636600932143-2fd29805047f",
    content: <DummyContent />,
  },
  {
    category: "Custom",
    title: "Region to Region",
    src: "https://images.unsplash.com/photo-1614007070714-48f9ad1049a0",
    content: <DummyContent />,
  },
  {
    category: "Scenic Route",
    title: "Baguio Ride Along",
    src: "https://images.unsplash.com/photo-1566715801603-e0b5bcbff871",
    content: <DummyContent />,
  },
  {
    category: "Night Travel",
    title: "Sabay Night Ride",
    src: "https://images.unsplash.com/photo-1606340820555-cc805b3268fa",
    content: <DummyContent />,
  },
  {
    category: "Event",
    title: "Tara sa Concert",
    src: "https://images.unsplash.com/photo-1501527459-2d5409f8cf9f",
    content: <DummyContent />,
  },
];

export function PopularDestinationsCarousel() {
  const cards = destinations.map((destination, index) => (
    <Card key={destination.src} card={destination} index={index} />
  ));

  return (
    <div className="w-full py-8 md:py-20">
      <h2 className="max-w-7xl px-4 mx-auto text-xl md:text-3xl lg:text-5xl font-bold text-custom-green dark:text-neutral-200 font-sans mb-4 md:mb-8">
        Popular destinations for ridesharing
      </h2>
      <div className="md:hidden">
        {/* Mobile layout: scrollable list */}
        <div className="flex overflow-x-auto space-x-4 px-4 pb-4">
          {destinations.map((destination, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <img
                src={destination.src}
                alt={destination.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg">{destination.title}</h3>
              <p className="text-sm text-gray-600">{destination.category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <Carousel items={cards} />
      </div>
    </div>
  );
}
