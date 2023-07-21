import React from "react";

import { Link } from "react-router-dom";

function MobileSwiperCard({ image }) {
  return (
    <div className="mobile-slider-card">
      <img
        src={image}
        alt="Slider Card Image"
        className="mobile-slider-card-image"
      />
      <div className="mobile-slider-card-text">
        <h1>
          Control and manage any <br />
          device with cloud solutions
        </h1>
        <div className="mobile-slider-card-text-info">
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

export default MobileSwiperCard;
