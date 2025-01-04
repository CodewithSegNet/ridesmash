import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import ServiceCarRental from '../../components/ServiceCarRental'
// import Hero from '../../components/Hero'

const RentalPage = () => {
  return (
    <>
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