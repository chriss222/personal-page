import React from "react";
import AchievementsSwiper from "./AchievementsSwiper";
import AchievementsImage from "./AchievementsImage";
import "./achievements.scss";

const Achievements = () => {
  return (
    <div className="achievments-wrapper">
      <AchievementsSwiper />
      <AchievementsImage />
    </div>
  );
};

export default Achievements;
