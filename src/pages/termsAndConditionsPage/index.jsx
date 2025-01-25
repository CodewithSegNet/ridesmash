import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FranchisePartner from '../../components/FranchisePartner'
import TermsAndConditionsTitle from '../../components/TermsAndConditionsTitle'
import TermsAndConditions from '../../components/TermsAndConditions'
import { Helmet } from 'react-helmet';
// import Hero from '../../components/Hero'

const TermsAndConditionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Helmet</title>
        <meta
          name="description"
          content="Read the Terms and Conditions of using Helmet services. Understand the legal aspects, rules, and regulations governing your use of our platform."
        />
        <meta name="keywords" content="Terms and conditions, Helmet, legal, user agreement, privacy, policies" />
        <meta property="og:title" content="Terms and Conditions | ridesmash" />
        <meta
          property="og:description"
          content="Review Helmet's terms and conditions outlining our platform's usage rules, user rights, and obligations."
        />
        <meta property="og:url" content="https://ridesmash.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms and Conditions | Ridesmash" />
        <meta
          name="twitter:description"
          content="Discover the terms and conditions of Helmet's platform. Get familiar with the legal agreements before using our services."
        />
      </Helmet>
      <div>
        <div>
          <Navbar/>
          <TermsAndConditionsTitle/>
        </div>
        <TermsAndConditions/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default TermsAndConditionsPage