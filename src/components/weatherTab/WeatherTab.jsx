import {
  WeatherIcon,
  WeatherTabContainer,
  TemperatureContainer,
} from "./style";

const WeatherTab = ({ currentWeather }) => {
  return (
    <>
      <WeatherTabContainer>
        <WeatherIcon
          src={`https:${currentWeather?.condition?.icon}`}
          className="weatherIcon"
          alt="weather icon"
        />
        <span>{currentWeather?.condition?.text}</span>
      </WeatherTabContainer>
      <TemperatureContainer>
        <span>
          {Math.floor(currentWeather?.temp_c)}
          <sup>°C</sup>
        </span>
      </TemperatureContainer>
    </>
  );
};

export default WeatherTab;
