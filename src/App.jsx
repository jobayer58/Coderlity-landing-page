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
import { Button, ButtonGroup, ButtonToolbar, Col, Container, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
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


const productsData = [
  {
    id: 1,
    image: image1,
    title: "SignalLab - Forex And Crypto Trading Signal Platform",
    rating: 5,
    category: "Laravel",
    price: 49,
  },
  {
    id: 2,
    image: image2,
    title: "Xcash - Ultimate Wallet Solution",
    rating: 5,
    category: "Laravel",
    price: 149,
  },
  {
    id: 3,
    image: image3,
    title: "HYIPLAB - Complete HYIP Investment System",
    rating: 5,
    category: "Laravel",
    price: 199,
  },
];


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
              <Row className="message-parent ">
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
        <div className="products-container">
          {/* Text Section */}
          <div className="products-header">
            <h1>Our Top Products</h1>
            <p>
              We offer a range of high-quality digital products, including PHP Laravel frameworks,
              HTML React JS front-end templates, and MERN projects, designed to meet the needs of
              modern web development.
            </p>
          </div>

          {/* Cards Section */}
          <div className="products-grid">
            {productsData.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h4 className="product-title">{product.title}</h4>
                  <div className="product-rating">
                    <span className="rating-text">Rating: </span>
                    <span className="rating-score">{product.rating}/5</span>
                    <div className="stars">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                  <p className="product-category">
                    Category: <span>{product.category}</span>
                  </p>
                  <hr />
                  <p className="product-price">
                    Live Preview: <span>${product.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="" style={{ backgroundColor: '#FAFAFA' }}>
        {/* sponsored section */}
        <section className="py-4 sponsored">
          <div className="py-4" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="d-flex justify-content-around gap-5">
              <img src={sponsored1} alt="sponsor" className="img-fluid" />
              <img src={sponsored2} alt="sponsor" className="img-fluid" />
              <img src={sponsored3} alt="sponsor" className="img-fluid" />
              <img src={sponsored4} alt="sponsor" className="img-fluid" />
              <img src={sponsored5} alt="sponsor" className="img-fluid" />
              <img src={sponsored6} alt="sponsor" className="img-fluid" />
              <img src={sponsored7} alt="sponsor" className="img-fluid" />
            </div>
          </div>
        </section>


      </section>

    </main>
  )
}

export default App
