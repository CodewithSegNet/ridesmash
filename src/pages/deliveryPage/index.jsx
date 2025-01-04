import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import DeliveryTitle from '../../components/DeliveryTitle'
import ServiceDelivery from '../../components/ServiceDelivery'
// import Hero from '../../components/Hero'

const DeliveryPage = () => {
  return (
    <>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <DeliveryTitle/>
          
        </div>
        <ServiceDelivery/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default DeliveryPage