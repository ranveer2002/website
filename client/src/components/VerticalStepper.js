import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { LiaDotCircleSolid } from "react-icons/lia";
import "../App.css";
import Slideimg from "./sliderasset/Home Image.png";

const Step = ({ isActive, isCompleted, label, desc, onClick }) => {
  return (
    <div
      className={`step-container ${isActive ? "active" : ""} py-5`}
      onClick={onClick}
    >
      <div className="step-icon">
        <LiaDotCircleSolid fontSize={25} className="completed-icon" />
      </div>
      <div className={`step-text`}>
        <div className={`step-title ${isCompleted ? "completed" : ""}`}>
          {label}
        </div>
        <div className="step-desc">{desc}</div>
      </div>
    </div>
  );
};

// The main component
const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Comprehensive Assessment",
      description:
        "Multidisciplinary athlete evaluation by physiotherapists, psychologists, dietitians.",
    },
    {
      title: "Personalized Plan Development",
      description:
        "Personalized plan for unique needs, integrating physical, mental, dietary aspects.",
    },
    {
      title: "Targeted Interventions",
      description:
        "Custom interventions: physiotherapy, psychology, nutrition for peak performance.",
    },
    {
      title: "Performance Enhancement",
      description:
        "Achieve optimal physical and mental performance through tailored plans and interventions.",
    },
  ];

  const stepContent = [
    <img src={Slideimg} alt="slide" loading="lazy" />,
    <img src={Slideimg} alt="slide" loading="lazy" />,
    <img src={Slideimg} alt="slide" loading="lazy" />,
    <img src={Slideimg} alt="slide" loading="lazy" />,
  ];

  const handleClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="w-[1280px] mx-auto">
      <div>
        <p className="text-3xl font-semibold w-[223px] text-center mx-auto">
          How we work
        </p>
        <p className="text-xl font-normal text-center w-[908px] mx-auto mt-5 text-zinc-500">
          Multidisciplinary athlete evaluation by physiotherapists,{" "}
        </p>
        <span className="text-xl font-normal text-center justify-center flex w-full text-zinc-500">
          psychologists, dietitians.
        </span>
      </div>
      <div className="step-container mt-16 ml-5 space-x-52">
        <div className="steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step
                label={step.title}
                desc={step.description}
                isActive={index === activeStep}
                isCompleted={index <= activeStep}
                onClick={() => handleClick(index)}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="content w-[380px] h-[380px] mt-10">
          {stepContent[activeStep]}
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
