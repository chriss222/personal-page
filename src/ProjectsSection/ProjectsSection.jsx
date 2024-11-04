import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <Section id="projects" ref={ref}>
      projects
    </Section>
  );
});

export default ProjectsSection;
