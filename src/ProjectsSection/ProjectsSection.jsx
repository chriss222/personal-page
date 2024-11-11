import React, { forwardRef, useRef } from "react";
import Section from "../components/Section.jsx";
import ProjectsSwiper from "./ProjectsSwiper.jsx";
import TypingText from "../components/TypingText.jsx";
import { motion, useInView } from "framer-motion";
import "./projectsSection.scss";

const ProjectsSection = forwardRef((props, ref) => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true });

  return (
    <Section id="projects" ref={ref}>
      <div className="projects-wrapper">
        <div className="projects-header-container">
          <TypingText text="Side projects" customClass="projects-section-header" />
        </div>
        <motion.div
          className="projects-swiper-container"
          ref={projectRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ opacity: { duration: 1, delay: 1 } }}
        >
          <ProjectsSwiper />
        </motion.div>
      </div>
    </Section>
  );
});

export default ProjectsSection;
