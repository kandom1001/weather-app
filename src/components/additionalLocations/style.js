import styled from "styled-components";

export const AdditionalLocationsContainer = styled.div`
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
