import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import WeatherContainer from "./WeatherContainer";
import About from "./About";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const url = "https://nyc-weather-backend.herokuapp.com/cities";
  // const url = "http://localhost:3000/cities";
  const [cities, setCities] = useState([]);

  //API call on initialization for the 5 current cities in db
  useEffect(() => {
    fetch(`${url}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(
            `Could not connect to Open Weather API status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((response) => {
        setCities([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    //Utilized browser router for navigation and page rendering
    <BrowserRouter>
      <Switch>
        <Route
          path="/about"
          render={(props) => <About {...props} cities={cities} />}
        />
        <Route
          path="/weather/:id"
          render={(props) => <WeatherContainer {...props} cities={cities} />}
        />
        <Route
          path="/weather"
          render={(props) => <LandingPage {...props} cities={cities} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <LandingPage {...props} cities={cities} />}
        />
        {/* ADD 404 PAGE  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;