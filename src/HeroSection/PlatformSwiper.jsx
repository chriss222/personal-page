import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import slides from "../utils/stackSlides";

const PlatformSwiper = () => {
  return (
    <div className="platform-swiper-wrapper">
      <h3 className="platform-swiper-title">Tech Stack</h3>
      <div className="platform-swiper-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={4}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          speed={3000}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <img src={slide} width={62} height={62} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlatformSwiper;
