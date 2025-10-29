import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.data.temperature.maximum);
    return max;
  }
  function minTemp() {
    let min = Math.round(props.data.temperature.minimum);
    return min;
  }

  return (
    <div>
      <div className="forecast-day">{props.data.time}</div>

      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt="icon-image"
          className="forecast-image"
        />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()}°</span>
        <span className="forecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
