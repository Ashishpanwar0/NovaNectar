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
    <div>
<div style={{maxWidth:"100%",listStyle:"none", transition: "none",overflow:"hidden",width:"100%",height:"500px",marginTop:"1px"}}><div id="embedded-map-display" style={{height:"100%", width:"100%",maxWidth:"100%"}}><iframe style={{height:"100%",width:"100%",border:"0"}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=rishilesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="embed-map-html" href="https://www.bootstrapskins.com/themes" id="enable-maps-data">premium bootstrap themes</a><style>#embedded-map-display</style></div>
    </div>
  )
}

export default Map;