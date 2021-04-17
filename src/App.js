import './App.css';
import {
  retrieveCorrectData
} from './ProcessData.js';
import React, {
  useState
} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [URL, setURL] = useState(null);
  const [validURL, setURLValidity] = useState();

  function handleChange(event) {
    var update = event.target.value;
    setSearchTerm(update);
  }

  function handleClick(event) {
    console.log(`searchterm is ` + searchTerm);
    console.log(`searching URL with location: ${searchTerm}`);
    var urlHolder = urlBuilder(searchTerm);
    console.log("urlHolder is " + urlHolder);
    setURL(urlHolder);
    setURL(urlHolder);
    fetchData();
    event.preventDefault();
  }

  function urlBuilder(location) {
    var holder = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=6ac9d8457944d2ed21140489baf8c5dc&units=metric"; 
    return holder;
  }

  async function fetchData() {
    console.log("URL is " + URL);
    const response = await fetch(URL);
    if (response.status !== 200) {
      alert("This is not a valid location. Please try again.")
      setSearchTerm("");
    } else {
      try {
        console.log("1");
        const data = await response.json();
        console.log('2');
        var trimmedData = retrieveCorrectData(data);
        console.log('3');
        setWeatherData(trimmedData);
        setSearchTerm("");
      } catch (error) {
        console.log('Error happened here!');
        console.error(error);
      }

    }

  }


  return ( <
    div className = "App card container-fluid" >

    <
    div className = " App-pane container-fluid" >
    <
    div id = "title" > Dan 's App</div> <
    div id = "search-pane" >
    <
    form >
    <
    div className = "form-group" >
    <
    input type = "text"
    className = "form-control"
    name = "search-query"
    placeholder = "Search location"
    onChange = {
      handleChange
    }
    value = {
      searchTerm
    }
    /> <
    /div> <
    button type = "submit"
    className = "btn btn-primary"
    onClick = {
      handleClick
    } > Search < /button> <
    /form> <
    /div>


    <
    /div>

    <
    /div>
  );
}

export default App;