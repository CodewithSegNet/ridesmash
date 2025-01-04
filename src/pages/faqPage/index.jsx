import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
import FaqTitle from '../../components/FaqTitle'
import FaqContent from '../../components/FaqContent'
// import Hero from '../../components/Hero'

const FaqPage = () => {
  return (
    <>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <FaqTitle/>
        </div>
        <FaqContent/>
        <Footer/>
      </div>
      

    </>
  )
}

export default FaqPage