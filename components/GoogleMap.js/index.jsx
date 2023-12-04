// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Replace with your desired latitude
  lng: -122.4194, // Replace with your desired longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add additional components, markers, etc. here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
