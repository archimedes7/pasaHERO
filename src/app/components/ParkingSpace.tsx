import React from "react";

const ParkingSpaceSection = () => {
  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-red text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Parking HERO</h1>

        <div className="mb-12">
          <p className="text-lg mb-4">
            Welcome to PasaHERO's Parking Space section. Here, you can find and
            book parking spaces conveniently. Our platform ensures that you have
            a hassle-free parking experience, whether you need a space for a day
            or a longer period.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Find a Space</h2>
            <p className="text-sm mb-4">
              Easily search for available parking spaces near your location. Our
              platform provides real-time updates on space availability.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Search Spaces
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Book a Space</h2>
            <p className="text-sm mb-4">
              Reserve your parking space in advance. Our booking system ensures
              that your space is secured and ready when you arrive.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Book Now
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Manage Your Bookings
            </h2>
            <p className="text-sm mb-4">
              Keep track of your bookings and manage them easily through your
              account. Cancel or extend your bookings as needed.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Manage Bookings
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Why Choose PasaHERO?</h3>
          <ul className="list-disc list-inside">
            <li>Convenient and easy-to-use platform</li>
            <li>Real-time updates on space availability</li>
            <li>Secure and reliable booking system</li>
            <li>Competitive pricing and flexible booking options</li>
            <li>Support for local communities and businesses</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "Convenience",
              "Reliability",
              "Security",
              "Affordability",
              "Community Support",
              "Innovation",
            ].map((value, index) => (
              <li
                key={index}
                className="bg-white text-custom-red px-4 py-2 rounded-full text-sm font-medium"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpaceSection;
