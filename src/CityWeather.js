import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
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
        weatherIcon = <FontAwesomeIcon  icon={faBolt} size="70px"/>;
      } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} size="70px"/>;
      } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} size="70px"/>;
      } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} size="70px"/>;
      } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} size="70px"/>;
      } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} size="70px"/>;
      } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} size="70px"/>;
      }
   

    console.log(props, "PROPS IN CITY QWEATHER")
    

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,

        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
          },
          title: {
            fontSize: 14,
          },
          pos: {
            marginBottom: 12,
          },
          marginAutoContainer: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            backgroundColor: 'orange',
          },
          marginAutoItem: {
            margin: 'auto'
          },
          weatherCard : {
            height: "100%",

          }
        
      }));
      
      const classes = useStyles();
    //   console.log(props.weather)

      const sunset = new Date(props.city.city.weather.current.sunset * 1000).toLocaleTimeString('en-IN')
      const sunrise = new Date(props.city.city.weather.current.sunrise * 1000).toLocaleTimeString('en-IN');
    



    return (
        <div className={classes.marginAutoContainer}>
            <div className={classes.marginAutoItem}>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs ={6}>
                    <Paper className={classes.paper}>
                        <div>{name}</div>
                        <div>{date}</div>

                    </Paper>
                </Grid>
                
                <Grid container item xs={12} spacing={1}>
  
                        <Grid item xs>
                            <Card className={classes.root} variant="outlined" style={{}}>
                                <CardContent>
                                    <Icon  style={{ fontSize: 70 }}>
                                    {weatherIcon}
                                    </Icon>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                      
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        ICON
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    
                    <Grid container item xs spacing={1}>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       {max}&#176;
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        High
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {wind_speed}mph
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       Wind
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {sunrise}
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Sunrise
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       {min}&#176;
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       Low
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {humidity}%
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Rain
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs = {4}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {sunset}
                                    </Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Sunset
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>            
                </Grid>
                </Grid>


                
                <Grid item xs={12}>
                    <Paper className={classes.paper}>FORECAST</Paper>
                </Grid>
            </Grid>
      </div>

            </div>
            

        </div>
        
    )

}