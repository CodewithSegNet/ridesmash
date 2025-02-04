import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import AirportTitle from '../../components/AirportTitle'
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ServiceAirport from '../../components/serviceAirport'
// import Hero from '../../components/Hero'

const AirportPage = () => {
  return (
    <>
    <HelmetProvider> 


    <Helmet>
        <title>Airport Pickup Services | Ridesmash</title>
        <meta
          name="description"
          content="Experience seamless airport pickup services with Ridesmash. Enjoy reliable, comfortable, and on-time transportation to and from the airport."
        />
        <meta
          name="keywords"
          content="airport pickup, airport transfer, reliable transportation, Ridesmash airport services, airport ride, seamless travel"
        />
        <meta property="og:title" content="Airport Pickup Services | Ridesmash" />
        <meta
          property="og:description"
          content="Ridesmash provides efficient and comfortable airport pickup services, ensuring a stress-free travel experience."
        />
        <meta property="og:url" content="https://ridesmash.com/airport-pickup" />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/illus1.svg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airport Pickup Services | Ridesmash" />
        <meta
          name="twitter:description"
          content="Travel stress-free with Ridesmash's reliable airport pickup services. Book your ride today!"
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/illus1.svg"
        />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <AirportTitle/>
        </div>
          <ServiceAirport/>
          <Footer/>
      </div>
      
      </HelmetProvider>

    </>
  )
}

export default AirportPage