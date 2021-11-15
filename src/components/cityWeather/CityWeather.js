import { useWeather } from "../../hooks/useWeather";
import styled from "styled-components";

const Container = styled.div`
  width: 270px;
  height: 135px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-style: solid;
  border-radius: 25px;
  border-color: #bcbcce;
  border-width: 1px;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }

  button {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0px;
    border-width: 1px;
    position: relative;
    left: 250px;
    top: -120px;
    cursor: pointer;
  }

  .hide {
    display: none;
  }

  &:hover .hide {
    display: flex;
  }
`;

const TopLineContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CityContainer = styled.div`
  font-size: 1.2rem;
  height: 50px;
  width: 125px;
`;
const WeatherContainer = styled.div`
  height: 50px;
  width: 50px;
  border-right: solid;
  border-width: 1px;
  padding-right: 5px;

  sup {
    font-size: 1rem;
  }
`;

const BottomLineContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const WeatherIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const CityWeather = ({ city, removeCity }) => {
  const { data } = useWeather({ city });
  data?.error && removeCity(city);
  return (
    !data?.error && (
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
        <button className="hide" onClick={() => removeCity(city)}>
          X
        </button>
      </Container>
    )
  );
};

export default CityWeather;
