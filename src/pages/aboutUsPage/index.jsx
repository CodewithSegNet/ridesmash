import React from 'react'
import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import AboutSubHeader from '../../components/AboutSubHeader'
import AboutTitle from '../../components/AboutTitle'
import AboutVision from '../../components/AboutVision'
import Footer from "../../components/Footer"
import { HelmetProvider, Helmet } from 'react-helmet-async';
import FeaturesAndBenefits from '../../components/FeaturesAndBenefits'
// import Hero from '../../components/Hero'

const AboutUsPage = () => {
  return (
    <>
    <HelmetProvider>

     <Helmet>
        <title>About Us | Ridesmash</title>
        <meta
          name="description"
          content="Learn more about Ridesmash's mission and vision in transforming transportation with top-notch ride-hailing, delivery services, fleet management, car rentals, and airport pickups."
        />
        <meta
          name="keywords"
          content="ride-hailing services, delivery services, fleet management, car rental, airport pickup, transportation solutions, Ridesmash vision"
        />
        <meta property="og:title" content="About Us | Ridesmash" />
        <meta
          property="og:description"
          content="Discover how Ridesmash is revolutionizing the transportation industry with innovative solutions like ride-hailing, delivery, fleet management, car rentals, and airport pickups."
        />
        <meta property="og:url" content="https://ridesmash.com/about-us" />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/illus0.svg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Ridesmash" />
        <meta
          name="twitter:description"
          content="Learn about our mission to redefine transportation with top-notch services, including ride-hailing, delivery, and fleet management."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/illus0.svg"
        />
      </Helmet>


      <div>
        <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
          <Navbar/>
          <AboutTitle/>
        </div>
       
        <AboutSubHeader/>
        <FeaturesAndBenefits/>
        <AboutVision/>

        <Footer/>
      </div>
      
      </HelmetProvider>

    </>
  )
}

export default AboutUsPage