import React, { useEffect, useRef, useState } from "react";
import "./ProcessWork.css";
import image1 from '../src/assets/iamges/image 1.png'
import image2 from '../src/assets/iamges/image 2.png'
import image3 from '../src/assets/iamges/image 3.png'
import image4 from '../src/assets/iamges/image 4.png'

const steps = [
    { img: image1, text: "Planning" },
    { img: image2, text: "Design" },
    { img: image3, text: "Development" },
    { img: image4, text: "Launch" },
];

function ProcessWork() {
    // 
    const [activeStep, setActiveStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const stepRefs = useRef([]);

    const workSteps = [
        {
            id: 1,
            title: "Planning",
            description: "We analyze your requirements and create a detailed project plan.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "Design",
            description: "Our designers create beautiful and functional interfaces.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            title: "Development",
            description: "We build your product with clean, efficient code.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 4,
            title: "Launch",
            description: "We deploy and monitor your product for optimal performance.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    // Calculate dot position based on active step
    const calculateDotPosition = () => {
        if (stepRefs.current.length === 0) return '10%';

        const positions = {
            0: '10%',
            1: '35%',
            2: '60%',
            3: '85%'
        };

        return positions[activeStep] || '10%';
    };

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % workSteps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAnimating, workSteps.length]);

    const toggleAnimation = () => {
        setIsAnimating(!isAnimating);
    };
    // 
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % steps.length);
        }, 2000); // 2s per step
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="text-center">just Demo</h1>
            <div className="container">
                <div className="timeline">
                    <div className="line"></div>
                    <div className="dot" style={{ left: `${(active / (steps.length - 1)) * 100}%` }}></div>
                </div>

                <div className="steps">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`step ${active === i ? "active" : ""}`}
                        >
                            <div className="img-wrapper">
                                <img src={step.img} alt={step.text} />
                            </div>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/*  */}
            <div className="work-process-container">

                <div className="process-container">
                    <div className="process-line">
                        <div className="dashed-line"></div>
                        <div
                            className="moving-dot"
                            style={{
                                left: calculateDotPosition(),
                                transition: isAnimating ? 'left 0.8s ease-in-out' : 'none'
                            }}
                        ></div>
                    </div>

                    <div className="steps-container">
                        {workSteps.map((step, index) => (
                            <div
                                key={step.id}
                                ref={el => stepRefs.current[index] = el}
                                className={`step ${activeStep === index ? 'active' : ''}`}
                            >
                                <div className="step-image-container">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="step-image"
                                    />
                                    {/* <div className="step-number">{index + 1}</div> */}
                                </div>

                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="animation-controls">
                    <button
                        className={`control-btn ${isAnimating ? 'pause' : 'play'}`}
                        onClick={toggleAnimation}
                    >
                        {isAnimating ? 'Pause Animation' : 'Play Animation'}
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default ProcessWork;
