"use client";

const RideCard = ({
  city,
  imageUrl,
  size,
}: {
  city: string;
  imageUrl: string;
  size: { width: number; height: number };
}) => (
  <div
    className="relative m-2"
    style={{ width: size.width, height: size.height }}
  >
    <img
      src={imageUrl}
      alt={city}
      className="w-full h-full object-cover rounded-xl"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-4 rounded-b-xl">
      <h3 className="text-white text-xl font-bold">{city}</h3>
    </div>
  </div>
);

const PopularDestinations = ({
  destinations,
}: {
  destinations: {
    city: string;
    imageUrl: string;
    size: { width: number; height: number };
  }[];
}) => (
  <section className="popular-destinations py-20 mt-6">
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4 mt-2">
        Popular destinations for ridesharing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {destinations.map((destination) => (
          <RideCard
            key={destination.city}
            city={destination.city}
            imageUrl={destination.imageUrl}
            size={destination.size}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PopularDestinations;
