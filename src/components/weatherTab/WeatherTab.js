import "./WeatherTab.css";

const WeatherTab = ({ currentWeather }) => {
  return (
    <>
      <div className="weather-tab">
        <img
          src={`https:${currentWeather?.condition?.icon}`}
          className="weather-icon"
          alt="weatherIcon"
        />
        <span className="weather-condition">
          {currentWeather?.condition?.text}
        </span>
      </div>
      <div className="temperature-tab">
        <div>
          {Math.floor(currentWeather?.temp_c)}
          <sup>°C</sup>
        </div>
      </div>
    </>
  );
};

export default WeatherTab;
