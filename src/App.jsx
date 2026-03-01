import { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Layout/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import FunZone from "./sections/FunZone/FunZone";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Layout/Footer/Footer";
import Background from "./components/Common/Background";
// import MouseTracker from "./components/Common/MouseTracker";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Initialize AOS with optimized settings
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: "mobile", // Disable on mobile for better performance
    });
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(sectionId);
  }, []);

  // Update active section based on scroll position with throttle
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = [
            "home",
            "about",
            "education",
            "skills",
            "projects",
            "fun-zone",
            "contact",
          ];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      {/* <MouseTracker /> */}
      <Background />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Skills />
      <Projects />
      <FunZone />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
