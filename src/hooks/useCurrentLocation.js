import { useState, useEffect } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const success = (location) => {
    setIsLoading(false);
    setLocation(location);
  };

  const error = () => {
    setIsError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, [setLocation]);

  return { isLoading, isError, location };
};
