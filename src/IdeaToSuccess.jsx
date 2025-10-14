import React from 'react';
import './IdeaToSuccess'

const IdeaToSuccess = () => {
    const steps = [
        { id: 1, title: 'Idea Generation' },
        { id: 2, title: 'Strategy Planning' },
        { id: 3, title: 'Market Research' },
        { id: 4, title: 'U/UX' },
        { id: 5, title: 'Development' },
        { id: 6, title: 'Quality Assurance' },
        { id: 7, title: 'Launch & Marketing' },
        { id: 8, title: 'Success' }
    ];

    return (
        <section className="process-roadmap-section">
            <div className="process-container">
                {/* Header Section */}
                <div className="process-header">
                    <h1 className="process-title">From Idea Generation To Success</h1>
                    <p className="process-description">
                        Experience our systematic approach to digital excellence.We meticulously guide you through every phase, ensuring
                        a seamless and successful transformation of your vision into reality.
                    </p>
                </div>

                {/* Roadmap Timeline */}
                <div className="roadmap-container">
                    <div className="roadmap-line"></div>

                    <div className="roadmap-steps">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`roadmap-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="step-content">
                                    <div className="step-number">{step.id.toString().padStart(2, '0')}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                </div>
                                <div className="step-connector"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdeaToSuccess;