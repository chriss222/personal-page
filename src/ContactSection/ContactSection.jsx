import React, { forwardRef, useRef } from "react";
import Section from "../components/Section.jsx";
import nature from "../assets/images/nature.png";
import Maps from "../assets/svgs/Maps.jsx";
import Time from "../assets/svgs/Time.jsx";
import Socials from "./Socials.jsx";
import { getCurrentTime } from "../utils/contactSection.js";
import { motion, useInView } from "framer-motion";
import "./contactSection.scss";

const ContactSection = forwardRef((props, ref) => {
  const contactsRef = useRef(null);
  const isInView = useInView(contactsRef, { once: true });

  return (
    <Section id="contact" ref={ref}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.25 }}
        className="contact-section-header"
        ref={contactsRef}
      >
        Let's get in touch
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="contact-container"
      >
        <div className="contact-person-info-container">
          <div className="contact-image-container">
            <img src={nature} height={90} width={92} />
          </div>
          <div className="contact-details-container">
            <div className="contact-timezone-container">
              <Time />
              <p>Time zone: {getCurrentTime()} (GMT+2)</p>
            </div>
            <div className="contact-location-container">
              <Maps />
              <span>Bucharest, Romania (RO)</span>
            </div>
          </div>
        </div>
        <Socials />
      </motion.div>
    </Section>
  );
});

export default ContactSection;
