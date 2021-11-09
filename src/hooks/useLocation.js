import { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState();
  const error = () => {
    console.error("Please enable location service");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLocation, error);
  }, [setLocation]);

  return { location };
};
