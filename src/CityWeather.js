import React from "react";
import { Grid, Card, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Forecast from "./Forecast";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function CityWeather(props) {
  const { ...city } = props.city.city;
  const { name, state, country } = city;
  const { wind_speed, humidity, temp } = city.weather.current;
  const { main, description } = city.weather.current.weather[0];
  const { min, max } = city.weather.daily[0].temp;
  const [...daily] = city.weather.daily;
  const descriptionCapitalized =
    description.charAt(0).toUpperCase() + description.slice(1);
  const sunset = new Date(
    city.weather.current.sunset * 1000
  ).toLocaleTimeString("en-IN");
  const sunrise = new Date(
    city.weather.current.sunrise * 1000
  ).toLocaleTimeString("en-IN");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nocvember",
    "December",
  ];

  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;

  //returns corresponding icon according to weather

  const getWeatherIcon = (main) => {
    let weatherIcon = null;

    if (main === "Thunderstorm") {
      weatherIcon = <FontAwesomeIcon icon={faBolt} color="white" size="10x" />;
    } else if (main === "Drizzle") {
      weatherIcon = (
        <FontAwesomeIcon icon={faCloudRain} color="white" size="10x" />
      );
    } else if (main === "Rain") {
      weatherIcon = (
        <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" size="10x" />
      );
    } else if (main === "Snow") {
      weatherIcon = (
        <FontAwesomeIcon icon={faSnowflake} color="white" size="10x" />
      );
    } else if (main === "Clear") {
      weatherIcon = <FontAwesomeIcon icon={faSun} color="white" size="10x" />;
    } else if (main === "Clouds") {
      weatherIcon = <FontAwesomeIcon icon={faCloud} color="white" size="10x" />;
    } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} color="white" size="10x" />;
    }

    return weatherIcon;
  };

  //allows for country to be rendered next to city if no city is in api response
  const stateOrCountry = () => {
    let sc = null;
    if (state.length === 0) {
      sc = country;
    } else {
      sc = state;
    }
    return sc;
  };

  //rounds temps
  const roundedTemps = (temp, max, min) => {
    return {
      temp: Math.round(temp),
      max: Math.round(max),
      min: Math.round(min),
    };
  };
  let newTemps = roundedTemps(temp, max, min);

  //renders forecast component
  const renderForecast = (daily) => {
    return daily.map((element) => (
      <Forecast key={element.dt} forecast={element} round={roundedTemps} />
    ));
  };

  //renders grid with weather information
  //Forecast component is rendered for 7 day forecast
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
        stackable
      >
        {/* <Grid.Row  textAlign="right" verticalAlign='bottom'  >
                <Grid.Column width={15}>
                <Button onClick ={ () => props.history.push('/weather')}>
                      HOME
                  </Button>
                </Grid.Column>
            </Grid.Row>


          <Grid.Row >
            <Grid columns={2}  textAlign='left' verticalAlign='bottom'>
              <Grid.Column width={13} >
              <Card fluid className="currentWeather">
                  <Card.Content>
                    <Card.Header style={{color: 'white', fontSize: '60px', fontWeight: 'bold'}}>
                        {name}, {stateOrCountry}
                    </Card.Header>
                    <Card.Description style={{color: 'white', fontSize: '30px'}}>
                        {date}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              
            </Grid>
          </Grid.Row> */}

        <Grid.Row>
          <Grid columns={2}>
            <Grid.Column width={12} textAlign="left">
              <Card fluid className="currentWeather">
                <Card.Content>
                  <Card.Header
                    style={{
                      color: "white",
                      fontSize: "60px",
                      fontWeight: "bold",
                    }}
                  >
                    {name}, {stateOrCountry()}
                  </Card.Header>
                  <Card.Description
                    style={{ color: "white", fontSize: "30px" }}
                  >
                    {date}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Button onClick={() => props.history.push("/weather")}>HOME</Button>
          </Grid>
        </Grid.Row>

        {/* <Grid.Row>
            <Grid columns={2} >
              <Grid.Column  verticalAlign ='bottom' textAlign='left'>
                <Card fluid className="currentWeather">
                    <Card.Content>
                        <Card.Header style={{color: 'white', fontSize: '60px', fontWeight: 'bold'}}>
                        {name}, {stateOrCountry}
                        </Card.Header>
                        <Card.Description style={{color: 'white', fontSize: '30px'}}>
                            {date}
                        </Card.Description>
                    </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column  width={8} textAlign='right' verticalAlign ='top'>
              <Button onClick ={ () => props.history.push('/weather')}>
                      HOME
                  </Button>

              </Grid.Column>
    
            </Grid>
</Grid.Row> */}

        <Grid.Row>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid className="currentWeather">
                  <Card.Content>
                    <Card.Description>
                      <Grid columns={2}>
                        <Grid.Column width={7} textAlign="right">
                          {getWeatherIcon(main)}
                        </Grid.Column>
                        <Grid.Column textAlign="left" verticalAlign="middle">
                          {/* <div style={{fontSize: '50px', paddingBottom: '20px'}}> */}
                          <div
                            style={{
                              fontSize: "60px",
                              paddingBottom: "30px",
                              fontWeight: 550,
                            }}
                          >
                            {newTemps.temp}&#176;
                          </div>
                          <div style={{ fontSize: "30px" }}>
                            {descriptionCapitalized}
                          </div>
                        </Grid.Column>
                      </Grid>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Grid
                  columns={3}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "20px",
                    fontSize: "17px",
                  }}
                >
                  <Grid.Row>
                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div style={{ paddingBottom: "5px" }}>
                              {newTemps.max}&#176;{" "}
                            </div>
                            <div> High</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div style={{ paddingBottom: "5px" }}>
                              {wind_speed} mph{" "}
                            </div>
                            <div> Wind</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>

                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div style={{ paddingBottom: "5px" }}>
                              {sunrise}{" "}
                            </div>
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
                            <div style={{ paddingBottom: "5px" }}>
                              {newTemps.min}&#176;{" "}
                            </div>
                            <div> Low</div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div style={{ paddingBottom: "5px" }}>
                              {humidity} %{" "}
                            </div>
                            <div> Rain </div>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column>
                      <Card className="current">
                        <Card.Content>
                          <Card.Description>
                            <div style={{ paddingBottom: "5px" }}>
                              {sunset}{" "}
                            </div>
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

      <Grid.Row>
        <Grid columns={8}>{renderForecast(daily)}</Grid>
      </Grid.Row>
    </div>
  );
}
