import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-9">
          <input type="search" placeholder="Enter a city..." />
        </div>

        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
      <h1>Rome</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img
                src="https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg"
                alt="icon-image"
              />
            </li>
            <li>6°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
