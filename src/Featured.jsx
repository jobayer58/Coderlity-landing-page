import React from 'react';
import UXImage from '../src/assets/iamges/featured3.png'
import hostingImage from '../src/assets/iamges/featured1.png'
import webImage from '../src/assets/iamges/featured4.png'
import marketingImage from '../src/assets/iamges/featured2.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Featured.css'

const Featured = () => {

    return (
        <section className='featured-section'>
            <div className='featured-text'>
                <h1>Featured Items</h1>
                <p>Explore our top-selling digital products, including custom PHP Laravel frameworks, sleek HTML React JS front-end templates, and <br className='br' /> robust MERN projects. These featured items are designed to offer cutting-edge solutions for modern web development needs.</p>
            </div>
            <div className='featured-card-parent'>
                {/* card 1 */}
                <div className='featured-card-div'>
                    <div className='featured-img'><img src={UXImage} className='img' alt="" /></div>
                    <div className='featured-content-text'>
                        <h1>UI/UX Design</h1>
                        <p>UI/UX Design services craft engaging, user-friendly digital experiences that blend aesthetics with functionality.</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className='featured-card-div'>
                    <div className='featured-img'><img src={hostingImage} className='img' alt="" /></div>
                    <div className='featured-content-text'>
                        <h1>Domain Hosting</h1>
                        <p>Our Domain Hosting service provides secure, reliable, and fast hosting solutions to keep your website always accessible.</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className='featured-card-div'>
                    <div className='featured-img'><img src={webImage} className='img' alt="" /></div>
                    <div className='featured-content-text'>
                        <h1>Web / App Developing</h1>
                        <p>Our Game Design service creates immersive, interactive, and engaging gaming experiences tailored to captivate players.</p>
                    </div>
                </div>
                {/* card 1 */}
                <div className='featured-card-div'>
                    <div className='featured-img'><img src={marketingImage} className='img' alt="" /></div>
                    <div className='featured-content-text'>
                        <h1>Digital Marketing</h1>
                        <p>Our Digital Marketing service helps grow your brand online through strategic campaigns, SEO, social media, and targeted advertising.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;