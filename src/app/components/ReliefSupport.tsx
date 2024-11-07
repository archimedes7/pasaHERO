import React from "react";

const ReliefSupportOperations = () => {
  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-red text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Relief Support Operations
        </h1>

        <div className="mb-12">
          <p className="text-lg mb-4">
            Welcome to PasaHERO's Relief Support Operations. Our platform serves
            as a middleman to connect those in need with the appropriate
            support. Whether it's individuals, NGOs, or other organizations, we
            help you find the right people to assist you during times of crisis.
            We do not take any money for this service; our goal is to facilitate
            connections and make a positive impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Register for Support
            </h2>
            <p className="text-sm mb-4">
              If you or someone you know needs assistance, please register here.
              Our team will help connect you with the right support.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Register Now
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Volunteer to Help</h2>
            <p className="text-sm mb-4">
              Join our volunteer team to help those in need. Your support can
              make a significant difference in the lives of others.
            </p>
            <button className="bg-custom-blue text-white px-4 py-2 rounded-xl text-sm font-roboto leading-5 hover:bg-custom-blue-dark transition duration-300">
              Volunteer Now
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose PasaHERO for Relief Support?
          </h3>
          <ul className="list-disc list-inside">
            <li>Comprehensive support for various types of crises</li>
            <li>Dedicated team of volunteers and professionals</li>
            <li>Transparent and efficient use of donations</li>
            <li>Community-driven approach to relief efforts</li>
            <li>Real-time updates and communication</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "Compassion",
              "Efficiency",
              "Transparency",
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

export default ReliefSupportOperations;
