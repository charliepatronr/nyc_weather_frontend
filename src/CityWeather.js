import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { Grid, Image, Card, Segment, Container, Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Forecast from './Forecast'


import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
  } from '@fortawesome/free-solid-svg-icons';

 export default function CityWeather (props) {
    const {...city} = props.city.city
    const {id, name} = city
    const {wind_speed, dt, humidity, temp,  } = city.weather.current
    const {main, description } = city.weather.current.weather[0]
    const {min, max} = city.weather.daily[0].temp
    const [...daily] = city.weather.daily

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

    let weatherIcon = null;

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon  icon={faBolt} color="white" size="10x"/>;
      } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} color="white" size="10x"/>;
      } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" size="10x"/>;
      } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} color="white" size="10x"/>;
      } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} color="white" size="10x"/>;
      } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} color="white" size="10x"/>;
      } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} color="white" size="10x"/>;
      }
   
    console.log(daily, "DAILY FORECAST")

    

    const sunset = new Date(props.city.city.weather.current.sunset * 1000).toLocaleTimeString('en-IN')
    const sunrise = new Date(props.city.city.weather.current.sunrise * 1000).toLocaleTimeString('en-IN');

    const renderForecast = (daily) => {
        return daily.map(element => <Forecast key={element.dt} forecast={element}/>)
    }

    console.log(renderForecast(daily), 'FORECAST MAP')
    



    return (
      <div  >
        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle' stackable >


          <Grid.Row  >
            <Grid columns={2} textAlign='bottom'>
              <Grid.Column>
              <Card fluid className="currentWeather">
                  <Card.Content>
                    <Card.Header style={{color: 'white', fontSize: '60px', fontWeight: 'bold'}}>
                        {name}
                    </Card.Header>
                    <Card.Description style={{color: 'white', fontSize: '30px'}}>
                        {date}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              
            </Grid>
          </Grid.Row>


          <Grid.Row >
            <Grid columns={2}>

              
              <Grid.Row >

              <Grid.Column >

                <Card fluid className="currentWeather">
                  <Card.Content>
                      <Card.Description>
                          <Grid columns={2}>
                              <Grid.Column width={7} textAlign="right">
                              {weatherIcon}

                              </Grid.Column>
                              <Grid.Column textAlign="left" verticalAlign="middle">
                                  <div style={{fontSize: '50px', paddingBottom: '20px'}}>
                                    {temp}&#176;
                                  </div>
                                  <div style={{fontSize: '30px',}}>
                                    {description}
                                  </div>
                              </Grid.Column>
                          </Grid>
                      </Card.Description>
                  </Card.Content>
                </Card>
                </Grid.Column>

                <Grid.Column>

                <Grid columns={3} style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px'}}>

                  <Grid.Row> 
                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div>{max}&#176; </div>
                            <div> High</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card className="current">
                      <Card.Content>
                          <Card.Description>
                            <div>{wind_speed} mph </div>
                            <div> Wind</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>


                    <Grid.Column>
                      <Card className="current">
                      <Card.Content>
                          <Card.Description>
                            <div>{sunrise} </div>
                            <div> Sunrise</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                  </Grid.Row>

                  <Grid.Row>
                  <Grid.Column>
                    <Card className="current">
                        <Card.Content>
                            <Card.Description>
                                <div>{min}&#176; </div>
                                <div> Low</div>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card className="current">
                        <Card.Content>
                                <Card.Description>
                                    <div>{humidity} % </div>
                                    <div> Rain </div>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card className="current">
                    <Card.Content>
                          <Card.Description>
                            <div>{sunset} </div>
                            <div> Sunset</div>
                          </Card.Description>
                        </Card.Content>
                    </Card>
                  </Grid.Column>
                  </Grid.Row>
                </Grid>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Grid.Row>

        </Grid>

        <Grid.Row >
            <Grid columns={8}>
                {renderForecast(daily)}
            </Grid>
          </Grid.Row>

      </div>

    )

}