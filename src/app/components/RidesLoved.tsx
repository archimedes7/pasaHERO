// src/app/components/RidesLoved.tsx
"use client";

const RidesLoved = ({
  rides,
}: {
  rides: { title: string; location: string; price: string }[];
}) => (
  <section className="rides-loved py-5 bg-gray-200">
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-4">Rides loved by users</h3>
      <div className="flex flex-wrap justify-center">
        {rides.map((ride, index) => (
          <div key={index} className="border rounded shadow p-4 m-2 w-1/5">
            <img
              src={`https://via.placeholder.com/150?text=Ride+${index + 1}`}
              alt={ride.title}
              className="w-full h-32 object-cover rounded"
            />
            <h4 className="mt-2 font-bold">{ride.title}</h4>
            <p>{ride.location}</p>
            <p className="font-bold">{ride.price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RidesLoved;
