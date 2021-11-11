import { useState, useEffect } from "react";

export const useWeather = ({ city, location }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (city || location) {
      const query = city
        ? city
        : `${location.coords.latitude},${location.coords.longitude}`;
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?Key=95d9017a2fb146f393142849210311&q=${query}&days=5`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setData, location, city]);

  return { data };
};
