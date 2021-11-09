import "./App.css";
import WeatherTab from "./Components/WeatherTab/WeatherTab";
import ThreeDaysForecast from "./Components/ThreeDaysForecast/ThreeDaysForecast";
import { useWeather } from "./hooks/useWeather";
import { useLocation } from "./hooks/useLocation";

function App() {
  const { location } = useLocation();
  console.log("here");
  const { currentWeather, forecastWeather, localCity } = useWeather(location);
  if (!currentWeather || !forecastWeather) {
    return <div>loading</div>;
  }
  console.log(currentWeather);
  return (
    <div className="main">
      <WeatherTab currentWeather={currentWeather} />
      <div className="App-mainLocationContainer">{localCity}</div>
      <div className="App-featureContainer">
        <ThreeDaysForecast forecastWeather={forecastWeather} />
      </div>
    </div>
  );
}

export default App;
