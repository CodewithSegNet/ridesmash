import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import GetApp from "../../components/GetApp"
import BookingDrive from '../../components/BookingDrive'
import BookingTitle from '../../components/BookingTitle'
import Footer from "../../components/Footer"
import { HelmetProvider, Helmet } from 'react-helmet-async';


const BookingPage = () => {

  return (
    <>
    <HelmetProvider>


    <Helmet>
        <title>Book Your Ride | Ridesmash</title>
        <meta
          name="description"
          content="Book your next ride with Ridesmash for a seamless and comfortable experience. Fast, reliable, and affordable transport services tailored to your needs."
        />
        <meta
          name="keywords"
          content="ride booking, transportation, Ridesmash, car rentals, seamless booking, travel planning"
        />
        <meta property="og:title" content="Book Your Ride | Ridesmash" />
        <meta
          property="og:description"
          content="Plan your travel effortlessly with Ridesmash's reliable and affordable booking services."
        />
        <meta property="og:url" content="https://ridesmash.com/booking" />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/booking-cover.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Your Ride | Ridesmash" />
        <meta
          name="twitter:description"
          content="Fast and reliable booking services for your next ride. Choose Ridesmash!"
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/booking-cover.jpg"
        />
      </Helmet>
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
    </HelmetProvider>

  </>
  )
}

export default BookingPage