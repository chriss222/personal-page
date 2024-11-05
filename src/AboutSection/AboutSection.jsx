import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";
import TypingText from "../components/TypingText.jsx";
import TableShowcase from "./TableShowcase/TableShowcase.jsx";
import Achievements from "./Achievements/Achievements.jsx";
import "./aboutSection.scss";

const AboutSection = forwardRef((props, ref) => {
  return (
    <Section id="about" ref={ref}>
      <div className="about-wrapper">
        <TypingText text="My Skills & Hobbies" customClass="about-section-header" />
        <TableShowcase />
        <Achievements />
      </div>
    </Section>
  );
});

export default AboutSection;
