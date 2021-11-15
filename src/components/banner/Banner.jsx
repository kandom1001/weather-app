import { BannerContainer } from "./style";

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
