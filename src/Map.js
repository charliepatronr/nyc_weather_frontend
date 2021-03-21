import React, {useState} from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles"
import { Image, Card, Icon, Button} from 'semantic-ui-react'






const libraries= ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}
const center = {
  lat: 36.084621, 
  lng: -96.921387
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
      zoom={5}
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
                <Card className="forecast" centered>
                    <Card.Content textAlign="center">
                        <Card.Header style={{fontSize: '30px', paddingBottom: '5px', fontWeight: 400}}>
                            {selected.name}
                        </Card.Header>
                        <div  style={{fontSize: '23px', paddingBottom: '3px', fontWeight: 400}}>
                            <Image src={selected.iconSrc} size="tiny"/>
                            {selected.temp}&#176;
                        </div>
                        <div style={{fontSize: '15px',}}>
                            Feels like {selected.feels_like}&#176; 
                        </div>
                    </Card.Content>
                    <Card.Content textAlign="center">
                        <Button >
                            {/* <Icon calendar outline color="black" size="massive"/> */}
                            <p onClick ={ () => props.history.push(`/weather/${selected.id}`)}> <strong> FORECAST</strong> </p>
                        </Button>
                    </Card.Content>
                </Card>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>

  )
}