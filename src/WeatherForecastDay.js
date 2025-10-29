import React from "react";

export default function WeatherForecastDay(props) {
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
        <span className="forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
