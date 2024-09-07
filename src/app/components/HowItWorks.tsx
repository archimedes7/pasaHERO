"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ContentItem {
  title: string;
  description: string;
  image: string;
}

const content: ContentItem[] = [
  {
    title: "Download the App",
    description:
      "Get started by downloading the PasaHERO app from your app store.",
    image: "/pasahero-mobile-orig.png",
  },
  {
    title: "Create Your Account",
    description:
      "Sign up quickly and easily with your email or social media accounts.",
    image: "/pasahero-hand.png",
  },
  {
    title: "Plan your route",
    description:
      "Enter your destination and choose from our variety of ride options.",
    image: "/route.png",
  },
  {
    title: "Book Your Ride",
    description:
      "Enter your destination and choose from our variety of ride options.",
    image: "/travel-route.png",
  },
  {
    title: "Enjoy Your Journey",
    description:
      "Sit back, relax, and enjoy a safe and comfortable ride to your destination.",
    image: "/pasahero-driving.png",
  },
];

const StickyScroll: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:sticky md:top-0 md:h-screen flex items-center justify-center p-4">
        <Image
          src={content[activeIndex].image}
          alt={content[activeIndex].title}
          width={300}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="min-h-screen flex items-center p-4"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">How It Works</h1>
      <StickyScroll />
    </div>
  );
}
