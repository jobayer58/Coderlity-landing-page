
import Header from "./Header"
import Domain from "./Domain"
import TopProducts from "./TopProducts"
import Sponsored from "./Sponsored"
import Hosting from "./Hosting"
import WebApplication from "./WebApplication"
import MobileApplication from "./MobileApplication"

function App() {

  return (
    <main>
      <Header></Header>
      {/* <Domain></Domain> */}
      {/* <Hosting></Hosting> */}
      {/* <WebApplication></WebApplication> */}
      <MobileApplication></MobileApplication>
      <TopProducts></TopProducts>
      <Sponsored></Sponsored>
    </main>
  )
}

export default App
