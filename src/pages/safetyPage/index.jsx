import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SafetyTitle from '../../components/SafetyTitle'
import SafetyContentTop from '../../components/SafetyContentTop'
import SafetyContentMiddle from '../../components/SafetyContentMiddle'
// import Hero from '../../components/Hero'
import { Helmet } from 'react-helmet';


const SafetyPage = () => {
  return (
    <>
    <Helmet>
        <title>Safety | Ridesmash</title>
        <meta
          name="description"
          content="Learn about Ridesmash's commitment to rider and driver safety. Discover our safety measures, guidelines, and tips to ensure a safe and secure ride."
        />
        <meta name="keywords" content="Ridesmash Safety, Rider Safety, Driver Safety, Safe Ride Guidelines" />
        <meta property="og:title" content="Safety | Ridesmash" />
        <meta
          property="og:description"
          content="Explore Ridesmash's safety policies, guidelines, and tips to ensure a safe experience for both riders and drivers."
        />
        <meta property="og:url" content="https://ridesmash.com/safety" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Safety | Ridesmash" />
        <meta
          name="twitter:description"
          content="Stay informed with Ridesmash's safety measures and guidelines to ensure your safety during every ride."
        />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>   
            <Navbar/>
          <SafetyTitle/>
        </div>
        <SafetyContentTop/>
        <SafetyContentMiddle/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default SafetyPage