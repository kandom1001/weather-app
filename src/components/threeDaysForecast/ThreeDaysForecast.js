import DailyForecast from "../dailyForecast/DailyForecast";
import "./ThreeDaysForecast.scss";

const ThreeDaysForecast = ({ forecastWeather }) => {
  return (
    <div className="threeDaysForecast__container">
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
