import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import GetApp from "../../components/GetApp"
import BookingDrive from '../../components/BookingDrive'
import BookingTitle from '../../components/BookingTitle'
import Footer from "../../components/Footer"

const BookingPage = () => {

  return (
    <>
    <div className="">
    <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>      
      <Navbar/>
      <BookingTitle/>
    </div>
      
    <GetApp/>
    <Footer/>

    </div>
  </>
  )
}

export default BookingPage