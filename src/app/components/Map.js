import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles

const MapComponent = () => {
  // Coordinates for Bahir Dar, Ethiopia
     center={[11.5920, 37.3433]}
  const zoom = 13; // Zoom level

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A simple marker at coordinates {position[0]}, {position[1]} (Bahir Dar).
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
