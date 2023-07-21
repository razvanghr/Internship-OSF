import React from "react";

import Swiper from "./Swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./Swiper.scss";

function SwiperMain() {
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  let swiper;
  return (
    <div className="swiper-main">
      <h1>Featured Products</h1>
      <p>Unde omnis iste natus error sit voluptem</p>
      <div className="hr-control">
        <FaArrowLeft
          style={{ backgroundColor: "#2d343a" }}
          className="swipe-prev"
          onClick={handlePrev}
        />
        <hr />
        <h1>///</h1>
        <hr />
        <FaArrowRight
          className="swipe-next"
          onClick={handleNext}
          style={{ backgroundColor: "#2d343a" }}
        />
      </div>
      <Swiper />
    </div>
  );
}

export default SwiperMain;
