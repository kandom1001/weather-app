import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: white;
  min-width: 250px;
  max-width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

export const FeatureContainer = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 25px;
  background-color: white;
  border-radius: 25px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
