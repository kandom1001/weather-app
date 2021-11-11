import DailyForecast from "../dailyForecast/DailyForecast";
import "./ThreeDaysForecast.css";

const ThreeDaysForecast = ({ forecastWeather }) => {
  return (
    <div className="three-days-forecast-container">
      <div>
        <strong>3 Days </strong>Forecast
      </div>

      {forecastWeather.map((forecast) => (
        <DailyForecast forecastWeather={forecast} />
      ))}
    </div>
  );
};

export default ThreeDaysForecast;
