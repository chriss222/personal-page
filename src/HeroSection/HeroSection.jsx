import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";

const HeroSection = forwardRef((props, ref) => {
  return (
    <Section id="hero" ref={ref}>
      hero
    </Section>
  );
});

export default HeroSection;
