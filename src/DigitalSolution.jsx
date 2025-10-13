import React from 'react';
import './DigitalSolution.css';
import digital from '../src/assets/iamges/digital solution.png'


const DigitalSolution = () => {
    return (
        <section className='solution-section'>
            <div className='solution-parent'>
                <div className='solution-img-div'>
                    <div><img src={digital} alt="" /></div>
                    <div>
                        <h1>Our Complete <br /> Digital Solutions</h1>
                        <p>We provide a complete suite of services that covers web <br /> development, app development, UI/UX design, API integration <br /> (including e-invoicing ZATCA integration), digital marketing, IT <br /> consultation, and domain hosting, ensuring all your digital needs <br /> are met under one roof.</p>
                    </div>
                </div>
                <div className=''>
                    {/* 1 */}
                    <div>
                        01 web development
                    </div>
                    {/* 2 */}
                    <div>
                        02 Mobile Application
                    </div>
                    {/* 1 */}
                    <div>
                        03 UI/UX
                    </div>
                    {/* 1 */}
                    <div>
                        04 Domain Hosting
                    </div>
                    {/* 1 */}
                    <div>
                        05 Digital Marketing
                    </div>
                    {/* 06 */}
                    <div>
                        06 Tech Consultancy
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalSolution;