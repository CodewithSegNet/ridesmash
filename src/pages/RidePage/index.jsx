import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
// import Hero from '../../components/Hero'
import { HelmetProvider, Helmet } from 'react-helmet-async';


const RidePage = () => {
  return (
    <>
        <HelmetProvider>
    <Helmet>
        <title>Ride Services | Ridesmash</title>
        <meta
          name="description"
          content="Get quick and reliable ride services with Ridesmash. Book your ride now and enjoy seamless transportation at affordable rates."
        />
        <meta name="keywords" content="Ride Services, Book a Ride, Ride Service, Affordable Transportation" />
        <meta property="og:title" content="Ride Services | Ridesmash" />
        <meta
          property="og:description"
          content="Explore our ride services and get to your destination quickly and affordably with Ridesmash. Book your ride today!"
        />
        <meta property="og:url" content="https://ridesmash.com/ride-hailings" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ride Services | Ridesmash" />
        <meta
          name="twitter:description"
          content="Reliable ride services with flexible options. Book your ride now with Ridesmash."
        />
      </Helmet>

      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>          <Navbar/>
          <RideTitle/>
          
        </div>
        <ServiceRide/>
       
        <Footer/>
      </div>
      
</HelmetProvider>

    </>
  )
}

export default RidePage