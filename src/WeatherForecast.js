import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function showResponse(response) {}

  let city = "Tokyo";
  let apiKey = "28d0bff0ffaa52b09e33da6etode543b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showResponse);

  return (
    <div className="WeatherForecast">
      <div className="forecast-day">Thu</div>
      <div className="forecast-icon">🌦️</div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">19</span>
        <span className="forecast-temp-min">10</span>
      </div>
    </div>
  );
}
