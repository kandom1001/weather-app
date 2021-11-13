import "./Banner.scss";

const Banner = ({ city, country }) => {
  return (
    <div className="banner__container">
      <span>
        <b>{city}</b>
        <br />
        {country}
      </span>
    </div>
  );
};

export default Banner;
