import "./DailyForecast.scss";

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
    <div className="dailyForecast__container">
      <img
        src={`https:${forecastWeather?.day?.condition?.icon}`}
        className="weatherIcon"
        alt="weather icon"
      />
      <div>
        <strong>
          {days[new Date(forecastWeather?.date_epoch * 1000).getDay()]}
        </strong>
        <br />
        {forecastWeather?.day?.condition?.text}
      </div>
      <div>
        {Math.floor(forecastWeather?.day?.maxtemp_c)}° /&nbsp;
        {Math.floor(forecastWeather?.day?.mintemp_c)}°
      </div>
    </div>
  );
};

export default DailyForecast;
