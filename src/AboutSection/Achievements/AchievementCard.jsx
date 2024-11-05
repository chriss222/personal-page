import React from "react";

const AchievementCard = ({ title, text, asset }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-top">{title}</div>
      <div className="achievement-card-content">
        <p>{text}</p>
        <img src={asset} height={140} width={160} alt="achievement" loading="lazy" />
      </div>
    </div>
  );
};

export default AchievementCard;
