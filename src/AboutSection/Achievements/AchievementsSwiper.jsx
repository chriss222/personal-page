import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AchievementCard from "./AchievementCard";
import achievements from "../../utils/achievements";
import { useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const AchievementsSwiper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper && swiper.autoplay) {
      isInView ? swiper.autoplay.start() : swiper.autoplay.stop();
    }
  }, [swiper, isInView]);

  return (
    <div className="achievments-container">
      <div className="achievments-header">Work achievements & integrations</div>
      <Swiper
        ref={ref}
        onSwiper={setSwiper}
        slidesPerView={1.1}
        spaceBetween={20}
        loop
        modules={[Autoplay]}
        autoplay={
          isInView
            ? {
                delay: 3500,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                waitForTransition: true,
              }
            : false
        }
        speed={2000}
      >
        {achievements.map((achievement, i) => (
          <SwiperSlide key={i}>
            <AchievementCard title={achievement.title} text={achievement.text} asset={achievement.asset} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AchievementsSwiper;
