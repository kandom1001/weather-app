import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: 135px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-style: solid;
  border-radius: 25px;
  border-color: #bcbcce;
  border-width: 1px;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }

  button {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0px;
    border-width: 1px;
    position: relative;
    left: 250px;
    top: -120px;
    cursor: pointer;
  }

  .hide {
    display: none;
  }

  &:hover .hide {
    display: flex;
  }
`;

export const TopLineContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CityContainer = styled.div`
  font-size: 1.2rem;
  height: 50px;
  width: 125px;
`;
export const WeatherContainer = styled.div`
  height: 50px;
  width: 50px;
  border-right: solid;
  border-width: 1px;
  padding-right: 5px;

  sup {
    font-size: 1rem;
  }
`;

export const BottomLineContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

export const WeatherIcon = styled.img`
  width: 64px;
  height: 64px;
`;
