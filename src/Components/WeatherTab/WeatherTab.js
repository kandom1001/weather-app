import "./WeatherTab.css";

const WeatherTab = ({ currentWeather }) => {
  return (
    <>
      <div className="weatherTab-weatherTab">
        <div
          className="weatherTab-weatherIcon"
          style={{
            backgroundImage: `url(https:${currentWeather?.condition?.icon})`,
          }}
        />
        <span className="weatherTab-condition">
          {currentWeather?.condition?.text}
        </span>
      </div>
      <div className="weatherTab-temperatureTab">
        <div className="weatherTab-temperatureData">
          {currentWeather?.temp_c}
        </div>
        <div className="weatherTab-temperatureSymbol">℃</div>
      </div>
    </>
  );
};

export default WeatherTab;
