import React from "react";
import AchievementsSwiper from "./AchievementsSwiper";
import "./achievements.scss";

const Achievements = () => {
  return (
    <div className="achievments-wrapper">
      <div className="achievments-header">Work achievements & integrations</div>
      <AchievementsSwiper />
    </div>
  );
};

export default Achievements;
