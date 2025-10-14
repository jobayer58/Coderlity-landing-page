import React from 'react';
import './Footer.css';
import logo from '../src/assets/iamges/footer logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import massanger from '../src/assets/iamges/sms.png'
import whatsapp from '../src/assets/iamges/whatsapp.png'
import telegram from '../src/assets/iamges/telegram.png'
import { IoMdArrowUp } from 'react-icons/io';
const Footer = () => {
    return (
        <footer className="codarility-footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Company Description */}
                    <div className="footer-section description-section">
                        <div>
                            <img src={logo} alt="" />
                            <p className="company-description">
                                Codarility.com is a leading provider of complete digital solutions, offering a wide range of services including web development, app development, EIP solutions, UI/UX design, digital marketing, IT consultation, and domain hosting. We also offer premium digital products such as PHP Launch, HTML React JS front-end templates, and MERN projects. Our mission is to empower businesses by providing innovative, high-quality, and scalable digital solutions that meet your unique needs.
                            </p>
                        </div>
                        <div className='footer-social'>
                            <FaFacebook className='footer-icon' />
                            <FaYoutube className='footer-icon' />
                            <FaLinkedin className='footer-icon' />
                            <FaSquareXTwitter className='footer-icon' />
                            <FaPinterest className='footer-icon' />
                            <FaGithub className='footer-icon' />
                        </div>
                    </div>

                    {/* Service Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Service</h3>
                        <div className='divider-footer'></div>
                        <ul className="footer-links">
                            <li><a href="#web-development">Web Development</a></li>
                            <li><a href="#app-development">App Development</a></li>
                            <li><a href="#customisation">Customisation Service</a></li>
                            <li><a href="#installation">Installation Service</a></li>
                            <li><a href="#sass">Sass Development</a></li>
                            <li><a href="#wordpress">WordPress Development</a></li>
                            <li><a href="#shopify">Shopify Development</a></li>
                            <li><a href="#erp">ERP Solutions</a></li>
                            <li><a href="#uiux">UI/UX Designing</a></li>
                            <li><a href="#digital-marketing">Digital Marketing Tech</a></li>
                            <li><a href="#it-consultation">IT Consultation</a></li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Products</h3>
                        <ul className="footer-links">
                            <li><a href="#php">PHP Lanwel</a></li>
                            <li><a href="#html">HTML / CSS</a></li>
                            <li><a href="#react">React JS</a></li>
                            <li><a href="#node">Node.js</a></li>
                            <li><a href="#mern">MERN Stack Projects</a></li>
                            <li><a href="#mobile-templates">Mobile App Templates</a></li>
                            <li><a href="#plugins">Plugin & Extensions</a></li>
                            <li><a href="#erp-software">ERP Solutions Software</a></li>
                            <li><a href="#crm">CRM-POS Software</a></li>
                            <li><a href="#seo-tools">SEO Tools & Resources</a></li>
                            <li><a href="#custom-templates">Custom Templates</a></li>
                        </ul>
                    </div>

                    {/* Digital Marketing Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Digital Marketing</h3>
                        <ul className="footer-links">
                            <li><a href="#seo">SEO</a></li>
                            <li><a href="#google-business">Google My Business Service</a></li>
                            <li><a href="#social-media">Social Media Advertising</a></li>
                            <li><a href="#lead-generation">Lead generation</a></li>
                            <li><a href="#backlinking">Backlinking</a></li>
                            <li><a href="#guest-posting">Guest Posting</a></li>
                            <li><a href="#ppc">PPC Advertising</a></li>
                            <li><a href="#content-marketing">Content Marketing</a></li>
                            <li><a href="#email-marketing">Email Marketing</a></li>
                            <li><a href="#google-ads">Google Ads</a></li>
                            <li><a href="#facebook-ads">Facebook ads</a></li>
                        </ul>
                    </div>

                    {/* Web Hosting Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Web Hosting</h3>
                        <ul className="footer-links">
                            <li><a href="#shared-hosting">Shared Hosting</a></li>
                            <li><a href="#vps">VPS Hosting</a></li>
                            <li><a href="#dedicated">Dedicated Hosting</a></li>
                            <li><a href="#cloud">Cloud Hosting</a></li>
                            <li><a href="#dedicated-server">Dedicated Server</a></li>
                            <li><a href="#wordpress-hosting">WordPress Hosting</a></li>
                            <li><a href="#reseller">Reseller Hosting</a></li>
                            <li><a href="#ecommerce">E-commerce Hosting</a></li>
                            <li><a href="#domain">Domain</a></li>
                            <li><a href="#ssl">SSL Solutions</a></li>
                            <li><a href="#smtp">SMTP</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h3 className="section-title">Company</h3>
                        <ul className="footer-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#login">Account Login</a></li>
                            <li><a href="#register">Account Registration</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#refund">Refund Policy</a></li>
                            <li><a href="#support">Support Centre</a></li>
                            <li><a href="#support-policy">Support Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © 2022 - 2025 All Right Reserved By Codarility
                    </p>
                    <div className="footer-coderlity">
                        <h1>coderlity</h1>
                    </div>
                    {/* messenger */}
                    <div className='footer-social-sms-container'>
                        {/* Arrow up */}
                        <div className='footer-Arrow'>
                            <div className='Arrow-div'>
                                <IoMdArrowUp className='arrow-icon' />
                            </div>
                        </div>
                        {/* 1 */}
                        <div className='footer-social-sms'>
                            <div className='sms-div'>
                                <img src={telegram} alt="" />
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='footer-social-sms'>
                            <div className='sms-div'>
                                <img src={whatsapp} alt="" />
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='footer-social-sms'>
                            <div className='sms-div'>
                                <img src={massanger} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;