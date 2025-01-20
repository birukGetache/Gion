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
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
      center={[11.5920, 37.3833]}  // Default coordinates [latitude, longitude]
        zoom={13} // Default zoom level
        style={{ height: '100%', width: '100%' }}
      >
        {/* Add a dark-themed tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
        />

        {/* Add a marker */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A marker at the center. <br /> Easily customizable!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
