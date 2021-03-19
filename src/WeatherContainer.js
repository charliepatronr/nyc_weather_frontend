import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CityWeather from './CityWeather'



export default function WeatherContainer (props) {

    const [currentCity, setCurrent] = useState(null)

      useEffect(
        () => {
            const target = parseInt(props.match.params.id)
            const city = props.cities.find((element) => (element.city.weather_id === target)) 
            console.log(city, 'CITY IN USE EFFECT')   
            setCurrent(city)
        },
        [props])

        
      console.log(props.cities, 'PROPS')


    return (
        <div>
            {currentCity ? 
                <CityWeather city={currentCity}/>
                : 
                <div> ADD LOADING PAGE</div>
            }
      </div>
    )

}