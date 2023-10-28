import React, { useEffect } from "react";
import classes from "./HomeSlider.module.css";
import imageURL from "./sliderasset/homeslider.png";
import imageURL2 from "./sliderasset/homeslider2.png";
import imageURL3 from "./sliderasset/homeslider3.png";

const HomeSlider = () => {
  useEffect(() => {
    const sliders = Array.from(document.querySelectorAll(`.${classes.slider}`));
    const styles = document.head.appendChild(document.createElement("style"));
    styles.type = "text/css";

    for (let k = 0; k < 3; k++) {
      styles.textContent += `.${classes.slider}>input:nth-of-type(${
        k + 1
      }):checked{& ~.${classes.track} .${
        classes.slide
      }:nth-child(-n+${k}){margin-left:calc((-100% / var(--per-page)) + (var(--gap) / 2));opacity:0;}& ~.${
        classes.controls
      } label:nth-child(${k + 1}){opacity:1}}`;
    }

    sliders.forEach((slider, i) => {
      slider.dataset.sliderId = i;

      const track = slider.querySelector(`.${classes.track}`);
      const controls = slider.querySelector(`.${classes.controls}`);
      const slides = Array.from(track.querySelectorAll(`.${classes.slide}`));

      slides.forEach((slide, j) => {
        slide.dataset.slideId = j;

        const input = slider.insertBefore(
          document.createElement("input"),
          slider.firstChild
        );
        input.name = `cssSliderControl_${i}`;
        input.type = "radio";
        input.id = `cssSliderControl_${i}_${slides.length - j}`;

        const label = controls.appendChild(document.createElement("label"));
        label.htmlFor = `cssSliderControl_${i}_${j + 1}`;
        label.textContent = j + 1;
      });
    });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.slider}>
        <div className={classes.track}>
          <div className={classes.slide}>
            <div
              className={classes["whatever-you-want"]}
              style={{
                height: "552px",
                width: "100%",
                borderRadius: "1rem",
                backgroundImage: `url(${imageURL})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className={classes.slide}>
            <div
              className={classes["whatever-you-want"]}
              style={{
                height: "552px",
                width: "100%",
                borderRadius: "1rem",
                backgroundImage: `url(${imageURL2})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className={classes.slide}>
            <div
              className={classes["whatever-you-want"]}
              style={{
                height: "552px",
                width: "100%",
                borderRadius: "1rem",
                backgroundImage: `url(${imageURL3})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div className={classes.controls}></div>
      </div>
    </div>
  );
};

export default HomeSlider;
