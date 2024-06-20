// src/app/page.tsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularDestinations from "./components/PopularDestinations";
import ExclusiveDeals from "./components/ExclusiveDeals";
import Footer from "./components/Footer";

const Home = () => {
  const popularDestinations = [
    "New York",
    "San Francisco",
    "Austin",
    "Miami",
    "Chicago",
    "Seattle",
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div>
        {" "}
        {/* To ensure content is not hidden behind the fixed header */}
        <HeroSection />
        <PopularDestinations destinations={popularDestinations} />
        <ExclusiveDeals />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
