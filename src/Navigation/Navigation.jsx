import React, { useEffect, useState } from "react";
import { scrollToSection } from "../utils/sections";
import Button from "../components/Button";
import "./navigation.scss";
import Home from "../assets/svgs/home";
import About from "../assets/svgs/About";
import Projects from "../assets/svgs/Projects";
import Contact from "../assets/svgs/Contact";

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
    <div className="navigation-container">
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
    </div>
  );
};

export default Navigation;
