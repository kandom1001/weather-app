import { useState } from "react";
import CityWeather from "../cityWeather/CityWeather";
import AddLocation from "../addLocation/AddLocation";
import styled from "styled-components";

const AdditionalLocationsContainer = styled.div`
  font-size: 1.5rem;
  height: 350px;
  width: 525px;
  margin-right: 45px;
  margin-bottom: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: row;
    height: auto;
    margin-right: 0px;
  }
`;

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
