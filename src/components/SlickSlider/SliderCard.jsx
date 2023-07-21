import "./Slider.scss";
import { Link } from "react-router-dom";

function SliderCard({ image }) {
  return (
    <div className="slider-card">
      <img src={image} alt="Slider Card Image" className="slider-card-image" />
      <div className="slider-card-text">
        <h1>
          Control and manage any <br />
          device with cloud solutions
        </h1>
        <div className="slider-card-text-info">
          <p>
            Improve business performance and the user experience <br /> with the
            right mix of loT technology and processes
          </p>
          <Link to="/clp" style={{ color: "#ffff" }}>
            <button className="header-button">VIEW MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
