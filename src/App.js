import React, {useState, useEffect} from "react"
import LandingPage from './LandingPage'
import WeatherContainer from './WeatherContainer'
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  BrowserRouter, 
  Switch, 
  Route, 
} from "react-router-dom"


function App() {
    const url =  'http://localhost:3000/cities'
    const [cities, setCities] = useState([])
  
    useEffect( () => {
      fetch(`${url}`)
      .then(response => response.json())
      .then(response => {
        setCities([...response])
        })
    }, [])

    // create add and delete city function and pass it down ass props to landing page
  
  return (

    <BrowserRouter>
  
      <Switch>
        {/* MUST PASS ALL STATE TO CITY WEATHER COMPONENT SINCE I CANT KNOW WHICH CITY WILL BE RENDERED 
        OTHER OPTION IS TO MAKE API CALL WITH THE WEATER_ID IN URL FOR THAT SPECIFIC CITY */}
        <Route path='/weather/:id' 
          render ={(props) =>(
          <WeatherContainer {...props} cities={cities}/>
        )}/>
        <Route path='/weather' 
        render ={(props) =>(
            <LandingPage {...props} cities={cities}/>
        )}/>
        <Route exact path='/' 
        render ={(props) =>(
            <LandingPage {...props} cities={cities}/>
        )}/>
        {/* ADD 404 PAGE  */}
      </Switch>
      <CssBaseline/>
    </BrowserRouter>

  );
}

export default App;