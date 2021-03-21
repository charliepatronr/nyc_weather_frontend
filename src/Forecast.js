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

      const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;

      const timeConverter = (dt) => {
          let target = new Date(dt * 1000)
          var month = months[target.getMonth()];
          var date = target.getDate();
          var time = month + ' ' + date;
          return time;
      }

      let roundedTemps = props.round(null, max, min)

    return (
        <Grid.Column>
            <Card className="forecast">
                <Card.Content textAlign="center">
                    <Card.Description>
                        <div ><strong> {timeConverter(dt)} </strong> </div>
                        <Image src={iconSrc} />
                        <div> </div>
                        <div >High&nbsp;&nbsp; {roundedTemps.max}&#176; </div>
                        <div >Low&nbsp;&nbsp; {roundedTemps.min}&#176; </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}