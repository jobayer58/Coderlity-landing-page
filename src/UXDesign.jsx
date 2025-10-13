import React from 'react';
import uxDesign from '../src/assets/iamges/ui.png'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoIosCheckmark } from 'react-icons/io';

const UXDesign = () => {
    return (
        <section>
            
            {/* content */}
            <div className="domain-content">
                {/* web Application Content */}
                <section className="webapp-section">
                    <Container>
                        <Row className="webapp-parent-row">
                            {/* Left Image */}
                            <Col md={6} className="webapp-image-col">
                                <img src={uxDesign} alt="Web Application" className="webapp-image" />
                            </Col>

                            {/* Right Content */}
                            <Col md={6} className="webapp-content">
                                <h2 className="webapp-title">UI/UX Design That Drives Conversion.</h2>
                                <p className="webapp-description">
                                    At <span className="highlight">Coderlity</span>, we believe that exceptional design is the engine of adoption. We specialize in creating intuitive, research-backed UI/UX designs for web, mobile, and enterprise applications. Our process blends aesthetics with psychology, ensuring every screen is beautiful, accessible, and engineered for a seamless user journey. We don't just make it look good; we make it perform by focusing on user flow, reduced friction, and maximizing your business goals.
                                </p>

                                {/* Features */}
                                <Row className="webapp-features">
                                    <Col xs={12} sm={6}>
                                        <p><IoIosCheckmark className="icon" />User-Centric Research
                                        </p>
                                        <p><IoIosCheckmark className="icon" />Pixel-Perfect UI Design & Branding</p>
                                        <p><IoIosCheckmark className="icon" />Conversion-Focused Wireframing</p>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <p><IoIosCheckmark className="icon" />Interactive Prototypes (Figma/Sketch)</p>
                                        <p><IoIosCheckmark className="icon" />Accessibility & Performance Audits</p>
                                        <p><IoIosCheckmark className="icon" />Design System Creation & Handoff</p>
                                    </Col>
                                </Row>

                                {/* Buttons */}
                                <div className="webapp-buttons">
                                    <Button variant="primary" className="start-btn">Start Your Project Now</Button>
                                    <Button variant="link" className="case-btn">View Our Case Studies</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        </section>
    );
};

export default UXDesign;