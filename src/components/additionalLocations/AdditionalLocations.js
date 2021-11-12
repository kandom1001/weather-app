import "./AdditionalLocations.css";
import { useState } from "react";
import CityWeather from "../cityWeather/CityWeather";
import AddLocation from "../addLocation/AddLocation";

const AdditionalLocations = () => {
  const [cityList, setCityList] = useState([]);

  const removeCity = (city) => {
    setCityList(cityList.filter((e) => e !== city));
  };

  const addCity = (city) => {
    setCityList([...cityList, city]);
  };

  console.log(cityList);

  return (
    <div className="additional-locations-container">
      {cityList &&
        cityList.map((city) => {
          return <CityWeather city={city} removeCity={removeCity} />;
        })}
      {cityList.length < 4 && <AddLocation addCity={addCity} />}
    </div>
  );
};

export default AdditionalLocations;
