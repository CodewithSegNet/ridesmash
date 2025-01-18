import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import RideTitle from '../../components/RideTitle'
import DeliveryTitle from '../../components/DeliveryTitle'
import ServiceDelivery from '../../components/ServiceDelivery'
import { Helmet } from 'react-helmet';

// import Hero from '../../components/Hero'

const DeliveryPage = () => {
  return (
    <>
       <Helmet>
        <title>Delivery Services | Ridesmash</title>
        <meta
          name="description"
          content="Fast and reliable delivery services with Ridesmash. Get your packages delivered efficiently and on time."
        />
        <meta
          name="keywords"
          content="delivery services, Ridesmash delivery, package delivery, reliable courier, on-demand delivery"
        />
        <meta property="og:title" content="Delivery Services | Ridesmash" />
        <meta
          property="og:description"
          content="Choose Ridesmash for seamless delivery services. Reliable and fast delivery for all your needs."
        />
        <meta property="og:url" content="https://ridesmash.com/delivery" />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/illus2.svg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Delivery Services | Ridesmash" />
        <meta
          name="twitter:description"
          content="Need to deliver a package? Ridesmash provides efficient and trustworthy delivery services."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/illus2.svg"
        />
      </Helmet>
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