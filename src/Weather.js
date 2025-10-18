import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    console.log(response);
    setWeather({
      temp: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      time: response.data.time,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <h1>{weather.city}</h1>
        <ul className="current-info">
          <li>Friday 5:00pm</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.iconUrl} alt="icon-image" />
            <span className="temperature">{Math.round(weather.temp)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Dhaka&key=28d0bff0ffaa52b09e33da6etode543b&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading..";
  }
}
