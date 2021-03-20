import React, {useState} from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles"
import { Image } from 'semantic-ui-react'




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

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const findCityWeather = (id) => {
      let element =  props.cities.find(element => element.city.weather_id === id)
      console.log(element, 'ELEMENT')
      const {icon } = element.city.weather.current.weather[0]
      const {feels_like, temp} = element.city.weather.current
      const {name, lat, lon} = element.city
      const target = {
          id,
          name,
          lat, 
          lon,
          iconSrc:  `https://openweathermap.org/img/w/${icon}.png`, 
          feels_like, 
          temp
      }
      return target
      
  }


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
            weatherID={element.city.weather_id}
            position ={{
              lat: element.city.lat, 
              lng: element.city.lon
            }}
            onClick = {() => {
                let weather = findCityWeather(element.city.weather_id)
                console.log(weather)

              setSelected(weather)
              console.log(selected , 'SELECTED')
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
            <div style={{color: 'black'}}>
              <h2 >
                {selected.name}
              </h2>
              <Image src={selected.iconSrc}/>
              <p>{selected.temp}</p>
              <p>Feels like: {selected.feels_like}</p>
              
              <p onClick ={ () => props.history.push(`/weather/${selected.id}`)}> Forecast </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>

  )
}