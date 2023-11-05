import React, { useState, useEffect, useRef } from "react";
import styles from "./VerticalScroll.module.css";
import Slideimg from "./sliderasset/Home Image.png";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const events = Scroll.Events;

const VerticalScrollFitToplay = () => {
  const [activeSection, setActiveSection] = useState(0);
  const contentRef = useRef(null);

  const handleScrollTo = (section) => {
    scroller.scrollTo(`section-${section}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      containerId: "scrollContainer",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = contentRef.current.scrollTop;
      const sectionHeight = (65 * window.innerHeight) / 100;
      const currentSection = Math.floor(offsetTop / sectionHeight);
      setActiveSection(currentSection);
    };

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleScroll);
      }
    };    
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div
          onClick={() => handleScrollTo(0)}
          className={activeSection === 0 ? styles.active : ""}
        >
          <h1 className="text-2xl">Comprehensive Assessment</h1>
          <p className="text-zinc-500">
            Multidisciplinary athlete evaluation by physiotherapists,
            psychologists, dietitians.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(1)}
          className={activeSection === 1 ? styles.active : ""}
        >
          <h1 className="text-2xl">Personalized Plan Development</h1>
          <p className="text-zinc-500">
            Personalized plan for unique needs, integrating physical, mental,
            dietary aspects.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(2)}
          className={activeSection === 2 ? styles.active : ""}
        >
          <h1 className="text-2xl">Targeted Interventions</h1>
          <p className="text-zinc-500">
            Custom interventions: physiotherapy, psychology, nutrition for peak
            performance.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(3)}
          className={activeSection === 3 ? styles.active : ""}
        >
          <h1 className="text-2xl">Performance Enhancement</h1>
          <p className="text-zinc-500">
            Achieve optimal physical and mental performance through tailored
            plans and interventions.
          </p>
        </div>
      </div>
      <div ref={contentRef} id="scrollContainer" className={styles.content}>
        <Element name="section-0" className={styles.section}>
          <img src={Slideimg} alt="homeimg" />{" "}
        </Element>
        <Element name="section-1" className={styles.section}>
          <img src={Slideimg} alt="homeimg" />{" "}
        </Element>
        <Element name="section-2" className={styles.section}>
          <img src={Slideimg} alt="homeimg" />{" "}
        </Element>
        <Element name="section-3" className={styles.section}>
          <img src={Slideimg} alt="homeimg" />{" "}
        </Element>
      </div>
    </div>
  );
};

export default VerticalScrollFitToplay;

// CSS stays the same
