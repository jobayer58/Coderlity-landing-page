import React from 'react';
import './MeetTeam.css'
import { FaArrowRightLong } from 'react-icons/fa6';

const MeetTeam = () => {
    return (
        <section className='meet-section'>
            <div className='meet-div'>
                <div>
                    <h1>Let’s build to together</h1>
                </div>
                <div className='meet-btn-div'>
                    <button className="meet-btn">Meet With Teem</button>
                    <div className='meet-btn-icon-div'>
                        <FaArrowRightLong className='meet-icon' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;