import React from "react";

const ExternalBtn = ({ link, icon, text }) => {
  return (
    <div className="external-container">
      <a href={link}>
        <img width={28} height={28} src={icon} alt="external icon" />
      </a>
      <h3>{text}</h3>
    </div>
  );
};

export default ExternalBtn;
