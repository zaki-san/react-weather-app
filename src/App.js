import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Katherine Zannis and is{" "}
          <a
            href="https://github.com/zaki-san/react-weather-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
