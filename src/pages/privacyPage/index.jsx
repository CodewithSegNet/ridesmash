import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import TermsAndConditions from '../../components/TermsAndConditions'
import PrivacyTitle from '../../components/PrivacyTitle'
import PrivacyContent from '../../components/PrivacyContent'
import { Helmet } from 'react-helmet';


const PrivacyPage = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy | Ridesmash</title>
        <meta
          name="description"
          content="Read Ridesmash's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <meta name="keywords" content="Privacy Policy, Ridesmash, Data Protection, User Privacy" />
        <meta property="og:title" content="Privacy Policy | Ridesmash" />
        <meta
          property="og:description"
          content="Learn about how Ridesmash collects, uses, and protects your personal information in our privacy policy."
        />
        <meta property="og:url" content="https://ridesmash.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Ridesmash" />
        <meta
          name="twitter:description"
          content="Learn about how Ridesmash collects, uses, and protects your personal information."
        />
      </Helmet>
      <div>
        <div>
          <Navbar/>
          <PrivacyTitle/>
        </div>
        <PrivacyContent/>  
        <Footer/>
      </div>
      

    </>
  )
}

export default PrivacyPage