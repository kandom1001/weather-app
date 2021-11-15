import styled from "styled-components";
import mainBackground from "../../images/mainBackground.jpeg";

export const BannerContainer = styled.div`
  width: 90%;
  height: 300px;
  margin-top: 50px;
  background-image: url(${mainBackground});
  background-size: cover;
  border-radius: 25px;
  align-self: center;

  span {
    font-size: 2rem;
    position: relative;
    left: 200px;
    top: 100px;
  }
`;
