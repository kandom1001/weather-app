import { useState } from "react";
import CityWeather from "../cityWeather/CityWeather";
import AddLocation from "../addLocation/AddLocation";
import { AdditionalLocationsContainer } from "./style";

const AdditionalLocations = () => {
  const [cityList, setCityList] = useState([]);

  const removeCity = (city) => {
    setCityList(cityList.filter((e) => e !== city));
  };

  const addCity = (city) => {
    setCityList([...cityList, city]);
  };

  return (
    <AdditionalLocationsContainer>
      {cityList &&
        cityList.map((city) => {
          return <CityWeather city={city} removeCity={removeCity} />;
        })}
      {cityList.length < 4 && <AddLocation addCity={addCity} />}
    </AdditionalLocationsContainer>
  );
};

export default AdditionalLocations;
