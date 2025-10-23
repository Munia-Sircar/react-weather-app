import React, { useState } from "react";

export default function WeatherUnits(props) {
  let [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.data)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.data * 9) / 5 + 32;

    return (
      <span>
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
