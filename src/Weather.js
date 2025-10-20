import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

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
      date: new Date(response.data.time * 1000),
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Winnipeg&key=28d0bff0ffaa52b09e33da6etode543b&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading..";
  }
}
