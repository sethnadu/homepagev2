import React from "react";

function WeatherApi(props) {
    return (
      <div>
      <div className ="infoApi">
        <h1>{props.localTime}</h1>
        <h2>Lancaster, PA</h2>
        <div className ="weatherInfo">
            <div>
        <p><span>{props.weather.WeatherText}</span></p>{" "}  
        <p>Temperature: <span>{props.temperature.Value}°</span></p>{" "}  
        </div>
        <div>
        <p>Real Feel: <span>{props.realFeel.Value}°</span></p>{" "}  
        <p>Humidity: <span>{props.weather.RelativeHumidity}</span></p>
        </div>
        </div>
      </div>
      </div>
    );
  }
//    H6FPH52H31AV
  export default WeatherApi;
  