import React from "react";
import axios from 'axios';

export default function Weather(props) {
  function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
  } 
let apiKey="2129fd04df3dd86efb944950e327f7a5";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then (handleResponse);
  
  return (
    <div className="App">
      <p>
         Hello from Weather
       </p>
      
    </div>
  );
}

