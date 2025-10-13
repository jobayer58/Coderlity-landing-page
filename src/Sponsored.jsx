import React from 'react';
import sponsored1 from '../src/assets/iamges/sponsored1.png'
import sponsored2 from '../src/assets/iamges/sponsored2.png'
import sponsored3 from '../src/assets/iamges/sponsored3.png'
import sponsored4 from '../src/assets/iamges/sponsored4.png'
import sponsored5 from '../src/assets/iamges/sponsored5.png'
import sponsored6 from '../src/assets/iamges/sponsored6.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Sponsored.css'
import Marquee from 'react-fast-marquee';

const Sponsored = () => {
  return (
    <section className="sponsored-section">
      <Container fluid className=" sponsored-container">
        <Marquee>
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
          </Row>
        </Marquee>
      </Container>

    </section>
  );
};

export default Sponsored;