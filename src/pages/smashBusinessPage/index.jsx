import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SmashwiseTitle from '../../components/SmashwiseTitle'
import Smashwise from '../../components/Smashwise'
import SmashBusinessTitle from '../../components/SmashBusinessTitle'
import ServiceBusiness from '../../components/ServiceBusiness'
import ServiceBusiness2 from '../../components/ServiceBusiness2'
// import Hero from '../../components/Hero'
import { HelmetProvider, Helmet } from 'react-helmet-async';


const SmashBusinessPage = () => {
  return (
    <>
            <HelmetProvider>

     <Helmet>
        <title>Business Solutions | Smash Business</title>
        <meta
          name="description"
          content="Discover the business solutions offered by Smash Business, including consulting, partnerships, and growth strategies tailored to your needs."
        />
        <meta name="keywords" content="Business Solutions, Smash Business, Consulting, Partnerships, Business Growth" />
        <meta property="og:title" content="Business Solutions | Smash Business" />
        <meta
          property="og:description"
          content="Explore Smash Business's services, designed to help businesses grow and thrive with consulting, partnerships, and tailored growth strategies."
        />
        <meta property="og:url" content="https://ridesmash.com/ridesmash-business" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Business Solutions | Smash Business" />
        <meta
          name="twitter:description"
          content="Unlock the potential of your business with Smash Business's tailored solutions, consulting, and partnerships."
        />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <SmashBusinessTitle/>
        </div>
          <ServiceBusiness/>
          <ServiceBusiness2/>
        <Footer/>
      </div>
      
      </HelmetProvider>

    </>
  )
}

export default SmashBusinessPage