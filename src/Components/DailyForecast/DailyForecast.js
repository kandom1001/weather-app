import "./DailyForecast.css";

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
    <div className="daily-forecast-container">
      <img
        src={`https:${forecastWeather?.day?.condition?.icon}`}
        className="weather-icon"
        alt="weatherIcon"
      />
      <div className="daily-forecast-text-container">
        <strong>
          {days[new Date(forecastWeather?.date_epoch * 1000).getDay()]}
        </strong>
        <br />
        {forecastWeather?.day?.condition?.text}
      </div>
      <div className="daily-forecast-temperature-container">
        {Math.floor(forecastWeather?.day?.maxtemp_c)}° /&nbsp;
        {Math.floor(forecastWeather?.day?.mintemp_c)}°
      </div>
    </div>
  );
};

export default DailyForecast;
