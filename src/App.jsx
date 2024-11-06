import { useRef } from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import AboutSection from "./AboutSection/AboutSection.jsx";
import ContactSection from "./ContactSection/ContactSection.jsx";
import ProjectsSection from "./ProjectsSection/ProjectsSection.jsx";
import "./App.scss";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="main">
      <Navigation sectionRefs={[heroRef, aboutRef, projectsRef, contactRef]} />
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}

export default App;
