
import React, {useState, useEffect} from 'react';
import {retrieveCorrectData} from './ProcessData.js';


function SearchPane (props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [URL, setURL] = useState(null);

    function urlBuilder(location) {
      var holder = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=6ac9d8457944d2ed21140489baf8c5dc&units=metric"; 
      props.returnAPI(holder);
    }

    function handleChange(event) {
        var update = event.target.value;
        setSearchTerm(update);
      }
    
    const handleClick = (event) => {
        console.log(`searchterm is ` + searchTerm);
        console.log(`searching URL with location: ${searchTerm}`);
        urlBuilder(searchTerm);
        event.preventDefault();
      }

return (        
<div id = "search-pane" >
<form className="form-group">
    <input 
      type="text"
      className="form-control"
      name="search-query"
      placeholder="Search location"
      onChange={handleChange}
      value = {searchTerm}
    /> 
    <br />
    <button 
      type = "submit"
      className="btn btn-primary"
      onClick = {handleClick}> Search 
    </button> 
</form> 
</div>
);
}

export default SearchPane;