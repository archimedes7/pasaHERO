import React from "react";

const PasatodaIntroSection = () => {
  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-red text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">PASATODA</h1>

        <div className="mb-12">
          <p className="text-lg mb-4">
            Welcome to PasaHERO's PASATODA section. Here, TODA associations can
            register their members for free, and customers can book tricycle
            rides conveniently. Our platform ensures a secure and reliable
            booking experience, supporting local communities and drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Register Your TODA</h2>
            <p className="text-sm mb-4">
              Easily register your TODA association and add your members. Our
              platform provides a hassle-free registration process.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Register Now
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Book a Tricycle</h2>
            <p className="text-sm mb-4">
              Reserve your tricycle ride in advance. Our booking system ensures
              that your ride is secured and ready when you need it.
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
          <h3 className="text-2xl font-semibold mb-4">Why Choose PASATODA?</h3>
          <ul className="list-disc list-inside">
            <li>Convenient and easy-to-use platform</li>
            <li>Secure and reliable booking system</li>
            <li>Free registration for TODA associations and members</li>
            <li>Support for local communities and drivers</li>
            <li>Real-time updates and notifications</li>
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

export default PasatodaIntroSection;
