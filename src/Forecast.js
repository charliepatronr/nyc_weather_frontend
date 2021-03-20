import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { Grid, Image, Card, Segment, Container, Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
  } from '@fortawesome/free-solid-svg-icons';

 export default function Forecast (props) {

    const {dt, } = props.forecast
    const {min, max} = props.forecast.temp

    const {main, description, icon } = props.forecast.weather[0]

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Nocvember',
        'December',
      ];

      const currentDate = new Date();
      const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;
      const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;

      const timeConverter = (dt) => {
          let target = new Date(dt * 1000)

          var year = target.getFullYear();
          var month = months[target.getMonth()];
          var date = target.getDate();
          var hour = target.getHours();
          var min = target.getMinutes();
          var sec = target.getSeconds();
          var time = month + ' ' + date;
          return time;
      }

      let weatherIcon = null;
      console.log(main, 'MAIN')

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon  icon={faBolt} color="white" size="2x"/>;
      } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} color="white" size="2x"/>;
      } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" size="2x"/>;
      } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} color="white" size="2x"/>;
      } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} color="white" size="2x"/>;
      } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} color="white" size="2x"/>;
      } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} color="white" size="2x"/>;
      }
   
    
    



    return (
        <Grid.Column>
            <Card className="forecast">
                <Card.Content>
                    <Card.Header>

                    </Card.Header>
                    <Card.Description>
                        <div>{timeConverter(dt)} </div>
                        {/* <div>{weatherIcon} 
                            <Card.Meta>
                                {description}
                            </Card.Meta>
                        </div> */}
                        <Image src={iconSrc} />
                        <div>High: {max}&#176; </div>
                        <div>Low: {min}&#176; </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}