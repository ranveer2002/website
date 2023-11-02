import React, { useState, useEffect, useRef } from "react";
import styles from "./VerticalScroll.module.css";
import Slideimg from "./sliderasset/Home Image.png";
import Scroll from "react-scroll";

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const events = Scroll.Events;

const VerticalScroll = () => {
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
      contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div
          onClick={() => handleScrollTo(0)}
          className={activeSection === 0 ? styles.active : ""}
        >
          <h1 className="text-2xl">Account Setup </h1>
          <p className="text-zinc-500">
            Begin your journey by creating a secure and personalized account to
            access our services.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(1)}
          className={activeSection === 1 ? styles.active : ""}
        >
          <h1 className="text-2xl">Physio Selection </h1>
          <p className="text-zinc-500">
            Choose from our expert team of physiotherapists who will tailor your
            treatment plan to your needs.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(2)}
          className={activeSection === 2 ? styles.active : ""}
        >
          <h1 className="text-2xl">Appointment Booking </h1>
          <p className="text-zinc-500">
            Schedule your first appointment at your convenience, taking the next
            step toward a healthier you.
          </p>
        </div>
        <div
          onClick={() => handleScrollTo(3)}
          className={activeSection === 3 ? styles.active : ""}
        >
          <h1 className="text-2xl">Treatment Initiation </h1>
          <p className="text-zinc-500">
            Your journey to wellness starts here, as you embark on your
            personalized treatment plan with your selected physiotherapist.
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

export default VerticalScroll;

// CSS stays the same
