// src/app/page.tsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import ExclusiveDeals from "./components/ExclusiveDeals";
import RidesLoved from "./components/RidesLoved";
import Footer from "./components/Footer";
import { PopularDestinationsCarousel } from "./components/PopularDestinationsCarousel";

const Home = () => {
  const destinations = [
    {
      city: "Batangas",
      imageUrl: "https://images.unsplash.com/photo-1544142720-9b1054c3ab1e",
      size: { width: 316, height: 352 },
    },
    {
      city: "Pampanga",
      imageUrl: "https://images.unsplash.com/photo-1594492003163-52d7dfc3583d",
      size: { width: 316, height: 352 },
    },
    {
      city: "Bulacan",
      imageUrl: "https://images.unsplash.com/photo-1575408027221-9ab2855ba891",
      size: { width: 316, height: 352 },
    },
    {
      city: "La Union(ELYU)",
      imageUrl: "https://images.unsplash.com/photo-1557537386-b41ac63e8756",
      size: { width: 316, height: 352 },
    },
    {
      city: "Laguna",
      imageUrl: "https://images.unsplash.com/photo-1642616128754-7d026f979317",
      size: { width: 316, height: 136 },
    },
    {
      city: "Tagaytay",
      imageUrl: "https://images.unsplash.com/photo-1625266637559-f56c66fa8fa8",
      size: { width: 316, height: 136 },
    },
    {
      city: "Quezon",
      imageUrl: "https://images.unsplash.com/photo-1644712559652-067afb0c932a",
      size: { width: 316, height: 136 },
    },
    {
      city: "Pangasinan",
      imageUrl: "https://images.unsplash.com/photo-1692865047973-5877e900fe56",
      size: { width: 316, height: 136 },
    },
  ];

  const rides = [
    {
      title: "Tagaytay Commute",
      location: "Tagaytay HOP-INN",
      price: "from ₱150/ride",
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      title: "Central Luzon Ride",
      location: "Central Luzon",
      price: "from ₱450/ride",
      imageUrl: "https://images.unsplash.com/photo-1636600932143-2fd29805047f",
    },
    {
      title: "Region to Region",
      location: "Choose Region",
      price: "from ₱300/ride",
      imageUrl: "https://images.unsplash.com/photo-1614007070714-48f9ad1049a0",
    },
    {
      title: "Baguio Ride Along",
      location: "Baguio",
      price: "from ₱450/ride",
      imageUrl: "https://images.unsplash.com/photo-1566715801603-e0b5bcbff871",
    },

    {
      title: "Sabay Night Ride",
      location: "Avoid traffic",
      price: "from ₱180/ride",
      imageUrl: "https://images.unsplash.com/photo-1606340820555-cc805b3268fa",
    },
    {
      title: "Tara sa Concert",
      location: "Anywhere",
      price: "from ₱180/ride",
      imageUrl: "https://images.unsplash.com/photo-1606340820555-cc805b3268fa",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div>
        {" "}
        {/* To ensure content is not hidden behind the fixed header */}
        <HeroSection />
        <PopularDestinationsCarousel />
        {/* <PopularDestinations destinations={destinations} /> */}
        {/* <RidesLoved rides={rides} /> */}
        <ExclusiveDeals />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
