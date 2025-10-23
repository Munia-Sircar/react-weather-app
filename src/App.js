import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by{" "}
          <a
            href="https://github.com/Munia-Sircar"
            target="_blank"
            rel="noreferrer">
            Munia Sircar
          </a>
          🌹open-sourced on{" "}
          <a
            href="https://github.com/Munia-Sircar/react-weather-app"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>{" "}
          & hosted on{" "}
          <a
            href="https://moon-weather-app-react.netlify.app/"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
