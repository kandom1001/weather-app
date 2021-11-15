import styled from "styled-components";

const WeatherTabContainer = styled.div`
  position: absolute;
  height: 100px;
  top: 150px;
  width: 100px;
  background-color: #353688;
  border-radius: 0 25px 25px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: 100px;
    left: 0;
    height: 50px;
    width: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 25px 0 0 #353688;
  }

  span {
    width: 64px;
    font-size: 0.8rem;
    background-color: transparent;
    color: white;
  }
`;

const TemperatureContainer = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 250px;
  background-color: #7768e5;
  border-radius: 0 0 25px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3rem;

    sup {
      font-size: 1.5rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: 100px;
    left: 0;
    height: 50px;
    width: 100px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 0 25px 0 0 #7768e5;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: -50px;
    left: -0px;
    height: 50px;
    width: 25px;
    border-top-left-radius: 25px;
    box-shadow: 0 -25px 0 0 #7768e5;
  }
`;

const WeatherIcon = styled.img`
  width: 64px;
  height: 64px;
`;

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
