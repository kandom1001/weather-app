import WeatherTab from "../components/weatherTab/WeatherTab";
import ThreeDaysForecast from "../components/threeDaysForecast/ThreeDaysForecast";
import { useWeather } from "../hooks/useWeather";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import AdditionalLocations from "../components/additionalLocations/AdditionalLocations";
import Banner from "../components/banner/Banner";
import { MainContainer, FeatureContainer } from "./style";

const Weather = () => {
  const { location } = useCurrentLocation();
  const { data, isLoading } = useWeather({ location });

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <MainContainer>
      <Banner city={data?.location?.name} country={data?.location?.country} />
      <FeatureContainer>
        <ThreeDaysForecast forecastWeather={data?.forecast?.forecastday} />
        <AdditionalLocations />
      </FeatureContainer>
      <WeatherTab currentWeather={data?.current} />
    </MainContainer>
  );
};

export default Weather;
