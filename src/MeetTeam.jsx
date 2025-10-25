import React from 'react';
import './MeetTeam.css'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowUpRight } from 'react-icons/go';

const MeetTeam = () => {
    return (
        <section className='meet-section'>
            <div className='meet-div'>
                <div>
                    <h1>Let’s build to together</h1>
                    <p>We believe that great things happen when ideas and skills unite. At Coderlity, <br /> we collaborate with visionaries to craft digital solutions that inspire growth, <br /> innovation, and real impact.</p>
                </div>
                <div>
                    <button className="meet-team">Meet With Teem<span><GoArrowUpRight /></span></button>
                </div>
                {/* <div className='meet-btn-div'>
                    <button className="meet-btn">Meet With Teem</button>
                    <div className='meet-btn-icon-div'>
                        <FaArrowRightLong className='meet-icon' />
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default MeetTeam;