import { MdDomain, MdKeyboardArrowDown } from "react-icons/md"
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
// import { Navbar } from "react-bootstrap"
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

function App() {

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
            <Nav className=" nav-li">
              <Nav.Link href="#">
                Home <MdKeyboardArrowDown />
              </Nav.Link>
              <span className="divider">/</span>

              <Nav.Link href="#">
                Services <MdKeyboardArrowDown />
              </Nav.Link>
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
