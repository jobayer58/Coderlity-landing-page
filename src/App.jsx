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
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { PiSignIn } from "react-icons/pi"
import { IoApps } from "react-icons/io5"


function App() {

  return (
    <main>
      <header className="headerBg">
        <Navbar expand="lg" variant="light">

          {/* Left: Logo */}
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Center: Nav Links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className=" nav-div">
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
      </header>


      {/* domain purchase section */}
      <section>
        <div className="" style={{
          background: 'linear-gradient(90deg, #D5EBFF, #E4F2FF, #D5EBFF)',
          minHeight: '300px',
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
      <section>
        <div className="products">
          {/* text */}
          <div className="text-center py-5">
            <h1>Our Top Products</h1>
            <p style={{ color: '#555555' }}>
              We offer a range of high-quality digital products, including PHP Laravel frameworks, HTML React JS <br className="d-none d-md-block" />
              front-end templates, and MERN projects, designed to meet the needs of modern web development.
            </p>
          </div>

          {/* image cards */}
          <div className="d-flex justify-content-center flex-wrap gap-3 px-2 ">
            {/* card 1 */}
            <div className="card1" style={{ maxWidth: '366px' }}>
              <img src={image1} alt="" className="w-100" />
              <div className="p-3">
                <h4 className="fw-bold lh-base">
                  SignalLab - Forex And Crypto <br className="d-none d-md-block" /> Trading Signal Platform
                </h4>
                <div className="d-flex align-items-center gap-2 mb-1">
                  Ratting: <span className="fw-bold">5/5</span>
                  <div className="d-flex">
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                  </div>
                </div>
                <p >
                  Category: <span className="fw-bold">Laravel</span>
                </p>
                <hr className="my-1" />
                <p className="d-flex justify-content-between align-items-center" style={{ color: '#FF946A' }}>
                  Live Preview: <span className="dollarSize">$49</span>
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="card1" style={{ maxWidth: '366px' }}>
              <img src={image2} alt="" className="w-100" />
              <div className="p-3">
                <h4 className="fw-bold lh-base">
                  Xcash - Ultimate Wallet <br /> Solution
                </h4>
                <div className="d-flex align-items-center gap-2 mb-1">
                  Ratting: <span className="fw-bold">5/5</span>
                  <div className="d-flex">
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                  </div>
                </div>
                <p >
                  Category: <span className="fw-bold">Laravel</span>
                </p>
                <hr className="my-1" />
                <p className="d-flex justify-content-between align-items-center" style={{ color: '#FF946A' }}>
                  Live Preview: <span className="dollarSize">$149</span>
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="card1" style={{ maxWidth: '366px' }}>
              <img src={image3} alt="" className="w-100" />
              <div className="p-3">
                <h4 className="fw-bold lh-base">
                  HYIPLAB - Complete HYIP <br /> Investment System
                </h4>
                <div className="d-flex align-items-center gap-2 mb-1">
                  Ratting: <span className="fw-bold">5/5</span>
                  <div className="d-flex">
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                    <FaStar color="#FFAE00" />
                  </div>
                </div>
                <p>
                  Category: <span className="fw-bold">Laravel</span>
                </p>
                <hr className="my-1" />
                <p className="d-flex justify-content-between align-items-center" style={{ color: '#FF946A' }}>
                  Live Preview: <span className="dollarSize">$199</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="" style={{ backgroundColor: '#FAFAFA' }}>
        {/* sponsored section */}
        <section className="py-4">
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
