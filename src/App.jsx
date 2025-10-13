
import Header from "./Header"
import Domain from "./Domain"
import TopProducts from "./TopProducts"
import Sponsored from "./Sponsored"
import Hosting from "./Hosting"
import WebApplication from "./WebApplication"
import MobileApplication from "./MobileApplication"
import CRM from "./CRM"
import DomainBanner from "./DomainBanner"
import Featured from "./Featured"
import DigitalSolution from "./DigitalSolution"

function App() {

  return (
    <main>
      <Header></Header>
      <DomainBanner></DomainBanner>
      {/* <Domain></Domain> */}
      {/* <Hosting></Hosting> */}
      {/* <WebApplication></WebApplication> */}
      {/* <MobileApplication></MobileApplication> */}
      {/* <CRM></CRM> */}
      <TopProducts></TopProducts>
      <Sponsored></Sponsored>
      <Featured></Featured>
      <DigitalSolution></DigitalSolution>
    </main>
  )
}

export default App
