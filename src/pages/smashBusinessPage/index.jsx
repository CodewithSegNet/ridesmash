import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SmashwiseTitle from '../../components/SmashwiseTitle'
import Smashwise from '../../components/Smashwise'
import SmashBusinessTitle from '../../components/SmashBusinessTitle'
import ServiceBusiness from '../../components/ServiceBusiness'
import ServiceBusiness2 from '../../components/ServiceBusiness2'
// import Hero from '../../components/Hero'

const SmashBusinessPage = () => {
  return (
    <>
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
      

    </>
  )
}

export default SmashBusinessPage