import "./App.css";
import WeatherTab from "./components/weatherTab/WeatherTab";
import ThreeDaysForecast from "./components/threeDaysForecast/ThreeDaysForecast";
import { useWeather } from "./hooks/useWeather";
import { useCurrentLocation } from "./hooks/useCurrentLocation";
import AdditionalLocations from "./components/additionalLocations/AdditionalLocations";
import Banner from "./components/banner/Banner";

function App() {
  const { location } = useCurrentLocation();
  const { data } = useWeather({ location });
  if (!data) {
    return <div>loading</div>;
  }
  return (
    <div className="main">
      <Banner city={data?.location?.name} country={data?.location?.country} />
      <div className="feature-container">
        <ThreeDaysForecast forecastWeather={data?.forecast.forecastday} />
        <AdditionalLocations />
      </div>
      <WeatherTab currentWeather={data?.current} />
    </div>
  );
}

export default App;
