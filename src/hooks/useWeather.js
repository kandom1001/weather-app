import { useState, useEffect } from "react";

export const useWeather = (location) => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forecastWeather, setForecastWeather] = useState("");
  const [localCity, setLocalCity] = useState("");
  useEffect(() => {
    if (location) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?Key=95d9017a2fb146f393142849210311&q=${location.coords.latitude},${location.coords.longitude}&days=5`
      )
        .then((response) => response.json())
        .then((data) => {
          setCurrentWeather(data?.current);
          setForecastWeather(data?.forecast?.forecastday);
          setLocalCity(data?.location?.name);
        });
    }
  }, [setCurrentWeather, setForecastWeather, location]);
  return { currentWeather, forecastWeather, localCity };
};
