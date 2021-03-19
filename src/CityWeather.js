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

 export default function CityWeather (props) {
    
    const {id, name} = props.city.city
    const {wind_speed, dt, humidity, temp,  } = props.city.city.weather.current
    const {main} = props.city.city.weather.current.weather[0]
    const {min, max} = props.city.city.weather.daily[0].temp
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
      console.log(main, 'MAIN')

    //   if (main === 'Thunderstorm') {
    //     weatherIcon = <Icon className="fa fa-bolt" />;
    //   } else if (main === 'Drizzle') {
    //     weatherIcon = <Icon className="fa fa-cloud-rain" />;
    //   } else if (main === 'Rain') {
    //     weatherIcon = <Icon className="fa fa-cloud-showers-heavy" />;
    //   } else if (main === 'Snow') {
    //     weatherIcon = <Icon className="fa fa-snowflake" />;
    //   } else if (main === 'Clear') {
    //     weatherIcon = <Icon className="fa fa-sun"/>;
    //   } else if (main === 'Clouds') {
    //     weatherIcon = <Icon className="fa fa-cloud" />;
    //   } else {
    //     weatherIcon = <Icon className="fa fas fa-smog" />;
    //   }
    //     //tornado is font aw pro icon
    //     // else if (main === 'Tornado') {
    //     // weatherIcon = <Icon className="fas fa-cloud" />;

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon  icon={faBolt} size="10x"/>;
      } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} size="10x"/>;
      } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} size="10x"/>;
      } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} size="10x"/>;
      } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} size="10x"/>;
      } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} size="10x"/>;
      } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} size="10x"/>;
      }
   

    console.log(props, "PROPS IN CITY QWEATHER")
    

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       flexGrow: 1,

    //     },
    //     paper: {
    //       padding: theme.spacing(2),
    //       textAlign: 'center',
    //       color: theme.palette.text.secondary,
    //     },
    //     bullet: {
    //         display: 'inline-block',
    //         margin: '0 2px',
    //         transform: 'scale(0.8)',
    //       },
    //       title: {
    //         fontSize: 14,
    //       },
    //       pos: {
    //         marginBottom: 12,
    //       },
    //       marginAutoContainer: {
    //         width: '100vw',
    //         height: '100vh',
    //         display: 'flex',
    //         backgroundColor: 'orange',
    //       },
    //       marginAutoItem: {
    //         margin: 'auto'
    //       },
    //       weatherCard : {
    //         height: "100%",

    //       }
        
    //   }));
      
    //   const classes = useStyles();
    //   console.log(props.weather)

      const sunset = new Date(props.city.city.weather.current.sunset * 1000).toLocaleTimeString('en-IN')
      const sunrise = new Date(props.city.city.weather.current.sunrise * 1000).toLocaleTimeString('en-IN');
    



    return (
      <div  >
        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
          <Grid.Row >
            <Grid columns={1}>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Grid.Row>

          <Grid.Row >
            <Grid columns={2}>

              
              <Grid.Row stretched>
              <Grid.Column >

                <Card fluid className="currentWeather">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
                </Grid.Column>

                <Grid.Column>

                <Grid columns={3}>

                  <Grid.Row> 
                    <Grid.Column>
                      <Card className="forecast">
                        <Card.Content>
                          <Card.Header content='Jake Smith' />
                          <Card.Meta content='Musicians' />
                          <Card.Description content='Jake is a drummer living in New York.' />
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card className="forecast">
                        <Card.Content>
                          <Card.Header content='Jake Smith' />
                          <Card.Meta content='Musicians' />
                          <Card.Description content='Jake is a drummer living in New York.' />
                        </Card.Content>
                      </Card>
                    </Grid.Column>


                    <Grid.Column>
                      <Card className="forecast">
                        <Card.Content>
                          <Card.Header content='Jake Smith' />
                          <Card.Meta content='Musicians' />
                          <Card.Description content='Jake is a drummer living in New York.' />
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                  </Grid.Row>

                  <Grid.Row>
                  <Grid.Column>
                    <Card className="forecast">
                      <Card.Content>
                        <Card.Header content='Jake Smith' />
                        <Card.Meta content='Musicians' />
                        <Card.Description content='Jake is a drummer living in New York.' />
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card className="forecast">
                      <Card.Content>
                        <Card.Header content='Jake Smith' />
                        <Card.Meta content='Musicians' />
                        <Card.Description content='Jake is a drummer living in New York.' />
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column>
                    <Card className="forecast">
                      <Card.Content>
                        <Card.Header content='Jake Smith' />
                        <Card.Meta content='Musicians' />
                        <Card.Description content='Jake is a drummer living in New York.' />
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
          <Grid columns={7}>
            <Grid.Column>
              <Card className="forecast">
                <Card.Content>
                  <Card.Header content='Jake Smith' />
                  <Card.Meta content='Musicians' />
                  <Card.Description content='Jake is a drummer living in New York.' />
                </Card.Content>
              </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card className="forecast">
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
          </Grid.Row>

      </div>

    )

}