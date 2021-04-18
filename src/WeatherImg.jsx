import React from 'react';

function WeatherImg (props) {

    var icon = props.iconData;
    var iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

if (icon === "") {
    return null;
}else if (props.name === "Unknown Location") {
    return (<div><br></br><img alt="sad face" 
    src="https://icons-for-free.com/iconfiles/png/512/face+sad+smiley+icon-1320183582392064872.png" 
    height="100px" 
    width="100px"></img></div>);
} else {
    console.log("icon is not blank string");
    return (<img alt={`Image of ${props.iconAlt}`} src={`${iconURL}`}></img>);
}
}

export default WeatherImg;