// src/app/components/Map.tsx
"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const Map = () => {
  const position: LatLngExpression = [15.5, 120.5]; // Central Luzon coordinates
  const tileUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer
      center={position}
      zoom={8} // Adjust zoom level to your preference
      className="absolute inset-0 h-full w-full"
    >
      <TileLayer url={tileUrl} attribution={attribution} />
    </MapContainer>
  );
};

export default Map;
