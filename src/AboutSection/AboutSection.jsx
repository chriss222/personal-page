import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";

const AboutSection = forwardRef((props, ref) => {
  return (
    <Section id="about" ref={ref}>
      about
    </Section>
  );
});

export default AboutSection;
