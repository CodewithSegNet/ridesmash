import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SupportContent from "../../components/SupportContent"
import SupportTitle from '../../components/supportTitle'

const SupportPage = () => {

  return (
    <>
    <div>
    <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>      <Navbar/>
      <SupportTitle/>
      </div>  
      <SupportContent/>
      
      <Footer/>
    </div>
  </>
  )
}

export default SupportPage