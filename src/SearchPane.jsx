
import React, {useState} from 'react';

function SearchPane (props) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        var update = event.target.value;
        setSearchTerm(update);
      }
    
    const handleClick = (event) => {
        urlBuilder(searchTerm);
        event.preventDefault();
      }

    function urlBuilder(location) {
        var holder = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6ac9d8457944d2ed21140489baf8c5dc&units=metric`; 
        props.returnAPI(holder);
     }

return (        
<div className="search-pane" >
<form className="form-group">
    <input 
      type="text"
      className="form-control"
      id="search-bar"
      name="search-query"
      placeholder="Search location"
      onChange={handleChange}
      value = {searchTerm}
    /> 
    <br />
    <button 
      type = "submit"
      className="btn btn-light search-button"
      onClick = {handleClick}> Search 
    </button> 
</form> 
</div>
);
}

export default SearchPane;