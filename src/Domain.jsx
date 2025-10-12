import React from 'react';
import { MdDomain } from 'react-icons/md';
import { SiHostinger } from 'react-icons/si';
import iconSearch from '../src/assets/iamges/icon serch.png'
import './Domain.css'
const Domain = () => {
    return (
        <section className="domain-section">
            {/* icon */}
            <div className="domain-banner">
                {/* icon parent */}
                <div className="icon-parent">
                    {/* 1st icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">Domain</p>
                    </div>
                    {/* 2 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <SiHostinger className="icon" />
                        </div>
                        <p className="icon-text">Hosting</p>

                    </div>
                    {/* 3 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <SiHostinger className="icon" />
                        </div>
                        <p className="icon-text ">Web Application</p>

                    </div>
                    {/* 4 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">Mobile Application</p>

                    </div>
                    {/* 4 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">ERP Solution</p>

                    </div>
                    {/* 5 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">Digital Marketing</p>

                    </div>

                    {/* 6 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">UI/UX</p>

                    </div>
                    {/* 7 icon */}
                    <div className="icon-content">
                        <div className=" icon-div " >
                            <MdDomain className=" icon" />
                        </div>
                        <p className="icon-text">Tech Consultency</p>

                    </div>


                </div>
            </div>
            {/* content */}
            <div className="domain-content">
                <div className="domain-content-text">
                    <h1>Find Your Perfect Domain</h1>
                    <p>Discover, buy, and register your unique web address using our <br className='domain-text-br' /> powerful search or get creative with our AI Generator.</p>
                </div>
                {/* search */}
                <div className="search-div">
                    <div className="domain-search">
                        <input type="text" className="input-text" placeholder="Type the domain name or a descriptive phrase..." />
                        <button className="search-btn">Search Domain</button>
                    </div>
                    <div className="search-left-text">
                        <img src={iconSearch} alt="" />
                        <p>Generate with AI</p>
                    </div>
                </div>
                {/* domain card */}
                <div className="domain-card-parent">
                    {/* 1 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.com</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.online</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.shop</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.pro</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.net</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="domain-card">
                        <div className="domain-div">
                            <h1 className="domain-extension">.com</h1>
                            <p className="original-price">USD $17.99/yr</p>
                        </div>
                        <div className="domain-pricing">
                            <div className="discount-price">USD <span>$2.99/yr</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="domain-description">Free WHOIS Privacy Protection is included with every eligible domain registration.</p>
                </div>
            </div>


        </section>
    );
};

export default Domain;