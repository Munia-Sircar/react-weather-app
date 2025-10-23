import React from "react";

export default function WeatherUnits(props) {
  return (
    <span>
      <span className="temperature">{Math.round(props.data)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
