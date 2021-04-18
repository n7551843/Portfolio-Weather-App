import React from 'react';
import WeatherImg from './WeatherImg.jsx';

function WeatherPane (props) {

    var errorText = "Sorry, something has gone wrong and we couldn't find the weather for this location.  Please check the search spelling, or enter a different location."

    return (
        <div className="card Weather-pane">
            <div className="Weather-pane-top">
                <div id="Weather-location">
                    {props.WeatherData.name !== "Unknown Location" ? props.WeatherData.name : "Unknown Location"}
                </div>       
            </div>
            <div className="Weather-pane-bottom">
                <div className="Weather-pane-bottom-left">
                    <div id="Weather-temp"> 
                        {props.WeatherData.name !== "Unknown Location" ? (props.WeatherData.main.temp === "" ? "" : props.WeatherData.main.temp + "°C") : ""}
                    </div>  
                    <div id="Weather-description"> 
                        {props.WeatherData.name !== "Unknown Location" ? props.WeatherData.weather[0].description : ""}
                    </div> 
                    <div id="Weather-error"> 
                        {props.WeatherData.name === "Unknown Location" && errorText}
                    </div>     
                </div>
                <div className="Weather-pane-bottom-right">
                    < WeatherImg
                        iconData={props.WeatherData.weather[0].icon}
                        iconAlt={props.WeatherData.weather[0].description}
                        name={props.WeatherData.name}
                    />
                </div>
            </div>
        </div>
    );
}

export default WeatherPane;