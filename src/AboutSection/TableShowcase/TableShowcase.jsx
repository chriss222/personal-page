import React, { useRef, useState } from "react";
import { workTabs, workSections, lifeStyleTabs, lifeSections } from "../../utils/aboutSection.js";
import ShowcaseSwiper from "./ShowcaseSwiper.jsx";
import Button from "../../components/Button.jsx";
import TypingText from "../../components/TypingText.jsx";
import { motion, useInView } from "framer-motion";
import ShowcaseImage from "./ShowcaseImage.jsx";

const TableShowcase = () => {
  const tableRef = useRef(null);
  const isInView = useInView(tableRef, { once: true });
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [workCategory, setWorkCategory] = useState(true);
  const categoryTabs = workCategory ? workTabs : lifeStyleTabs;
  const slides = workCategory ? workSections : lifeSections;

  return (
    <div className="showcase-wrapper">
      <div className="showcase-content-container">
        <TypingText text="My Skills & Hobbies" customClass="about-section-header" />
        <motion.div
          className="about-showcase-container"
          ref={tableRef}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: [0, 1.1, 1] } : {}}
          transition={{ opacity: { duration: 0.4 }, scale: { duration: 0.8, delay: 1.5 } }}
        >
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
              Hobbies
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
        </motion.div>
      </div>
      <ShowcaseImage />
    </div>
  );
};

export default TableShowcase;
