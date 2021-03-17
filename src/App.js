import React, {useState, useEffect} from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles"


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


  

  const url =  'http://localhost:3000/cities'
  const [cities, setCities] = useState([])
  const [selected, setSelected] = useState(null)
  // console.log(selected.lat, 'LAT')
  // console.log(selected.lon, 'LON')


  useEffect( () => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(response => {
        let cities = response
        setCities(cities)
        // renderWishes(wishes)
    })
  }, [])


  
  // const renderMarkers = (cities) => {

  // }


  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);


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
      {
        cities.map(city => (
        <Marker 
          key={city.weather_id} 
          position ={{
            lat: city.lat, 
            lng: city.lon
          }}
          onClick = {() => {
            setSelected(city)
          }}
        />
        ))}

      {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lon }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                {selected.name}
              </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>

  )
}
