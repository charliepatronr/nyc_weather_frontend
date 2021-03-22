import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { Image, Card, Button } from "semantic-ui-react";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 36.084621,
  lng: -96.921387,
};
const options = {
  styles: mapStyles,
  disableDoubleClickZoom: true,
};

//Google Map Component
export default function Map(props) {
  const [selected, setSelected] = useState(null);
  const [newMarkers, setNewMarkers] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  //Saving ref to map allows to access map without causing reloads
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //returns the desired city weather object based on latitude to display the correct map infowindow
  // a persisted city in db can be passed in or a new city created by a marker

  const findCityWeather = (lat, response = undefined) => {
    let element = props.cities.find((element) => element.city.lat === lat);
    let target;
    if (element) {
      //intented for persisted cities in db
      const id = element.city.weather_id;
      const { icon } = element.city.weather.current.weather[0];
      const { feels_like, temp } = element.city.weather.current;
      const { name, lat, lon } = element.city;
      target = {
        id,
        name,
        lat,
        lon,
        iconSrc: `https://openweathermap.org/img/w/${icon}.png`,
        feels_like,
        temp,
      };
    } else {
      // intented for new city markers
      const { icon } = response.current.weather[0];
      const { feels_like, temp } = response.current;
      const { lat, lon, timezone } = response;
      target = {
        timezone,
        lat,
        lon,
        iconSrc: `https://openweathermap.org/img/w/${icon}.png`,
        feels_like,
        temp,
      };
    }

    return target;
  };

  //to create click function that will always be the same
  const onMapDblClick = React.useCallback((e) => {
    setNewMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  // const url = "http://localhost:3000/marker";
  const url = "https://nyc-weather-backend.herokuapp.com/marker"

  //Fetches city weather after double click on map
  const fetchWeather = (lat, lng) => {
    let data = {
      lat: lat,
      lon: lng,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${url}`, reqObj)
      .then((response) => {
        if (!response.ok) {
          throw Error(
            `Could not connect to Open Weather API status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((response) => {
        let weather = findCityWeather(response.lat, response);
        setSelected(weather);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={options}
        onDblClick={onMapDblClick}
        onLoad={onMapLoad}
      >
        {/* renders persisted markers in db on map*/}
        {props.cities.map((element) => (
          <Marker
            key={element.city.weather_id}
            weatherID={element.city.weather_id}
            position={{
              lat: element.city.lat,
              lng: element.city.lon,
            }}
            onClick={() => {
              let weather = findCityWeather(element.city.lat);
              setSelected(weather);
            }}
          />
        ))}

        {/* renders new markers created with double click */}

        {newMarkers.length >= 1 &&
          newMarkers.map((element) => (
            <Marker
              key={element.time}
              position={{
                lat: element.lat,
                lng: element.lng,
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
              onClick={() => {
                fetchWeather(element.lat, element.lng);
              }}
            />
          ))}

        {/* renders info window based on selected marker saved in selected state */}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lon }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div style={{ color: "black" }}>
              <Card className="forecast" centered>
                <Card.Content textAlign="center">
                  <Card.Header
                    style={{
                      fontSize: "30px",
                      paddingBottom: "5px",
                      fontWeight: 400,
                    }}
                  >
                    {selected.name ? selected.name : `${selected.timezone}`}
                  </Card.Header>
                  <Card.Meta>
                    <span style={{ color: "gray" }}>Timezone</span>
                  </Card.Meta>
                  <div
                    style={{
                      fontSize: "23px",
                      paddingBottom: "3px",
                      fontWeight: 400,
                    }}
                  >
                    <Image src={selected.iconSrc} size="tiny" />
                    {selected.temp}&nbsp;&#176;F
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    Feels like {selected.feels_like}&#176;
                  </div>
                </Card.Content>
                <Card.Content textAlign="center">
                  {selected.id ? (
                    <Button
                      onClick={() => {
                        props.history.push(`/weather/${selected.id}`);
                      }}
                    >
                      <p>
                        <strong> FORECAST</strong>{" "}
                      </p>
                    </Button>
                  ) : (
                    <p>{`Lat: ${selected.lat} Lon: ${selected.lon}`}</p>
                  )}
                </Card.Content>
              </Card>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}