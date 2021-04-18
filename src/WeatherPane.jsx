import React, {useState} from 'react';
import WeatherImg from './WeatherImg.jsx';


function WeatherPane (props) {

    // function testIcon () {
    //     console.log("testIcon called")
    //     return (icon === "" ? "" : icon);
    // }

    // function buildIMG () {
    //     console.log("buildIMG called")
    //     return (
    //         <img src="`${iconURL}`" />
    //     );
    // }

    return (
        <div className="Weather-pane">
            <div className="Location">{props.WeatherData.name !== "Unknown Location" ? props.WeatherData.name : "Sorry, that Location is not Recognised.  Please try again."}</div>
            <div> {props.WeatherData.name !== "Unknown Location" ? (props.WeatherData.main.temp === "" ? "" : props.WeatherData.main.temp + "°C") : ""}</div>
            <div> {props.WeatherData.name !== "Unknown Location" && props.WeatherData.weather[0].description}</div>
            < WeatherImg
                iconData={props.WeatherData.weather[0].icon}
                iconAlt={props.WeatherData.weather[0].description}
                name={props.WeatherData.name}
             />
        </div>
    );
}

export default WeatherPane;