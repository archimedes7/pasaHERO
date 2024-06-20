// src/app/components/PopularDestinations.tsx
"use client";

const RideCard = ({ city }: { city: string }) => (
  <div className="border rounded shadow p-4 m-2">
    <img
      src={`https://via.placeholder.com/150?text=${city}`}
      alt={city}
      className="w-full h-32 object-cover rounded"
    />
    <h3 className="mt-2 font-bold">{city}</h3>
  </div>
);

const PopularDestinations = ({ destinations }: { destinations: string[] }) => (
  <section className="popular-destinations py-5">
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4">
        Popular destinations for ridesharing
      </h3>
      <div className="flex flex-wrap justify-center">
        {destinations.map((city) => (
          <RideCard key={city} city={city} />
        ))}
      </div>
    </div>
  </section>
);

export default PopularDestinations;
