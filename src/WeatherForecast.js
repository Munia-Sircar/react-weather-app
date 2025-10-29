import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="forecast-day">{forecast[0].time}</div>

        <div className="forecast-icon">
          <img
            src={forecast[0].condition.icon_url}
            alt="icon-image"
            className="forecast-image"
          />
        </div>
        <div className="forecast-temp">
          <span className="forecast-temp-max">
            {Math.round(forecast[0].temperature.maximum)}°
          </span>
          <span className="forecast-temp-min">
            {Math.round(forecast[0].temperature.minimum)}°
          </span>
        </div>
      </div>
    );
  } else {
    let city = "Dhaka";
    let apiKey = "28d0bff0ffaa52b09e33da6etode543b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showResponse);

    return null;
  }
}
