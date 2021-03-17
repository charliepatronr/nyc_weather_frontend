import React, {useState, useEffect} from "react"
import LandingPage from './LandingPage'
import CityWeather from './CityWeather'

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
      <Route path='/weather/:id' component={CityWeather}/>
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
    </BrowserRouter>

  );
}

export default App;