import React, { useState, useEffect } from "react";
import CityWeather from "./CityWeather";
import Loading from "./Loading";

//Container to render City weather component (more detailed weather and 7 day forecast)
export default function WeatherContainer(props) {
  const [currentCity, setCurrent] = useState(null);

  useEffect(() => {
    const target = parseInt(props.match.params.id);
    const city = props.cities.find(
      (element) => element.city.weather_id === target
    );
    setCurrent(city);
  }, [props]);

  console.log(props.cities, "PROPS");

  return (
    <div className="weatherContainer">
      {currentCity ? (
        <CityWeather city={currentCity} history={props.history} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
