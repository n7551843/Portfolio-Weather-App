import './App.css';
import {
  retrieveCorrectData
} from './ProcessData.js';
import React, {useState, useEffect} from 'react';
import SearchPane from './SearchPane.jsx';
import WeatherPane from './WeatherPane.jsx';

function App() {
  const [weatherData, setWeatherData] = useState(
    {
      name: "",
      weather: [{icon:""}],
      main: {temp:""},
      sys: {}
  });


  function retrieveAPIData (builtURL) {
    console.log(`URL is ${builtURL}`);
    fetchData(builtURL);
  }

  async function fetchData(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
      setWeatherData(prevValue => {
        var obj = {
          ...prevValue,
          name: "Unknown Location"
        };
        console.log(obj);
        return obj;
      });

    } else {
      try {
        const data = await response.json();
        var trimmedData = retrieveCorrectData(data);
        console.log(trimmedData);
        setWeatherData(trimmedData);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return ( 
  <div className = "App card container-fluid" >
    <div className = " App-pane container-fluid" >
      <div id = "title" > Dan's App
      </div> 
        < SearchPane 
          returnAPI={retrieveAPIData}
        />
        <WeatherPane 
          WeatherData={weatherData}
        />
    </div>
  </div>
  );
}

export default App;