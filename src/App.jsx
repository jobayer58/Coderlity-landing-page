
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
import FAQ from "./FAQ"
import Footer from "./Footer"
import WorkProcess from "./WorkProcess"
import ProcessTimeline from "./ProcessTimeline"
import OurBlog from "./OurBlog"
import MeetTeam from "./MeetTeam"

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
      <ProcessTimeline></ProcessTimeline>
      <WorkProcess></WorkProcess>
      <FAQ></FAQ>
      <OurBlog></OurBlog>
      <MeetTeam></MeetTeam>
      <Footer></Footer>
    </main>
  )
}

export default App
