import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import ServiceCarRental from '../../components/ServiceCarRental'
// import Hero from '../../components/Hero'
import { Helmet } from 'react-helmet';


const RentalPage = () => {
  return (
    <>
    <Helmet>
        <title>Car Rentals | Ridesmash</title>
        <meta
          name="description"
          content="Explore our wide range of car rental services at Ridesmash. Find the perfect car for your needs and enjoy flexible rental options."
        />
        <meta name="keywords" content="Car Rentals, Rent a Car, Car Rental Services, Ridesmash Car Rentals" />
        <meta property="og:title" content="Car Rentals | Ridesmash" />
        <meta
          property="og:description"
          content="Rent a car at Ridesmash and enjoy a range of vehicles tailored for your needs. Affordable and reliable car rentals at your convenience."
        />
        <meta property="og:url" content="https://ridesmash.com/car-rentals" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Car Rentals | Ridesmash" />
        <meta
          name="twitter:description"
          content="Rent a car at Ridesmash and enjoy flexible rental options with competitive pricing."
        />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <RentalTitle/>
        </div>
         <ServiceCarRental/>
         <Footer/>
      </div>
      

    </>
  )
}

export default RentalPage