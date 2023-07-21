import React, { Component } from "react";
import Slider from "react-slick";

import "./Slider.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import sliderImage1 from "../../assets/SwiperImages/swiper-img1.png";
import sliderImage2 from "../../assets/SwiperImages/swiper-img2.png";
import sliderImage3 from "../../assets/SwiperImages/swiper-img3.png";

import SliderCard from "./SliderCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <SliderCard image={sliderImage1} />
          <SliderCard image={sliderImage2} />
          <SliderCard image={sliderImage3} />
        </Slider>
      </div>
    );
  }
}
