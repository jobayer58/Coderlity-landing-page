import { MdDomain } from "react-icons/md"
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
import Marquee from "react-fast-marquee"


function App() {

  return (
    <main>
      {/* domain purchase section */}
      {/* <section>
        <div className="" style={{ backgroundColor: '#E6F3FF' }}>
          <div className=" icon-div " >
            <MdDomain className=" icon" />

          </div>

        </div>
      </section> */}

      {/* top products */}
      <section>
        <div className="div-parent">
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
            <Marquee pauseOnHover={false} gradient={false} speed={50}>
              <div className="d-flex align-items-center gap-5">
                <img src={sponsored1} alt="sponsor" className="img-fluid" />
                <img src={sponsored2} alt="sponsor" className="img-fluid" />
                <img src={sponsored3} alt="sponsor" className="img-fluid" />
                <img src={sponsored4} alt="sponsor" className="img-fluid" />
                <img src={sponsored5} alt="sponsor" className="img-fluid" />
                <img src={sponsored6} alt="sponsor" className="img-fluid" />
                <img src={sponsored7} alt="sponsor" className="img-fluid" />
                <img src={sponsored3} alt="sponsor" className="img-fluid" />

              </div>
            </Marquee>
          </div>
        </section>


      </section>

    </main>
  )
}

export default App
