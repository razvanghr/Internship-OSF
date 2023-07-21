import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Product Data
import { PRODUCTcat } from "../../data/CategoryPageData";

import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.scss";

export default () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{
        nextEl: ".swipe-next",
        prevEl: ".swipe-prev",
      }}
    >
      <div className="swiper-home-cards">
        {PRODUCTcat.slice(0, 9).map((prod, index) => {
          return (
            <SwiperSlide className="swiper-homepage-card" key={index}>
              <img src={prod.productImage} alt="Product Image" />
              <p style={{ color: "black", height: "50px" }}>
                {prod.productName}
              </p>
              <p style={{ color: "green" }}>
                {index % 2 === 0 ? "Marketing" : "Awesome"}
              </p>
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};
