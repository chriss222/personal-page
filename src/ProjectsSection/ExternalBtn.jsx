import React from "react";

const ExternalBtn = ({ link, icon, text }) => {
  return (
    <a href={link}>
      <div className="external-container">
        <img width={28} height={28} src={icon} alt="external icon" />
        <h3>{text}</h3>
      </div>
    </a>
  );
};

export default ExternalBtn;
