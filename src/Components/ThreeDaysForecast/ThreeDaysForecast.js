import DailyForecast from "../DailyForecast/DailyForecast";
import "./ThreeDaysForecast.css";

const ThreeDaysForecast = ({ forecastWeather }) => {
  return (
    <div className="threeDaysForecast-container">
      <div className="threeDaysForecast-title">
        <span>3 Days </span>Forecast
      </div>

      {forecastWeather.map((forecast) => (
        <DailyForecast forecastWeather={forecast} />
      ))}
    </div>
  );
};

export default ThreeDaysForecast;
