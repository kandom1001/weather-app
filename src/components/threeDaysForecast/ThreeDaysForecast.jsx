import DailyForecast from "../dailyForecast/DailyForecast";
import { ThreeDayForecastContainer } from "./style";

const ThreeDaysForecast = ({ forecastWeather }) => {
  return (
    <ThreeDayForecastContainer>
      <div>
        <strong>3 Days </strong>Forecast
      </div>

      {forecastWeather.map((forecast) => (
        <DailyForecast forecastWeather={forecast} />
      ))}
    </ThreeDayForecastContainer>
  );
};

export default ThreeDaysForecast;
