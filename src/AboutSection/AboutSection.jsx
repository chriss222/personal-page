import React, { forwardRef, useState } from "react";
import Section from "../components/Section.jsx";
import { workTabs, workSections, lifeStyleTabs, lifeSections } from "../utils/aboutSection.js";
import "./aboutSection.scss";
import ShowcaseSwiper from "./ShowcaseSwiper.jsx";
import Button from "../components/Button.jsx";

const AboutSection = forwardRef((props, ref) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [workCategory, setWorkCategory] = useState(true);
  const categoryTabs = workCategory ? workTabs : lifeStyleTabs;
  const slides = workCategory ? workSections : lifeSections;

  console.log("swiper: ", swiper);

  return (
    <Section id="about" ref={ref}>
      <div className="about-wrapper">
        <div className="about-showcase-container">
          <div className="showcase-header">
            <Button
              handleClick={() => {
                swiper.setProgress(0, 0);
                setActiveIndex(0);
                setWorkCategory(true);
              }}
              customClass={`work-btn ${workCategory ? "active" : ""}`}
            >
              Work
            </Button>
            <Button
              handleClick={() => {
                swiper.setProgress(0, 0);
                setActiveIndex(0);
                setWorkCategory(false);
              }}
              customClass={`life-btn ${workCategory ? "" : "active"}`}
            >
              Life
            </Button>
          </div>
          <div className="showcase-container">
            <div className="showcase-navigation-container">
              <ul className="showcase-navigation-list">
                {categoryTabs.map((tab, i) => (
                  <li key={tab}>
                    <Button customClass={`tab-btn ${activeIndex === i ? "active" : ""}`} handleClick={() => swiper && swiper.slideTo(i)}>
                      {tab}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="showcase-swiper-container">
              <ShowcaseSwiper slides={slides} swiper={swiper} setSwiper={setSwiper} setActiveIndex={setActiveIndex} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default AboutSection;
