import React, {useState} from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles"
import { Link } from "react-router-dom"



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


export default function LandingPage (props) {
  const [selected, setSelected] = useState(null)


  

  // const url =  'http://localhost:3000/cities'
  // const [cities, setCities] = useState([])
  // console.log(selected.lat, 'LAT')
  // console.log(selected.lon, 'LON')


  // useEffect( () => {
  //   fetch(`${url}`)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(typeof response)
  //     let newState = [response]
  //     console.log(newState)
  //     setCities([...response])

  //       // renderWishes(wishes)
  //   })
  // }, [])


  
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
        props.cities.map(element => (
          <Marker 
            key={element.city.weather_id} 
            position ={{
              lat: element.city.lat, 
              lng: element.city.lon
            }}
            onClick = {() => {
              setSelected(element.city)
            }}
            
          />))
        }

      {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lon }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2 >
                {selected.name}
              </h2>
              <h2 onClick ={ () => props.history.push(`/weather/${selected.weather_id}`)}> Expand </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>

  )
}