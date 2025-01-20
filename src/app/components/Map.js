import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  return (
    <div className="relative" style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[11.5920, 37.3833]} // Coordinates for Bahir Dar, Ethiopia
        zoom={13} // Zoom level
        style={{ height: '100%', width: '100%' }}
      >
        {/* Add a dark-themed tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
        />

        {/* Add a marker */}
        <Marker position={[11.5920, 37.3833]}>
          <Popup>
            Welcome to Bahir Dar! <br /> A beautiful city in Ethiopia.
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Slate Gray Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-700 opacity-50"></div>
    </div>
  );
};

export default MapComponent;
