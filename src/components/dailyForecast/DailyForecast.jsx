import { DailyForecastContainer, TemperatureContainer } from "./style";

const DailyForecast = ({ forecastWeather }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <DailyForecastContainer>
      <img
        src={`https:${forecastWeather?.day?.condition?.icon}`}
        className="weatherIcon"
        alt="weather icon"
      />
      <span>
        <strong>
          {days[new Date(forecastWeather?.date_epoch * 1000).getDay()]}
        </strong>
        <br />
        {forecastWeather?.day?.condition?.text}
      </span>
      <TemperatureContainer>
        {Math.floor(forecastWeather?.day?.maxtemp_c)}° /&nbsp;
        {Math.floor(forecastWeather?.day?.mintemp_c)}°
      </TemperatureContainer>
    </DailyForecastContainer>
  );
};

export default DailyForecast;
