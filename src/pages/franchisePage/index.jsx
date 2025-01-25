import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FranchiseTitle from '../../components/FranchiseTitle'
import FranchisePartner from '../../components/FranchisePartner'
// import Hero from '../../components/Hero'
import { Helmet } from 'react-helmet';


const FranchisePage = () => {
  return (
    <>
     <Helmet>
        <title>Franchise Opportunities | Ridesmash</title>
        <meta
          name="description"
          content="Discover franchise opportunities with Ridesmash. Learn how you can become a franchise partner and be part of the Ridesmash network."
        />
        <meta name="keywords" content="Franchise, Franchise Opportunities, Ridesmash, Become a Partner" />
        <meta property="og:title" content="Franchise Opportunities | Ridesmash" />
        <meta
          property="og:description"
          content="Join the Ridesmash network as a franchise partner. Explore the benefits and opportunities of owning a franchise with us."
        />
        <meta property="og:image" content="https://ridesmash.com/assets/franchise-opportunity.jpg" />
        <meta property="og:url" content="https://ridesmash.com/franchise-partner" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Franchise Opportunities | Ridesmash" />
        <meta
          name="twitter:description"
          content="Become a part of the Ridesmash network by opening a franchise. Learn more about the benefits and how to get started."
        />
        <meta name="twitter:image" content="https://ridesmash.com/assets/franchise-opportunity.jpg" />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <FranchiseTitle/>
        </div>
        <FranchisePartner/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default FranchisePage