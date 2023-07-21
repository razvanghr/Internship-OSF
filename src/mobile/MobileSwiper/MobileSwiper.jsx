import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Product Data
import { PRODUCTcat } from "../../data/CategoryPageData";

import "./MobileSwiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MobileSwiper({ slideNumber, component: Component, color }) {
  return (
    <Swiper
      className="mobile-swiper"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{ backgroundColor: color }}
    >
      {PRODUCTcat.slice(0, slideNumber).map((product, index) => {
        return (
          <SwiperSlide key={index}>
            <Component key={index} data={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MobileSwiper;
