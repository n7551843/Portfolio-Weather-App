import './App.css';
import {
  retrieveCorrectData
} from './ProcessData.js';
import React, {useState} from 'react';
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

  /*  The below two functions, retrieveAPIData and fetchData, make the actual API call.
      If response code is 200, fetchData calls retrieveCorrectData to trim out any data 
      I wasn't using. If the response code isn't 200, they set the WeatherData object's 
      name property to 'Unknown Location, which triggers different rendering in the 
      WeatherPane component. 
  */

  function retrieveAPIData (builtURL) {
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
        return obj;
      });
    } else {
      try {
        const data = await response.json();
        var trimmedData = retrieveCorrectData(data);
        setWeatherData(trimmedData);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return ( 
  <div className = "App card container-fluid" >
    <div className = " App-pane container-fluid" >
      <div id="title" > Dan's Easy Weather app</div>
      <div id="description">Find out the current weather anywhere in the world! Simply search a location to begin...</div>
      <div className="App-top-pane">
        < SearchPane 
          returnAPI={retrieveAPIData}
        />
      </div>
        <WeatherPane 
          WeatherData={weatherData}
        />
    </div>
  </div>
  );
}

export default App;