import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";

const ContactSection = forwardRef((props, ref) => {
  return (
    <Section id="contact" ref={ref}>
      contact
    </Section>
  );
});

export default ContactSection;
