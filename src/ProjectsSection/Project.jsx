import React from "react";
import ExternalBtn from "./ExternalBtn";

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className="project-container">
      <div className="project-heading">
        <h2>{project.name}</h2>
      </div>
      <div className="project-information-container">
        <p>{project.information}</p>
        <img height={180} width={190} src={project.image} alt="project image" loading="lazy" />
      </div>
      {project.externals && (
        <div className="project-externals-container">
          {project.externals.map((external) => (
            <ExternalBtn link={external.link} icon={external.ico} text={external.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
