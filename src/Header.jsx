import React, { useEffect, useRef, useState } from 'react';
import './Header.css'
import logo1 from '../src/assets/iamges/logo1.png'
import logo2 from '../src/assets/iamges/logo2.png'
import logo3 from '../src/assets/iamges/logo3.png'
import logo4 from '../src/assets/iamges/logo4.png'
import logo5 from '../src/assets/iamges/logo5.png'
import logo6 from '../src/assets/iamges/logo6.png'
import logo7 from '../src/assets/iamges/logo7.png'
import logo8 from '../src/assets/iamges/logo8.png'
import logo from '../src/assets/iamges/web logo1 1 1.svg'
import banner1 from '../src/assets/iamges/banner1.png'
import banner2 from '../src/assets/iamges/banner2.png'
import spinning from '../src/assets/iamges/spinning 1.png'
import spinning2 from '../src/assets/iamges/image 780.png'
import { IoApps, IoCall } from "react-icons/io5"
import { Button,  Card, Col, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import {  PiSignIn } from "react-icons/pi"
import { FaGoogleDrive, } from "react-icons/fa"
import { MdDesignServices, MdKeyboardArrowDown, MdPhoneIphone, MdShoppingCart, MdSupport, MdWeb } from "react-icons/md"


const Header = () => {
    // ioApps Dropdown card 
    const [showApps, setShowApps] = useState(false);
    const dropdownRef = useRef(null);

    const toggleAppsMenu = () => {
        setShowApps((prev) => !prev);
    };

    // 👉 bahire click korle dropdown close ioApps
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowApps(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const appItems = [
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },
        { icon: <FaGoogleDrive className="app-item-icon" />, name: "Drive" },

    ];

    // navigation bar dropdown card function
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState('left');
    const [hoveredItems, setHoveredItems] = useState({
        services: null,
        products: null,
        digitalMarketing: null,
        webHosting: null,
        company: null
    });

    const dropdownRefs = {
        services: useRef(null),
        products: useRef(null),
        digitalMarketing: useRef(null),
        webHosting: useRef(null),
        company: useRef(null)
    };

    const navItemRefs = {
        services: useRef(null),
        products: useRef(null),
        digitalMarketing: useRef(null),
        webHosting: useRef(null),
        company: useRef(null)
    };

    const timeoutRef = useRef(null);


    const servicesData = [
        {
            id: 1,
            name: "Web Development",
            icon: <MdWeb />,
            description: "Modern, fast, and responsive web solutions",
            subServices: [
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
                "CMS Development",
                "Responsive Development",
                "Custom Development",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
                "CMS Development",
                "Responsive Development",
                "Custom Development",
            ]
        },
        {
            id: 2,
            name: "Mobile Application",
            icon: <MdPhoneIphone />,
            description: "ERP Solutions",
            subServices: [
                "iOS App Development",
                "Android App Development",
                "Cross-Platform Apps",
                "UI/UX Design",
                "App Maintenance",
                "App Store Optimization",
                "iOS App Development",
                "Android App Development",
                "Cross-Platform Apps",
                "UI/UX Design",
                "App Maintenance",
                "App Store Optimization",
            ]
        },
        {
            id: 3,
            name: "UI/UX",
            icon: <MdDesignServices />,
            description: "Digital marketing",
            subServices: [
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Usability Testing",
                "Design Systems",
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Usability Testing",
                "Design Systems"
            ]
        },
        {
            id: 4,
            name: "Tech Consultation",
            icon: <MdSupport />,
            description: "Expert technology guidance",
            subServices: [
                "IT Strategy",
                "System Architecture",
                "Technology Stack",
                "Digital Transformation",
                "Cloud Solutions",
                "Security Audit",
                "IT Strategy",
                "System Architecture",
                "Technology Stack",
                "Digital Transformation",
                "Cloud Solutions",
                "Security Audit",
            ]
        },
        {
            id: 5,
            name: "Digital Marketing",
            icon: <MdShoppingCart />,
            description: "Custom, secure, and high-converting online stores",
            subServices: [
                "Online Store Setup",
                "Payment Integration",
                "Inventory Management",
                "SEO Optimization",
                "Performance Tuning",
                "Security Implementation",
                "Online Store Setup",
                "Payment Integration",
                "Inventory Management",
                "SEO Optimization",
                "Performance Tuning",
                "Security Implementation",
            ]
        },
        {
            id: 6,
            name: "ERP Solution",
            icon: <MdShoppingCart />,
            description: "Custom, secure, and high-converting online stores",
            subServices: [
                "IT Strategy",
                "System Architecture",
                "Technology Stack",
                "Digital Transformation",
                "Cloud Solutions",
                "Security Audit",
                "IT Strategy",
                "System Architecture",
                "Technology Stack",
                "Digital Transformation",
                "Cloud Solutions",
                "Security Audit",
            ]
        }
    ];

    // Products data
    const productsData = [
        {
            id: 1,
            name: "Software Products",
            icon: <MdWeb />,
            description: "Ready-to-use software solutions",
            subServices: ["CRM Software", "ERP Systems", "Inventory Management"]
        },
        {
            id: 2,
            name: "Digital Products",
            icon: <MdShoppingCart />,
            description: "Online digital solutions",
            subServices: ["E-books", "Online Courses", "Digital Templates"]
        }
    ];

    // Digital Marketing data
    const digitalMarketingData = [
        {
            id: 1,
            name: "SEO Services",
            icon: <MdSupport />,
            description: "Search engine optimization",
            subServices: ["On-Page SEO", "Off-Page SEO", "Technical SEO"]
        },
        {
            id: 2,
            name: "Social Media ",
            icon: <MdDesignServices />,
            description: "Social media management",
            subServices: ["Content Creation", "Community Management", "Paid Advertising"]
        }
    ];
    // Digital Marketing data
    const webHostingData = [
        {
            id: 1,
            name: "SEO Services",
            icon: <MdSupport />,
            description: "Search engine optimization",
            subServices: ["On-Page SEO", "Off-Page SEO", "Technical SEO"]
        },
        {
            id: 2,
            name: "Social Media ",
            icon: <MdDesignServices />,
            description: "Social media management",
            subServices: ["Content Creation", "Community Management", "Paid Advertising"]
        }
    ];

    // Company data
    const companyData = [
        {
            id: 1,
            name: "About Us",
            icon: <MdSupport />,
            description: "Learn about our company",
            subServices: ["Our Story", "Mission & Vision", "Team Members"]
        },
        {
            id: 2,
            name: "Careers",
            icon: <MdDesignServices />,
            description: "Join our team",
            subServices: ["Open Positions", "Culture", "Benefits"]
        }
    ];

    const handleMouseEnter = (dropdownName) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(dropdownName);

        // Check screen position and adjust dropdown
        checkDropdownPosition(dropdownName);

        // Set default hovered item for this dropdown
        const data = getDataForDropdown(dropdownName);
        if (data && data.length > 0 && !hoveredItems[dropdownName]) {
            setHoveredItems(prev => ({
                ...prev,
                [dropdownName]: data[0]
            }));
        }
    };

    const checkDropdownPosition = (dropdownName) => {
        const navItem = navItemRefs[dropdownName]?.current;
        if (!navItem) return;

        const rect = navItem.getBoundingClientRect();
        const dropdownWidth = 800; // Same as CSS width
        const screenWidth = window.innerWidth;

        // Check if dropdown will go outside right edge
        if (rect.left + dropdownWidth > screenWidth - 20) {
            setDropdownPosition('right');
        } else {
            setDropdownPosition('left');
        }
    };

    const handleMouseLeave = (dropdownName) => {
        timeoutRef.current = setTimeout(() => {
            const isOverDropdown = dropdownRefs[dropdownName]?.current?.matches(':hover');
            const isOverNavItem = navItemRefs[dropdownName]?.current?.matches(':hover');

            if (!isOverDropdown && !isOverNavItem) {
                setActiveDropdown(null);
            }
        }, 200);
    };

    const handleDropdownMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleDropdownMouseLeave = (dropdownName) => {
        timeoutRef.current = setTimeout(() => {
            const isOverNavItem = navItemRefs[dropdownName]?.current?.matches(':hover');

            if (!isOverNavItem) {
                setActiveDropdown(null);
            }
        }, 200);
    };

    const handleServiceHover = (dropdownName, item) => {
        setHoveredItems(prev => ({
            ...prev,
            [dropdownName]: item
        }));
    };

    const getDataForDropdown = (dropdownName) => {
        switch (dropdownName) {
            case 'services': return servicesData;
            case 'products': return productsData;
            case 'digitalMarketing': return digitalMarketingData;
            case 'webHosting': return webHostingData;
            case 'company': return companyData;
            default: return [];
        }
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
    };

    const renderDropdownCard = (dropdownName) => {
        const data = getDataForDropdown(dropdownName);
        const hoveredItem = hoveredItems[dropdownName] || data[0];

        return (
            <div
                ref={dropdownRefs[dropdownName]}
                className={`services-dropdown-card ${dropdownPosition === 'right' ? 'dropdown-right' : ''}`}
                onMouseEnter={() => handleDropdownMouseEnter(dropdownName)}
                onMouseLeave={() => handleDropdownMouseLeave(dropdownName)}
            >
                <Card className="shadow-lg">
                    <Card.Body className="p-4">
                        <Row>
                            <Col md={4}>
                                <div className="main-services-list">
                                    {data.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`service-item ${hoveredItem?.id === item.id ? 'active' : ''}`}
                                            onMouseEnter={() => handleServiceHover(dropdownName, item)}
                                        >
                                            <div className="service-header">
                                                <span className="service-icon">{item.icon}</span>
                                                <span className="service-name">{item.name}</span>
                                            </div>
                                            {hoveredItem?.id === item.id && (
                                                <div className="service-description">
                                                    {item.description}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col md={6}>
                                        <div className="sub-services-column">
                                            {hoveredItem?.subServices.slice(0, Math.ceil(hoveredItem?.subServices.length / 2)).map((subService, index) => (
                                                <div key={index} className="sub-service-item">
                                                    {subService}
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="sub-services-column">
                                            {hoveredItem?.subServices.slice(Math.ceil(hoveredItem?.subServices.length / 2)).map((subService, index) => (
                                                <div key={index} className="sub-service-item">
                                                    {subService}
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    };



const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




    return (
        <header className="headerBg" >
            {/* navbar */}
            <Navbar expand="lg" variant="light" className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`} >
                <Navbar.Brand href="#">
                    <img className="logoImg" src={logo} alt="Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-parent">
                    <Nav className="nav-li">
                        <Nav.Link href="#" onClick={handleLinkClick}>
                            Home
                        </Nav.Link>
                        <span className="divider">/</span>

                        {/* Services */}
                        <div
                            ref={navItemRefs.services}
                            className={`services-dropdown-container ${activeDropdown === 'services' ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('services')}
                            onMouseLeave={() => handleMouseLeave('services')}
                        >
                            <Nav.Link href="#" onClick={handleLinkClick} className="services-link">
                                Services <MdKeyboardArrowDown />
                            </Nav.Link>
                            {activeDropdown === 'services' && renderDropdownCard('services')}
                        </div>
                        <span className="divider">/</span>

                        {/* Products */}
                        <div
                            ref={navItemRefs.products}
                            className={`services-dropdown-container ${activeDropdown === 'products' ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('products')}
                            onMouseLeave={() => handleMouseLeave('products')}
                        >
                            <Nav.Link href="#" onClick={handleLinkClick} className="services-link">
                                Products <MdKeyboardArrowDown />
                            </Nav.Link>
                            {activeDropdown === 'products' && renderDropdownCard('products')}
                        </div>
                        <span className="divider">/</span>

                        {/* Digital Marketing */}
                        <div
                            ref={navItemRefs.digitalMarketing}
                            className={`services-dropdown-container ${activeDropdown === 'digitalMarketing' ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('digitalMarketing')}
                            onMouseLeave={() => handleMouseLeave('digitalMarketing')}
                        >
                            <Nav.Link href="#" onClick={handleLinkClick} className="services-link">
                                Digital Marketing <MdKeyboardArrowDown />
                            </Nav.Link>
                            {activeDropdown === 'digitalMarketing' && renderDropdownCard('digitalMarketing')}
                        </div>
                        <span className="divider">/</span>

                        {/* Web Hosting */}
                        <div
                            ref={navItemRefs.webHosting}
                            className={`services-dropdown-container ${activeDropdown === 'webHosting' ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('webHosting')}
                            onMouseLeave={() => handleMouseLeave('webHosting')}
                        >
                            <Nav.Link href="#" onClick={handleLinkClick} className="services-link">
                                Web Hosting <MdKeyboardArrowDown />
                            </Nav.Link>
                            {activeDropdown === 'webHosting' && renderDropdownCard('webHosting')}
                        </div>
                        <span className="divider">/</span>

                        {/* Company */}
                        <div
                            ref={navItemRefs.company}
                            className={`services-dropdown-container ${activeDropdown === 'company' ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter('company')}
                            onMouseLeave={() => handleMouseLeave('company')}
                        >
                            <Nav.Link href="#" onClick={handleLinkClick} className="services-link">
                                Company <MdKeyboardArrowDown />
                            </Nav.Link>
                            {activeDropdown === 'company' && renderDropdownCard('company')}
                        </div>
                    </Nav>

                    {/* ✅ Account + Apps visible only in mobile/tablet */}
                    <div className="d-lg-none">
                        <Row className="account-div">
                            <Col xs="auto">
                                <Button variant="dark" className="accountBtn ">
                                    <PiSignIn /> My Account
                                </Button>
                            </Col>
                            <Col xs="auto" className="apps-menu-wrapper" ref={dropdownRef}>
                                <IoApps className="ioApps" onClick={toggleAppsMenu} />
                                {showApps && (
                                    <div className="apps-dropdown">
                                        {appItems.map((app) => (
                                            <div key={app.name} className="app-item">
                                                <p className="app-item-icon">{app.icon}</p>
                                                <p>{app.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </div>
                </Navbar.Collapse>

                {/* ✅ Account + Apps visible only on large screens */}
                <div className="d-none d-lg-flex">
                    <Row className="account-div">
                        <Col xs="auto">
                            <Button variant="dark" className="accountBtn">
                                <PiSignIn /> My Account
                            </Button>
                        </Col>
                        <Col xs="auto" className="apps-menu-wrapper" ref={dropdownRef}>
                            <IoApps className="ioApps" onClick={toggleAppsMenu} />
                            {showApps && (
                                <div className="apps-dropdown">
                                    {appItems.map((app) => (
                                        <div key={app.name} className="app-item">
                                            <p className="app-item-icon">{app.icon}</p>
                                            <p>{app.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Col>
                    </Row>
                </div>
            </Navbar>


            {/*banner section */}
            <section className="banner-section">
                {/* Background Floating Logos */}
                <div className="floating-logos">
                    <img src={logo1} alt="" className="floating-logo logo-1" />
                    <img src={logo2} alt="" className="floating-logo logo-2" />
                    <img src={logo3} alt="" className="floating-logo logo-3" />
                    <img src={logo4} alt="" className="floating-logo logo-4" />
                    <img src={logo5} alt="" className="floating-logo logo-5" />
                    <img src={logo6} alt="" className="floating-logo logo-6" />
                    <img src={logo7} alt="" className="floating-logo logo-7" />
                    <img src={logo8} alt="" className="floating-logo logo-8" />
                </div>
                <div>
                    <h5 className="text-banner">Looking for Your One Stop Solution? </h5>
                    <h1 className="text-description">Complete Digital Solutions <br />
                        for <span className='text-description-span'>Your Business</span></h1>
                </div>
                <div className="btnToolbar">
                    <Button variant="dark" className="bannerBtn1">
                        <IoCall className="IoCall" /> Book an intro call
                    </Button>
                    <Button variant="light" className="bannerBtn2">
                        Explore Our Work
                    </Button>
                </div>

                <InputGroup className="inputImg">
                    <img src={banner2} alt="" />
                    <img src={banner1} alt="" />
                </InputGroup>

                <Row className="input-Nav">
                    <Col xs="auto">
                        <img src={spinning2} className='spinning' alt="" />
                    </Col>

                    <Col>
                        <Nav className="banner-btn-parent ">
                            <button className="banner-btn">Web Application</button>
                            <button className="banner-btn">Mobile Application</button>
                            <button className="banner-btn">ERP Solution</button>
                            <button className="banner-btn">CMS Solution</button>
                            <button className="banner-btn">UI/UX</button>
                            <button className="banner-btn">Digital Marketing</button>
                            <button className="banner-btn">Tech Consultency</button>
                        </Nav>
                    </Col>

                    {/* <Col xs="auto">
                        <Row className="message-parent g-2">
                            <Col xs="auto">
                                <div className="message-div">
                                    <BiMessageDetail className="message" />
                                </div>
                            </Col>
                            <Col xs="auto">
                                <PiDotsThreeVerticalBold className="threeDot" />
                            </Col>
                        </Row>
                    </Col> */}
                    <Col xs="auto">
                        <img src={spinning} className='spinning' alt="" />
                    </Col>
                </Row>

                <div className="banner-text-gradient">
                    <h1>Our Services</h1>
                </div>

            </section>
        </header>
    );
};

export default Header;