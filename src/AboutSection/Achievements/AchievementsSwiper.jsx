import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AchievementCard from "./AchievementCard";
import achievements from "../../utils/achievements";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import TypingText from "../../components/TypingText";

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
      <TypingText customClass="achievments-header" text="Work achievements & integrations" />
      <motion.div
        className="achievments-swiper-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 3 }}
      >
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
      </motion.div>
    </div>
  );
};

export default AchievementsSwiper;
