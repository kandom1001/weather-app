import styled from "styled-components";
import mainBackground from "../../images/mainBackground.jpeg";

const BannerContainer = styled.div`
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

const Banner = ({ city, country }) => {
  return (
    <BannerContainer>
      <span>
        <b>{city}</b>
        <br />
        {country}
      </span>
    </BannerContainer>
  );
};

export default Banner;
