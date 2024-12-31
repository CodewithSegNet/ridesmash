import React from 'react'
import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import AboutSubHeader from '../../components/AboutSubHeader'
import AboutTitle from '../../components/AboutTitle'
import AboutVision from '../../components/AboutVision'
import Footer from "../../components/Footer"
import FeaturesAndBenefits from '../../components/FeaturesAndBenefits'
// import Hero from '../../components/Hero'

const AboutUsPage = () => {
  return (
    <>
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
      

    </>
  )
}

export default AboutUsPage