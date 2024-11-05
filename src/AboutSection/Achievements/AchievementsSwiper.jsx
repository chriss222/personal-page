import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AchievementCard from "./AchievementCard";
import achievements from "../../utils/achievements";
import "swiper/css";

const AchievementsSwiper = () => {
  return (
    <Swiper swiper slidesPerView={1.1} spaceBetween={20} loop>
      {achievements.map((achievement, i) => (
        <SwiperSlide key={i}>
          <AchievementCard title={achievement.title} text={achievement.text} asset={achievement.asset} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AchievementsSwiper;
