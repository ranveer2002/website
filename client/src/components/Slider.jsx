import React, { useState, useEffect } from "react";
import Slide1 from "../assets/slide1.png"
import Slide2 from "../assets/slide2.png"
import Slide3 from "../assets/slide3.png"
const Slider = () => {
  const [index, setIndex] = useState(0);
  const slides = [ Slide1, Slide2, Slide3];
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  return (
    <div id="slider" className="px-5 py-5 md:mx-auto overflow-hidden w-92 md:w-[1280px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slides ${
            i === index ? "block" : "hidden"
          } transition-opacity duration-1500`}
        >
          <img src={slide} alt={`Slide ${i}`} className="w-full rounded-lg" />
        </div>
      ))}
      <div id="dot" className="mt-4 text-center">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot inline-block rounded-full w-4 h-4 bg-d3d3d3 mx-2 ${
              i === index ? "bg-green-500 scale-150" : "bg-green-500 scale-90"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
