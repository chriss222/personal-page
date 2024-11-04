import React from "react";

const Button = ({ children, handleClick = () => {}, disabled, customClass = "" }) => {
  return (
    <div className={`btn-container ${customClass}`}>
      <button disabled={disabled} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
