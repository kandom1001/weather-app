import "./WeatherTab.scss";

const WeatherTab = ({ currentWeather }) => {
  return (
    <>
      <div className="weatherTab">
        <img
          src={`https:${currentWeather?.condition?.icon}`}
          className="weatherIcon"
          alt="weather icon"
        />
        <span>{currentWeather?.condition?.text}</span>
      </div>
      <div className="temperatureTab">
        <div>
          {Math.floor(currentWeather?.temp_c)}
          <sup>°C</sup>
        </div>
      </div>
    </>
  );
};

export default WeatherTab;
