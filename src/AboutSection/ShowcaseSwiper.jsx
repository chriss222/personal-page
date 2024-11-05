import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

const ShowcaseSwiper = ({ slides, swiper, setSwiper, setActiveIndex }) => {
  return (
    <Swiper swiper onSwiper={setSwiper} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} slidesPerView={1}>
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => (
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="slide-paragraph"
            >
              {slide}
            </motion.p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShowcaseSwiper;
