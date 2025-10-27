import React from "react";
import "./ProcessTimeline.css";
import waveShape from '../src/assets/iamges/waveShape.png'
import idea1 from '../src/assets/iamges/idea1.png'
import idea2 from '../src/assets/iamges/idea2.png'
import idea3 from '../src/assets/iamges/idea3.png'
import idea4 from '../src/assets/iamges/idea4.png'
import idea5 from '../src/assets/iamges/idea5.png'
import idea6 from '../src/assets/iamges/idea6.png'
import idea7 from '../src/assets/iamges/idea7.png'
import idea8 from '../src/assets/iamges/idea8.png'

const ProcessTimeline = () => {

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">From Idea Generation To Success</h2>
      <p className="timeline-subtitle">
        Experience our systematic approach to digital excellence. We meticulously guide you through every <br /> phase, ensuring  a seamless and successful transformation of your vision into reality.
      </p>
      <div className="idea-div">
        <img src={waveShape} alt="" />
      </div>
      {/* idea process */}
      <div className="work-step-container">
        {/* idea1 */}
        <div className="work-step">
          <div className="work-label-top">Idea-Generation</div>
          <div className="work-icon-box">
            <img src={idea1} alt="Idea Icon" />
          </div>
        </div>
        {/* idea2 */}
        <div className="work-step">
          <div className="work-label-bottom">Market Research</div>
          <div className="work-icon-box">
            <img src={idea2} alt="Idea Icon" />
          </div>
        </div>
        {/* idea3 */}
        <div className="work-step">
          <div className="work-label-top">strategy planing</div>
          <div className="work-icon-box">
            <img src={idea3} alt="Idea Icon" />
          </div>
        </div>
        {/* idea4 */}
        <div className="work-step">
          <div className="work-label-bottom">UI/UX</div>
          <div className="work-icon-box">
            <img src={idea4} alt="Idea Icon" />
          </div>
        </div>
        {/* idea5 */}
        <div className="work-step">
          <div className="work-label-top">Development</div>
          <div className="work-icon-box">
            <img src={idea5} alt="Idea Icon" />
          </div>
        </div>
        {/* idea6 */}
        <div className="work-step">
          <div className="work-label-bottom">Quality Assurance</div>
          <div className="work-icon-box">
            <img src={idea6} alt="Idea Icon" />
          </div>
        </div>
        {/* idea7 */}
        <div className="work-step">
          <div className="work-label-top">Launch & Marketing</div>
          <div className="work-icon-box">
            <img src={idea7} alt="Idea Icon" />
          </div>
        </div>
        {/* idea8 */}
        <div className="work-step">
          <div className="work-label-bottom">Success</div>
          <div className="work-icon-box">
            <img src={idea8} alt="Idea Icon" />
          </div>
        </div>

      </div>

    </section>
  );
};

export default ProcessTimeline;
