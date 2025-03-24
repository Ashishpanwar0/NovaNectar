import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.3165, 
  lng: 78.0322,
};

function Map() {
  return (
    <>
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default Map;