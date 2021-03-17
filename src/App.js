import React from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles"

function Map() {
  return (
    <GoogleMap
    defaultZoom={10}
    defaultCenter = {{lat: 40.730610 , lng: -73.935242 }}
    />
  );
}

const libraries= ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}
const center = {
  lat: 40.714272, 
  lng: -74.005966
}
const options = {
  styles : mapStyles
}


export default function App () {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })
  if(loadError) return "Error loading maps";
  if(!isLoaded) return  "Loading Maps"
  return(
    <div>
      <GoogleMap 
      mapContainerStyle ={mapContainerStyle}
      zoom={10}
      center={center}
      options = {options}

      >

      </GoogleMap>
    </div>

  )
}
