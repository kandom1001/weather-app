import { useWeather } from "../../hooks/useWeather";
import {
  Container,
  TopLineContainer,
  WeatherContainer,
  WeatherIcon,
  CityContainer,
  BottomLineContainer,
} from "./style";

const CityWeather = ({ city, handleRemoveCity }) => {
  const { data, isError, isLoading } = useWeather({ city });
  isError && handleRemoveCity(city);
  return isLoading ? (
    <Container>Loading</Container>
  ) : (
    <Container>
      <TopLineContainer>
        <WeatherIcon
          src={`https:${data?.current?.condition?.icon}`}
          alt="weather icon"
        />
        <WeatherContainer>
          <b>{data?.current?.temp_c}</b>
          <sup>°C</sup>
        </WeatherContainer>
        <CityContainer>
          <b>{data?.location?.name}</b>
          <br />
          {data?.location?.country}
        </CityContainer>
      </TopLineContainer>
      <BottomLineContainer>
        <div>Humidity {data?.current?.humidity}%</div>
        <div>{data?.current?.wind_dir}</div>
        <div>{data?.current?.wind_kph} km/h</div>
      </BottomLineContainer>
      <button className="hide" onClick={() => handleRemoveCity(city)}>
        X
      </button>
    </Container>
  );
};

export default CityWeather;
