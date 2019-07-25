import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Route, Switch} from "react-router-dom";
import './App.scss';

import Nav from "./Components/Nav.js";
import Professional from "./Components/Professional.js";
import Personal from "./Components/Personal.js";
import WeatherApi from "./Components/weatherapi.js";
import MoonPhases from "./Components/mooncycles.js";






function App() {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("")
  const [realFeel, setRealFeel] = useState("");

  useEffect(() => {
  axios
  .get("http://dataservice.accuweather.com/currentconditions/v1/330289?apikey=gl1kPHFBQKns6clBxYMp19MgsbXr9aKc&language=en-us&details=true")
  .then(response => {
    setWeather(response.data[0]);
    setTemperature(response.data[0].Temperature.Imperial);
    setRealFeel(response.data[0].RealFeelTemperature.Imperial)
  })
  .catch(error => {
    console.log("Something went Wrong!", error)
  })
}, []);

const [localTime, setLocalTime] = useState("");

useEffect(() => {
  axios
  .get("http://api.timezonedb.com/v2.1/get-time-zone?key=H6FPH52H31AV&format=json&by=zone&zone=America/New_York")
  .then(response => {
   setLocalTime(response.data.formatted);
  })
  .catch(error => {
    console.log("Something went Wrong!", error)
  })
}, []);

const [phases, setPhases] = useState("");

useEffect(() => {
  axios
  .get("https://api.usno.navy.mil/moon/phase?date=today&nump=4")
  .then(response => {
   setPhases(response.data.phasedata);
  })
  .catch(error => {
    console.log("Something went Wrong!", error)
  })
}, []);





 

 
  return (
    <div className="App">
    <Nav />
    <WeatherApi localTime = {localTime} weather = {weather} temperature = {temperature} realFeel = {realFeel} />
    <MoonPhases phases = {phases} setPhases = {setPhases} />
     <Switch  >
       <Route  path ="/professional" component ={Professional} />
       <Route  path ="/personal" component ={Personal} />
     </Switch>
    
    </div>
  );
}

export default App;
