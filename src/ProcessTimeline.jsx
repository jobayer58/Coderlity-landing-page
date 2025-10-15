import React from "react";
import "./ProcessTimeline.css";

const ProcessTimeline = () => {
  const steps = [
    { top: "Idea-Generation", bottom: "Market Research", color: "blue" },
    { top: "Strategy Planning", bottom: "UI/UX", color: "orange" },
    { top: "Quality Assurance", bottom: "Development", color: "orange" },
    { top: "Launch & Marketing", bottom: "Success", color: "blue" },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">From Idea Generation To Success</h2>
      <p className="timeline-subtitle">
        Experience our systematic approach to digital excellence. We meticulously guide you through every phase, ensuring <br /> a seamless and successful transformation of your vision into reality.
      </p>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div className="timeline-step" key={index}>
            <div className={`timeline-card top ${step.color}`}>{step.top}</div>
            <div className="timeline-line"></div>
            <div className={`timeline-card bottom ${step.color === "orange" ? "dark" : "black"}`}>
              {step.bottom}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
