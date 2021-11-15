import WeatherTab from "../components/weatherTab/WeatherTab";
import ThreeDaysForecast from "../components/threeDaysForecast/ThreeDaysForecast";
import { useWeather } from "../hooks/useWeather";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import AdditionalLocations from "../components/additionalLocations/AdditionalLocations";
import Banner from "../components/banner/Banner";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: white;
  min-width: 250px;
  max-width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

const FeatureContainer = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 25px;
  background-color: white;
  border-radius: 25px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Weather = () => {
  const { location } = useCurrentLocation();
  const { data } = useWeather({ location });
  if (!data) {
    return <div>loading</div>;
  }
  return (
    <MainContainer>
      <Banner city={data?.location?.name} country={data?.location?.country} />
      <FeatureContainer>
        <ThreeDaysForecast forecastWeather={data?.forecast.forecastday} />
        <AdditionalLocations />
      </FeatureContainer>
      <WeatherTab currentWeather={data?.current} />
    </MainContainer>
  );
};

export default Weather;
