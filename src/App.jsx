import { MdDomain } from "react-icons/md"
import image1 from '../src/assets/iamges/image1.png'
import image2 from '../src/assets/iamges/image2.png'
import image3 from '../src/assets/iamges/image3.png'
import { FaStar } from "react-icons/fa"


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
        <div className="div-parent ">
          {/* text */}
          <div className="text-center py-5">
            <h1>Our Top Products</h1>
            <p className="font-color">We offer a range of high-quality digital products, including PHP Laravel frameworks, HTML React JS <br /> front-end templates, and MERN projects, designed to meet the needs of modern web development.</p>
          </div>
          {/* image card 1 */}
          <div className=" d-flex gap-4 card-div">
            <div className="card1">
              <img src={image1} alt="" />
              <div className="p-3 ">
                <h4 className="fw-bold">SignalLab - Forex And Crypto <br /> Trading Signal Platform</h4>
                <p className="d-flex align-items-center gap-2">Ratting 5/5 <div className="d-flex">
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                </div></p>
                <p>category: <span className="fw-bold">Laravel</span></p>
                <hr />
                <p className="d-flex justify-content-between align-items-center liveText">Live Preview:  <span className="dollarSize">$49</span></p>
              </div>
            </div>

            <div className="card1">
              <img src={image2} alt="" />
              <div className="p-3">
                <h4 className="fw-bold">Xcash - Ultimate Wallet <br /> Solution</h4>
                <p className="d-flex align-items-center gap-2">Ratting 5/5 <div className="d-flex">
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                </div></p>
                <p>category: <span className="fw-bold">Laravel</span></p>
                <hr />
                <p className="d-flex justify-content-between align-items-center liveText">Live Preview:  <span className="dollarSize">$149</span></p>
              </div>
            </div>

            <div className="card1">
              <img src={image3} alt="" />
              <div className="p-3">
                <h4 className="fw-bold">HYIPLAB - Complete HYIP <br /> Investment System</h4>
                <p className="d-flex align-items-center gap-2">Ratting 5/5 <div className="d-flex">
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                  <FaStar color="#FFAE00" />
                </div></p>
                <p>category: <span className="fw-bold">Laravel</span></p>
                <hr />
                <p className="d-flex justify-content-between align-items-center liveText">Live Preview:  <span className="dollarSize ">$199</span></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default App
