import React, { useState, useEffect } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    "https://hhsbanner.com/wp-content/uploads/2019/03/victoria_falls-900x300.jpg",
    "https://blog.cognifit.com/wp-content/uploads/2019/11/hiking-900x300.jpg",
    "https://travelfree.info/wp-content/uploads/2018/02/croatia-waterfall-in-deep-forest-of-Cr-12755165-900x300.jpg",
  ];
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  return (
    <div id="slider" className="p-8 mx-auto overflow-hidden w-80 md:w-[1280px]">
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
              i === index ? "bg-green-500 scale-150" : "bg-green-500 scale-90 "
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
