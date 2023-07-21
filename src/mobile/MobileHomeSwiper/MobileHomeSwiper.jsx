// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// SliderCard

import MobileSwiperCard from "./MobileSwiperCard";
import "./MobileHomeSwiper.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Swiper Image

import SliderImage1 from "../../assets/SwiperImages/swiper-img1.png";
import SliderImage2 from "../../assets/SwiperImages/swiper-img2.png";
import SliderImage3 from "../../assets/SwiperImages/swiper-img3.png";

const images = [SliderImage1, SliderImage2, SliderImage3];

function MobileHomeSwiper() {
  return (
    <Swiper
      className="mobile-home-swiper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 700 }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <MobileSwiperCard image={image} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MobileHomeSwiper;
