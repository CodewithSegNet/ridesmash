import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SafetyTitle from '../../components/SafetyTitle'
import SafetyContentTop from '../../components/SafetyContentTop'
import SafetyContentMiddle from '../../components/SafetyContentMiddle'
// import Hero from '../../components/Hero'

const SafetyPage = () => {
  return (
    <>
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