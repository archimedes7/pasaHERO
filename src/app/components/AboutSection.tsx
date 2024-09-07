import React, { useState } from "react";

const AboutSection = () => {
  const [showFullStory, setShowFullStory] = useState(false);
  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-red text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About PasaHERO</h1>

        <div className="mb-12">
          <p className="text-lg mb-4">
            PasaHERO is a technology-driven transportation network company that
            connects passengers with drivers through a mobile application. Our
            platform goes beyond traditional ride-hailing by integrating a
            digital wallet and a local food discovery feature, creating a
            comprehensive urban mobility and lifestyle solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-sm mb-4">
              PasaHERO was born from a vision to revolutionize transportation in
              the Philippines, making it more accessible, affordable, and
              community-driven. The idea sparked when our founder, living in the
              United States, observed the stark contrasts between transportation
              systems and recognized the unique challenges faced in the
              Philippines.
            </p>
            {!showFullStory && (
              <button
                className="text-custom-blue underline"
                onClick={() => setShowFullStory(true)}
              >
                Read more
              </button>
            )}
            {showFullStory && (
              <div>
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Founder's Inspiration
                </h3>
                <p className="text-sm mb-4">
                  Witnessing the struggles of both passengers and drivers in the
                  Philippine transportation landscape, our founder was moved to
                  action. The vision for PasaHERO emerged from a desire to:
                </p>
                <ul className="list-disc list-inside text-sm mb-4">
                  <li>
                    Address the inefficiencies and inequalities in the current
                    system
                  </li>
                  <li>
                    Create a platform that prioritizes fairness for both riders
                    and drivers
                  </li>
                  <li>
                    Alleviate the stress and financial pressure often placed on
                    drivers through quotas and unfair compensation models
                  </li>
                  <li>
                    Leverage technology to make transportation more accessible
                    and affordable for all Filipinos
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Our Approach
                </h3>
                <p className="text-sm mb-2">At PasaHERO, we believe in:</p>
                <ol className="list-decimal list-inside text-sm mb-4">
                  <li>
                    <strong>Driver Empowerment</strong>: Ensuring drivers earn a
                    fair wage without the burden of unrealistic quotas
                  </li>
                  <li>
                    <strong>Community Focus</strong>: Building a platform that
                    strengthens local communities and supports the Philippine
                    economy
                  </li>
                  <li>
                    <strong>Technological Innovation</strong>: Utilizing
                    cutting-edge technology to improve efficiency and user
                    experience
                  </li>
                  <li>
                    <strong>Inclusivity</strong>: Making transportation
                    accessible to all, regardless of socioeconomic status
                  </li>
                  <li>
                    <strong>Transparency</strong>: Operating with clear, fair
                    pricing and policies for both riders and drivers
                  </li>
                </ol>
                <p className="text-sm">
                  By reimagining transportation through these principles,
                  PasaHERO aims to not just provide rides, but to drive positive
                  change in the Philippines' urban mobility landscape.
                </p>
                <button
                  className="text-custom-blue underline mt-4"
                  onClick={() => setShowFullStory(false)}
                >
                  Read less
                </button>
              </div>
            )}
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-sm">
              To ensure that all individuals, whether local residents or
              international visitors, regardless of their income level,
              socioeconomic background, or travel preferences, have access to
              safe, reliable, and affordable transportation, while promoting
              local businesses and enhancing the overall urban experience.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-sm">
              To become the leading urban mobility and lifestyle platform in
              Southeast Asia, where transportation is inclusive, eco-friendly,
              and empowers both riders and drivers to be everyday heroes in
              their communities.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Company Philosophy</h3>
          <ul className="list-disc list-inside">
            <li>Values: Safety, Fairness, Innovation, Community Support</li>
            <li>
              Image: A trustworthy, tech-savvy, and socially responsible urban
              mobility partner
            </li>
            <li>
              Unique Selling Proposition: Fair compensation for drivers,
              integrated digital wallet, and local food discovery platform
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              "Safety",
              "Fairness",
              "Innovation",
              "Community Support",
              "Affordability",
              "Sustainability",
              "Inclusivity",
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

export default AboutSection;
