import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FranchiseTitle from '../../components/FranchiseTitle'
import FranchisePartner from '../../components/FranchisePartner'
// import Hero from '../../components/Hero'

const FranchisePage = () => {
  return (
    <>
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