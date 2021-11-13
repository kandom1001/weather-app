import "./CityWeather.scss";
import { useWeather } from "../../hooks/useWeather";

const CityWeather = ({ city, removeCity }) => {
  const { data } = useWeather({ city });
  data?.error && removeCity(city);
  return (
    !data?.error && (
      <div className="cityWeather__container">
        <div className="cityWeather__topLineContainer">
          <img
            src={`https:${data?.current?.condition?.icon}`}
            className="weatherIcon"
            alt="weather icon"
          />

          <div>
            <b>{data?.current?.temp_c}</b>
            <sup>°C</sup>
          </div>
          <div>
            <b>{data?.location?.name}</b>

            <br />
            {data?.location?.country}
          </div>
        </div>
        <div className="cityWeather_bottomLineContainer">
          <div>Humidity {data?.current?.humidity}%</div>
          <div>{data?.current?.wind_dir}</div>
          <div>{data?.current?.wind_kph} km/h</div>
        </div>
        <button className="hide" onClick={() => removeCity(city)}>
          X
        </button>
      </div>
    )
  );
};

export default CityWeather;
