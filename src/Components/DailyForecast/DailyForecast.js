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
    <div className="dailyForecast-container">
      <img
        src={`https:${forecastWeather?.day.condition.icon}`}
        className="dailyForecast-weatherIcon"
        alt="weatherIcon"
      />
      <div className="dailyForecast-textContainer">
        <div className="dailyForecast-dayOfWeek">
          {days[new Date(forecastWeather?.date_epoch * 1000).getDay()]}
        </div>
        <div className="dailyForecast-condition">
          {forecastWeather?.day.condition.text}
        </div>
      </div>
      <div className="dailyForecast-temperature">
        {Math.floor(forecastWeather?.day.maxtemp_c)}° /&nbsp;
        {Math.floor(forecastWeather?.day.mintemp_c)}°
      </div>
    </div>
  );
};

export default DailyForecast;
