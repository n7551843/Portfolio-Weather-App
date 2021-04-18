import React from 'react';

function WeatherImg (props) {

    var icon = props.iconData;
    var iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

if (icon === "") {
    return null;
} else if (props.name === "Unknown Location") {
    return (<div><br></br><img id="image" alt="sad face" 
    src="https://icons-for-free.com/iconfiles/png/512/face+sad+smiley+icon-1320183582392064872.png" ></img></div>);
} else {
    return (<img alt={`${props.iconAlt}`} src={`${iconURL}`}></img>);
}
}

export default WeatherImg;