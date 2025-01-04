import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import RentalTitle from '../../components/RentalTitle'
import AirportTitle from '../../components/AirportTitle'
import ServiceAirport from '../../components/serviceAirport'
// import Hero from '../../components/Hero'

const AirportPage = () => {
  return (
    <>
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
      

    </>
  )
}

export default AirportPage