import React from "react";
import ExternalBtn from "./ExternalBtn";
import github from "../assets/images/github.png";
import codesandbox from "../assets/images/codesandbox.png";

const FindMore = () => {
  return (
    <div className="project-container find-more-wrapper">
      <div className="project-heading find-more-header">
        <h2>Find more</h2>
      </div>
      <div className="find-more-container">
        <div className="find-more-inner find-more-git">
          <ExternalBtn link={"https://github.com/chriss222"} icon={github} text={"Github"} />
        </div>
        <div className="find-more-inner find-more-code">
          <ExternalBtn link={"https://codesandbox.io/u/chriss222"} icon={codesandbox} text={"Sandbox"} />
        </div>
      </div>
    </div>
  );
};

export default FindMore;
