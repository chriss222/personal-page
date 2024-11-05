import React, { forwardRef } from "react";
import Section from "../components/Section.jsx";
import coding from "../assets/images/coding.webp";
import { motion } from "framer-motion";
import "./heroSection.scss";
import Button from "../components/Button.jsx";
import PlatformSwiper from "./PlatformSwiper.jsx";

const HeroSection = forwardRef((props, ref) => {
  return (
    <Section id="hero" ref={ref}>
      <div className="heading-wrapper">
        <motion.div
          className="hero-photo-container"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img src={coding} width={220} height={260} alt="programmer on laptop" />
        </motion.div>
        <div className="heading-text-wrapper">
          <div className="heading-text-container">
            <h1>
              Hi, I'm <span>Mitu Cristian</span>
            </h1>
            <p>A passionate web developer, dedicated to creating impactful digital experiences.</p>
          </div>
          <div className="heading-actions-container">
            <Button customClass="about-btn">About me</Button>
            <Button customClass="contact-btn">Contact</Button>
          </div>
          <PlatformSwiper />
        </div>
      </div>
    </Section>
  );
});

export default HeroSection;
