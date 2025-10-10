import { MdDesignServices, MdDomain, MdKeyboardArrowDown, MdPhoneIphone, MdShoppingCart, MdSupport, MdWeb } from "react-icons/md"
import image1 from '../src/assets/iamges/image1.png'
import image2 from '../src/assets/iamges/image2.png'
import image3 from '../src/assets/iamges/image3.png'
import { FaStar } from "react-icons/fa"
import sponsored1 from '../src/assets/iamges/sponsored1.png'
import sponsored2 from '../src/assets/iamges/sponsored2.png'
import sponsored3 from '../src/assets/iamges/sponsored3.png'
import sponsored4 from '../src/assets/iamges/sponsored4.png'
import sponsored5 from '../src/assets/iamges/sponsored5.png'
import sponsored6 from '../src/assets/iamges/sponsored6.png'
import sponsored7 from '../src/assets/iamges/sponsored7.png'
import { SiHostinger } from "react-icons/si"
import { GrJs } from "react-icons/gr"
import logo from '../src/assets/iamges/web logo1 1 1.svg'
import { Button, ButtonGroup, ButtonToolbar, Card, Col, Container, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import { PiDotsThreeVerticalBold, PiSignIn } from "react-icons/pi"
import { IoApps, IoCall } from "react-icons/io5"
import banner1 from '../src/assets/iamges/banner1.png'
import banner2 from '../src/assets/iamges/banner2.png'
import spinning from '../src/assets/iamges/spinning 1.png'
import { BiMessageDetail } from "react-icons/bi"
import logo1 from '../src/assets/iamges/logo1.png'
import logo2 from '../src/assets/iamges/logo2.png'
import logo3 from '../src/assets/iamges/logo3.png'
import logo4 from '../src/assets/iamges/logo4.png'
import logo5 from '../src/assets/iamges/logo5.png'
import logo6 from '../src/assets/iamges/logo6.png'
import logo7 from '../src/assets/iamges/logo7.png'
import logo8 from '../src/assets/iamges/logo8.png'
import { useEffect, useRef, useState } from "react"

function App() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const dropdownRef = useRef(null);
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

  // Fixed useEffect - removed servicesData from dependencies
  useEffect(() => {
  if (showServicesDropdown && !hoveredService) {
    setHoveredService(servicesData[0]);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [showServicesDropdown, hoveredService]);

  const handleServicesMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    // Set a delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
        setShowServicesDropdown(false);
        setHoveredService(null);
      }
    }, 200); // 200ms delay
  };

  const handleDropdownMouseEnter = () => {
    // Clear the closing timeout when mouse enters dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves
    timeoutRef.current = setTimeout(() => {
      setShowServicesDropdown(false);
      setHoveredService(null);
    }, 200);
  };

  const handleServiceHover = (service) => {
    setHoveredService(service);
  };

  return (
    <main>
      <header className="headerBg" >
        {/* navbar */}
        <Navbar expand="lg" variant="light">

          {/* Left: Logo */}
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Center: Nav Links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="nav-parent"
          >
            <Nav className="nav-li">
              <Nav.Link href="#">
                Home <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>

              {/* Services Dropdown */}
              {/* Services Dropdown */}
              <div
                className="services-dropdown-container"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Nav.Link href="#" className="services-link">
                  Services <MdKeyboardArrowDown />
                </Nav.Link>

                {showServicesDropdown && (
                  <div
                    ref={dropdownRef}
                    className="services-dropdown-card"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <Card className="shadow-lg">
                      <Card.Body className="p-4">
                        <Row>
                          {/* Column 1: Main Services with Icons */}
                          <Col md={4}>
                            <div className="main-services-list">
                              {servicesData.map((service) => (
                                <div
                                  key={service.id}
                                  className={`service-item ${hoveredService?.id === service.id ? 'active' : ''}`}
                                  onMouseEnter={() => handleServiceHover(service)}
                                >
                                  <div className="service-header">
                                    <span className="service-icon">{service.icon}</span>
                                    <span className="service-name">{service.name}</span>
                                  </div>
                                  {hoveredService?.id === service.id && (
                                    <div className="service-description">
                                      {service.description}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </Col>

                          {/* Columns 2 & 3: Sub-services */}
                          <Col md={8}>
                            <Row>
                              <Col md={6}>
                                <div className="sub-services-column">
                                  {hoveredService?.subServices.slice(0, Math.ceil(hoveredService?.subServices.length / 2)).map((subService, index) => (
                                    <div key={index} className="sub-service-item">
                                      {subService}
                                    </div>
                                  ))}
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="sub-services-column">
                                  {hoveredService?.subServices.slice(Math.ceil(hoveredService?.subServices.length / 2)).map((subService, index) => (
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
                )}
              </div>
              <span className="divider">/</span>

              <Nav.Link href="#">
                Products <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>

              <Nav.Link href="#">
                Digital Marketing <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>

              <Nav.Link href="#">
                Web Hosting <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>

              <Nav.Link href="#">
                Company <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>
            </Nav>
          </Navbar.Collapse>

          {/* Right: My Account + IoApps */}
          <Row className="account-div">
            <Col xs="auto">
              <Button variant="dark" className="accountBtn">
                <PiSignIn /> My Account
              </Button>
            </Col>
            <Col xs="auto">
              <IoApps className="ioApps" />
            </Col>
          </Row>

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
            <h5 className="text">Looking for Your One Stop Solution? </h5>
            <h1 className="text-description">Complete Digital Solutions <br />
              for Your Business</h1>
          </div>
          <ButtonToolbar className="btnToolbar">
            <Button variant="dark" className="bannerBtn1">
              <IoCall className="IoCall" /> Book an intro call
            </Button>
            <Button variant="light" className="bannerBtn2">
              Explore Our Work
            </Button>
          </ButtonToolbar>

          <InputGroup className="inputImg">
            <img src={banner2} alt="" />
            <img src={banner1} alt="" />
          </InputGroup>

          <Row className="align-items-center input-Nav">
            <Col xs="auto">
              <img src={spinning} alt="" />
            </Col>

            <Col>
              <Nav className="banner-btn-parent ">
                <Nav.Link className="banner-btn">Web Application</Nav.Link>
                <Nav.Link className="banner-btn">Mobile Application</Nav.Link>
                <Nav.Link className="banner-btn">Zacta E-Invoicing</Nav.Link>
                <Nav.Link className="banner-btn">Digital Marketing</Nav.Link>
                <Nav.Link className="banner-btn">UI/UX</Nav.Link>
                <Nav.Link className="banner-btn">Tech Consultency</Nav.Link>
              </Nav>
            </Col>

            <Col xs="auto">
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
            </Col>
          </Row>

        </section>

      </header>


      {/* domain purchase section */}
      <section>
        <div className="" style={{
          background: 'linear-gradient(90deg, #D5EBFF, #E4F2FF, #D5EBFF)',
          minHeight: '300px', marginTop: '200px',
        }}>
          {/* icon parent */}
          <div>

            {/* 1st icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">Domain</p>

            </div>
            {/* 2 icon */}
            <div className="">
              <div className=" icon-div " >
                <SiHostinger className="icon" />
              </div>
              <p className="fw-medium">Hosting</p>

            </div>
            {/* 3 icon */}
            <div className="">
              <div className=" icon-div " >
                <GrJs className="icon" />
              </div>
              <p className="fw-medium ">Web Application</p>

            </div>
            {/* 4 icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">Mobile Application</p>

            </div>
            {/* 4 icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">ERP Solution</p>

            </div>
            {/* 5 icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">Digital Marketing</p>

            </div>

            {/* 6 icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">UI/UX</p>

            </div>
            {/* 7 icon */}
            <div className="">
              <div className=" icon-div " >
                <MdDomain className=" icon" />
              </div>
              <p className="fw-medium">Tech Consultency</p>

            </div>


          </div>
        </div>
      </section>

      {/* top products */}
      <section className="top-products">
        <Container>
          {/* text section */}
          <div className="text-div">
            <h1>Our Top Products</h1>
            <p className="product-description">
              We offer a range of high-quality digital products, including PHP
              Laravel frameworks, HTML React JS <br className="d-none d-md-block" />
              front-end templates, and MERN projects, designed to meet the needs
              of modern web development.
            </p>
          </div>

          {/* cards section */}
          <div className="cards-container">
            {/* Card 1 */}
            <div className="card-wrapper">
              <Card className="product-card">
                <div className="card-image-container">
                  <Card.Img variant="top" src={image1} />
                  <div className="version-badge version-bg-color1">Version <span className="span-badge-text">3.2</span></div>
                </div>
                <Card.Body>
                  <Card.Title className="card-title">
                    SignalLab - Forex And Crypto <br /> Trading Signal Platform
                  </Card.Title>
                  <div className="rating">
                    Ratting: <span className="span-tag">5/5</span>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p>
                    Category: <span className="span-tag">Laravel</span>
                  </p>
                  <hr />
                  <p className="price-line">
                    Live Preview: <span className="dollarSize">$49</span>
                  </p>
                </Card.Body>
              </Card>
            </div>

            {/* Card 2 */}
            <div className="card-wrapper">
              <Card className="product-card">
                <div className="card-image-container">
                  <Card.Img variant="top" src={image2} />
                  <div className="version-badge version-bg-color2">Version <span className="span-badge-text">3.1</span></div>
                </div>
                <Card.Body>
                  <Card.Title className="card-title">
                    Xcash - Ultimate Wallet <br /> Solution
                  </Card.Title>
                  <div className="rating">
                    Ratting: <span className="span-tag">5/5</span>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p>
                    Category: <span className="span-tag">Laravel</span>
                  </p>
                  <hr />
                  <p className="price-line">
                    Live Preview: <span className="dollarSize">$149</span>
                  </p>
                </Card.Body>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="card-wrapper">
              <Card className="product-card">
                <div className="card-image-container">
                  <Card.Img variant="top" src={image3} />
                  <div className="version-badge version-bg-color3">Version <span className="span-badge-text">5.6</span></div>
                </div>
                <Card.Body>
                  <Card.Title className="card-title">
                    HYIPLAB - Complete HYIP <br /> Investment System
                  </Card.Title>
                  <div className="rating">
                    Ratting: <span className="span-tag">5/5</span>
                    <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p>
                    Category: <span className="span-tag">Laravel</span>
                  </p>
                  <hr />
                  <p className="price-line">
                    Live Preview: <span className="dollarSize">$199</span>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* sponsored section */}
      <section className="sponsored-section">
        <Container fluid className=" sponsored-container">
          <Row className="sponsored-row">
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored1} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored2} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored3} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored4} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored5} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored6} alt="sponsor" className="img-fluid" />
            </Col>
            <Col xs={4} sm={3} md={2} lg="auto" className="text-center">
              <img src={sponsored7} alt="sponsor" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

    </main>
  )
}

export default App
