"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ContentItem {
  title: string;
  description: React.ReactNode;
  image: string;
}

const content: ContentItem[] = [
  {
    title: "Download the App",
    description: (
      <>
        Get started by downloading the PasaHERO app from your app store. The app
        is available for both iOS and Android devices, ensuring you have access
        to all our features no matter what device you use.
        <br />
        <br />
        Once downloaded, you'll have a powerful tool at your fingertips to
        manage your transportation needs efficiently. The PasaHERO app is
        designed to be user-friendly, with an intuitive interface that makes it
        easy to navigate. Whether you're looking to book a ride, join a carpool,
        or find parking, the app provides a seamless experience tailored to your
        needs.
        <br />
        <br />
        Our app also includes features like real-time tracking, in-app payments,
        and customer support to ensure a smooth and convenient experience.
        Additionally, the app is regularly updated with new features and
        improvements based on user feedback. This ensures that you always have
        the latest and most efficient tools to manage your transportation needs.
        <br />
        <br />
        <strong>
          All these features are free to use, aimed at helping the masses with
          transportation and cutting costs in everyday life.
        </strong>
      </>
    ),
    image: "/pasahero-mobile-orig.png",
  },
  {
    title: "Create Your Account",
    description: (
      <>
        Sign up quickly and easily with your email or social media accounts.
        Creating an account allows you to access personalized features, save
        your preferences, and manage your bookings seamlessly.
        <br />
        <br />
        With a PasaHERO account, you can enjoy a range of benefits, including
        the ability to track your ride history, receive exclusive offers, and
        participate in our loyalty program. Your account also ensures that your
        data is secure and that you have a personalized experience every time
        you use the app. You can update your profile, set preferences for your
        rides, and even link multiple payment methods for easy transactions.
        <br />
        <br />
        Moreover, having an account enables you to receive personalized
        recommendations based on your travel history and preferences. This means
        you'll get suggestions for the best routes, carpool options, and parking
        spots tailored just for you.
      </>
    ),
    image: "/pasahero-hand.png",
  },
  {
    title: "Plan your route",
    description: (
      <>
        Enter your destination so it will be available for others to join you.
        Planning your route in advance helps you find the most efficient path
        and allows others to join your carpool, making your journey more
        cost-effective and eco-friendly.
        <br />
        <br />
        Our advanced route planning feature takes into account real-time traffic
        conditions, road closures, and other factors to provide you with the
        best possible route. You can also set preferences for your route, such
        as avoiding toll roads or highways, to customize your journey to your
        liking. Additionally, the app provides turn-by-turn navigation to guide
        you through your journey, ensuring you never get lost.
        <br />
        <br />
        By planning your route in advance, you can also estimate the cost of
        your trip, find the most economical options, and even see how much you
        can save by carpooling. This helps you make informed decisions about
        your travel plans and optimize your transportation costs.
      </>
    ),
    image: "/route.png",
  },
  {
    title: "Join a Carpool",
    description: (
      <>
        Find and join carpool rides to share the cost and reduce your carbon
        footprint. Carpooling not only saves you money but also contributes to a
        greener environment by reducing the number of vehicles on the road.
        <br />
        <br />
        With PasaHERO, you can easily find carpool options that match your
        schedule and route. Our app connects you with other users who are
        heading in the same direction, allowing you to share the ride and split
        the cost. Carpooling is a great way to meet new people, save money, and
        do your part for the environment. You can also see ratings and reviews
        of other carpoolers to ensure a safe and enjoyable ride.
        <br />
        <br />
        Additionally, the app provides features like in-app communication,
        allowing you to coordinate with your carpool partners easily. You can
        also set up recurring carpools for regular trips, such as commuting to
        work or school, making your daily travel more convenient and
        cost-effective.
      </>
    ),
    image: "/joincar.png",
  },
  {
    title: "Register Your TODA",
    description: (
      <>
        TODA associations can register their members for free to join the
        PasaHERO platform. By registering, TODA members can expand their reach,
        attract more customers, and manage their operations more efficiently.
        <br />
        <br />
        Our platform provides TODA associations with tools to streamline their
        operations, including ride scheduling, customer management, and payment
        processing. Registering with PasaHERO also gives TODA members access to
        a wider customer base, increasing their earning potential and helping
        them grow their business. You can manage your fleet, track your drivers,
        and even offer promotions to attract more customers.
        <br />
        <br />
        Moreover, the platform offers analytics and reporting features that help
        TODA associations make data-driven decisions. You can track your
        performance, identify trends, and optimize your operations to maximize
        efficiency and profitability.
      </>
    ),
    image: "/joingrp.png",
  },
  {
    title: "Book a Tricycle",
    description: (
      <>
        Reserve your tricycle ride in advance through the PasaHERO app. Booking
        in advance ensures you have a ride when you need it, saving you time and
        reducing the hassle of finding transportation at the last minute.
        <br />
        <br />
        With our tricycle booking feature, you can select your pick-up and
        drop-off locations, choose your preferred tricycle type, and schedule
        your ride for a specific time. You'll receive a confirmation of your
        booking and can track your tricycle's arrival in real-time, ensuring a
        smooth and convenient ride experience. Additionally, you can see the
        estimated fare and make payments directly through the app.
        <br />
        <br />
        The app also allows you to rate and review your tricycle drivers,
        helping to maintain a high standard of service. You can also save your
        favorite drivers and request them for future rides, ensuring a
        consistent and reliable transportation experience.
      </>
    ),
    image: "/pedicab.png",
  },
  {
    title: "Find Parking Spaces",
    description: (
      <>
        Search for available parking spaces near your location and book them
        conveniently. Finding and booking parking spaces in advance helps you
        avoid the stress of looking for a spot and ensures you have a place to
        park when you arrive at your destination.
        <br />
        <br />
        Our parking feature allows you to view available parking spots in
        real-time, with details on pricing, location, and availability. You can
        book your spot in advance and even pay for your parking through the app,
        making the process seamless and hassle-free. Never worry about finding a
        parking spot again with PasaHERO. Additionally, the app provides
        directions to your parking spot, ensuring you can find it easily.
        <br />
        <br />
        The app also offers features like extending your parking time or
        canceling your booking if your plans change. You can also see reviews
        and ratings of parking spots to ensure you choose a safe and convenient
        location.
      </>
    ),
    image: "/park.png",
  },
  {
    title: "Manage Your Bookings",
    description: (
      <>
        Keep track of your bookings and manage them easily through your account.
        View your upcoming rides, modify or cancel bookings as needed, and
        receive notifications for any updates or changes.
        <br />
        <br />
        Our booking management feature provides a comprehensive overview of all
        your upcoming and past bookings. You can easily view details such as
        pick-up and drop-off locations, ride times, and payment status. If your
        plans change, you can modify your booking or cancel it with just a few
        taps. Additionally, you'll receive real-time notifications for any
        updates, such as changes in ride times or cancellations, ensuring you
        stay informed and organized.
        <br />
        <br />
        The app also allows you to set reminders for your upcoming bookings,
        ensuring you never miss a ride. You can also view your booking history
        to track your travel patterns and expenses. This helps you make informed
        decisions about your future travel plans and optimize your
        transportation costs.
      </>
    ),
    image: "/managebook.png",
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
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="sm:w-1/2">
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
