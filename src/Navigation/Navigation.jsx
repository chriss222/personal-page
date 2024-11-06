import React, { useEffect, useState } from "react";
import { scrollToSection } from "../utils/sections";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Home from "../assets/svgs/Home";
import About from "../assets/svgs/About";
import Projects from "../assets/svgs/Projects";
import Contact from "../assets/svgs/Contact";
import "./navigation.scss";

const sections = [
  { id: "hero", title: "Home", asset: <Home /> },
  { id: "about", title: "About", asset: <About /> },
  { id: "projects", title: "Projects", asset: <Projects /> },
  { id: "contact", title: "Contact", asset: <Contact /> },
];

const Navigation = ({ sectionRefs }) => {
  console.log("refs: ", sectionRefs);

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <motion.div
      className="navigation-container"
      initial={{ x: "-150vw" }}
      animate={{ x: "-50%" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.75,
        duration: 1,
        delay: 1.25,
      }}
    >
      {sections.map((section, i) => (
        <Button
          key={section.id}
          customClass={`${section.id} ${activeSection === section.id ? "active" : ""}`}
          handleClick={() => scrollToSection(sectionRefs[i].current)}
        >
          <>
            {section.asset}
            <p>{section.title}</p>
          </>
        </Button>
      ))}
    </motion.div>
  );
};

export default Navigation;
