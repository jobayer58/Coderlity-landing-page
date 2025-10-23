import React from "react";
import "./ProcessTimeline.css";

const ProcessTimeline = () => {
  const buttons = [
    { id: 1, label: "Idea Generation", position: "top", color: "#007CE8" },
    { id: 2, label: "Market Research", position: "bottom", color: "#2A2A2A" },
    { id: 3, label: "Strategy Planning", position: "top", color: "#007CE8" },
    { id: 4, label: "UI/UX", position: "center", color: "#FF6B00" },
    { id: 5, label: "Development", position: "bottom", color: "#2A2A2A" },
    { id: 6, label: "Quality Assurance", position: "center", color: "#FF6B00" },
    { id: 7, label: "Launch & Marketing", position: "top", color: "#007CE8" },
    { id: 8, label: "Success", position: "bottom", color: "#2A2A2A" },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">From Idea Generation To Success</h2>
      <p className="timeline-subtitle">
        Experience our systematic approach to digital excellence. We meticulously guide you through every phase, ensuring <br /> a seamless and successful transformation of your vision into reality.
      </p>

      <div className="process-container">
        {buttons.map((btn, index) => (
          <div key={btn.id} className={`process-item ${btn.position}`}>
            {/* Left dotted line for first btn only */}
            {index === 0 && (
              <div className="dotted-line left">
               
              </div>
            )}

            {/* Button that moves along left dotted border */}
            <div
              className="process-btn border-move"
              style={{ backgroundColor: btn.color }}
            >
              {btn.label}
            </div>

            {/* Right dotted line for all */}
            <div className="dotted-line right">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
