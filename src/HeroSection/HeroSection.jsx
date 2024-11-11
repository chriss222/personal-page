import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";
import coding from "../assets/images/coding.webp";
import { delay, motion } from "framer-motion";
import Button from "../components/Button.jsx";
import PlatformSwiper from "./PlatformSwiper.jsx";
import "./heroSection.scss";
import { scrollToSection } from "../utils/sections.js";

const HeroSection = forwardRef(({ aboutRef, contactRef }, ref) => {
  return (
    <Section id="hero" ref={ref}>
      <div className="heading-wrapper">
        <motion.div
          className="hero-photo-container"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -6, 0],
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
            y: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
          }}
        >
          <img src={coding} width={260} height={260} alt="programmer on laptop" />
        </motion.div>
        <div className="heading-text-wrapper">
          <div className="heading-text-container">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
              Hi, I'm <span>Mitu Cristian</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              A passionate web developer, dedicated to creating impactful digital experiences.
            </motion.p>
          </div>
          <motion.div
            className="heading-actions-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button customClass="about-btn" handleClick={() => scrollToSection(aboutRef.current)}>
              About me
            </Button>
            <Button customClass="contact-btn" handleClick={() => scrollToSection(contactRef.current)}>
              Contact
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
            <PlatformSwiper />
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

export default HeroSection;
