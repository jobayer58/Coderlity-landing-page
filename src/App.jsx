import { MdDomain } from "react-icons/md"
import image1 from '../src/assets/iamges/image1.png'
import image2 from '../src/assets/iamges/image2.png'
import image3 from '../src/assets/iamges/image3.png'


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
                <h4>SignalLab - Forex And Crypto <br /> Trading Signal Platform</h4>
                <p>Ratting 5/5</p>
                <p>category: Laravel</p>
                <hr />
                <p>Live Preview:  $49</p>
              </div>
            </div>

            <div className="card1">
              <img src={image2} alt="" />
              <div className="p-3">
                <h4>Xcash - Ultimate Wallet <br /> Solution</h4>
                <p>Ratting 5/5</p>
                <p>category: Laravel</p>
                <hr />
                <p>Live Preview:  $149</p>
              </div>
            </div>

            <div className="card1">
              <img src={image3} alt="" />
              <div className="p-3">
                <h4>HYIPLAB - Complete HYIP <br /> Investment System</h4>
                <p>Ratting 5/5</p>
                <p>category: Laravel</p>
                <hr />
                <p>Live Preview:  $199</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default App
