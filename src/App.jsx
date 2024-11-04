import { useRef } from "react";
import "./App.scss";
import HeroSection from "./HeroSection/HeroSection.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import AboutSection from "./AboutSection/AboutSection.jsx";
import ContactSection from "./ContactSection/ContactSection.jsx";
import ProjectsSection from "./ProjectsSection/ProjectsSection.jsx";

function App() {
  const sectionsRef = useRef([]);
  return (
    <div className="main">
      <Navigation sectionRefs={sectionsRef} />
      <HeroSection ref={(el) => (sectionsRef.current[0] = el)} />
      <AboutSection ref={(el) => (sectionsRef.current[1] = el)} />
      <ProjectsSection ref={(el) => (sectionsRef.current[2] = el)} />
      <ContactSection ref={(el) => (sectionsRef.current[3] = el)} />
    </div>
  );
}

export default App;
