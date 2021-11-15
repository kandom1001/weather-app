import DailyForecast from "../dailyForecast/DailyForecast";
import styled from "styled-components";

const ThreeDayForecastContainer = styled.div`
  height: 300px;
  font-size: 1.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  justify-content: space-between;
`;
const ThreeDaysForecast = ({ forecastWeather }) => {
  return (
    <ThreeDayForecastContainer>
      <div>
        <strong>3 Days </strong>Forecast
      </div>

      {forecastWeather.map((forecast) => (
        <DailyForecast forecastWeather={forecast} />
      ))}
    </ThreeDayForecastContainer>
  );
};

export default ThreeDaysForecast;
