import React, {useState} from 'react';


function WeatherPane (props) {
    var iconURL = `https://openweathermap.org/img/wn/${props.WeatherData.weather[0].icon}@2x.png`

    return (
        <div className="Weather-pane">
            <div className="Location">{props.WeatherData.name}</div>
            <div> {props.WeatherData.main.temp}°C</div>
            <div> {props.WeatherData.weather[0].description}</div>
            <img src={`${iconURL}`}></img>
        </div>
    );
}

export default WeatherPane;