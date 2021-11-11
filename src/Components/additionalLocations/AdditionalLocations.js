import "./AdditionalLocations.css";
import { useState } from "react";
import CityWeather from "../cityWeather/CityWeather";
import AddLocation from "../addLocation/AddLocation";

const AdditionalLocations = () => {
  const [cityList, setCityList] = useState([]);

  const removeCity = (city, cityList) => {
    const index = cityList.findIndex((e) => e === city);
    cityList.splice(index, 1);
    setCityList([...cityList]);
  };

  return (
    <div className="additional-locations-container">
      {cityList &&
        cityList.map((city) => {
          return (
            <CityWeather
              city={city}
              cityList={cityList}
              removeCity={removeCity}
            />
          );
        })}
      {cityList.length < 4 && (
        <AddLocation setCityList={setCityList} cityList={cityList} />
      )}
    </div>
  );
};

export default AdditionalLocations;
