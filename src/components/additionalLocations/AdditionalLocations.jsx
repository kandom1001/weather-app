import { useState } from "react";
import CityWeather from "../cityWeather/CityWeather";
import AddLocation from "../addLocation/AddLocation";
import { AdditionalLocationsContainer } from "./style";

const AdditionalLocations = () => {
  const [cityList, setCityList] = useState([]);

  const handleRemoveCity = (city) => {
    setCityList(cityList.filter((e) => e !== city));
  };

  const handleAddCity = (city) => {
    setCityList([...cityList, city]);
  };

  return (
    <AdditionalLocationsContainer>
      {cityList &&
        cityList.map((city, index) => {
          return (
            <CityWeather
              key={`cityWeather-${index}`}
              city={city}
              handleRemoveCity={handleRemoveCity}
            />
          );
        })}
      {cityList.length < 4 && <AddLocation handleAddCity={handleAddCity} />}
    </AdditionalLocationsContainer>
  );
};

export default AdditionalLocations;
