import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";

export default function Forecast(props) {
  const { dt } = props.forecast;
  const { min, max } = props.forecast.temp;
  const { icon } = props.forecast.weather[0];
  const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
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

  const dateConverter = (dt) => {
    let target = new Date(dt * 1000);
    var month = months[target.getMonth()];
    var date = target.getDate();
    var time = month + " " + date;
    return time;
  };

  let roundedTemps = props.round(null, max, min);

  return (
    <Grid.Column>
      <Card className="forecast">
        <Card.Content textAlign="center">
          <Card.Description>
            <div>
              <strong> {dateConverter(dt)} </strong>{" "}
            </div>
            <Image src={iconSrc} />
            <div> </div>
            <div>High&nbsp;&nbsp; {roundedTemps.max}&#176; </div>
            <div>Low&nbsp;&nbsp; {roundedTemps.min}&#176; </div>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
