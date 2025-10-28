import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
