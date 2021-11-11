import "./Banner.css";

const Banner = ({ city, country }) => {
  return (
    <div className="banner-container">
      <span>
        <b>{city}</b>
        <br />
        {country}
      </span>
    </div>
  );
};

export default Banner;
