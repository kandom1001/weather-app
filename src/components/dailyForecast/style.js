import styled from "styled-components";

export const DailyForecastContainer = styled.div`
  width: 270px;
  height: 75px;
  background-color: transparent;
  font-weight: 100;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #bcbcce;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.8rem;
    width: 100px;
    background-color: transparent;
    justify-content: flex-start;
  }
`;
export const TemperatureContainer = styled.div`
  font-size: 1.2rem;
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7768e5;
  border-radius: 15px;
  color: white;
`;
