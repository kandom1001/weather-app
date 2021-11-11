import "./CityWeather.css";
import { useWeather } from "../../hooks/useWeather";

const CityWeather = ({ city, cityList, removeCity }) => {
  const { data } = useWeather({ city: city });
  console.log(data);
  return (
    !data?.error && (
      <div className="city-weather-container">
        <div className="cityWeather-top-line-container">
          <img
            src={`https:${data?.current?.condition?.icon}`}
            className="weather-icon"
            alt="weatherIcon"
          />

          <div className="city-weather-temperature-container">
            <b>{data?.current?.temp_c}</b>
            <sup>°C</sup>
          </div>
          <div className="city-weather-city-description-container">
            <b>{data?.location?.name}</b>

            <br />
            {data?.location?.country}
          </div>
        </div>
        <div className="city-weather-bottom-line-container">
          <div>Humidity {data?.current?.humidity}%</div>
          <div>{data?.current?.wind_dir}</div>
          <div>{data?.current?.wind_kph} km/h</div>
        </div>
        <button
          className="city-weather-remove-button hide"
          onClick={() => removeCity(city, cityList)}
        >
          X
        </button>
      </div>
    )
  );
};

export default CityWeather;
