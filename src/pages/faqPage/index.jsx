import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
import FaqTitle from '../../components/FaqTitle'
import FaqContent from '../../components/FaqContent'
// import Hero from '../../components/Hero'
import { Helmet } from 'react-helmet';


const FaqPage = () => {
  return (
    <>
    <Helmet>
        <title>FAQ - Frequently Asked Questions | Ridesmash</title>
        <meta
          name="description"
          content="Find answers to common questions about Ridesmash services, including driving opportunities, delivery services, and app features."
        />
        <meta name="keywords" content="FAQ, questions, Ridesmash, help, support, driving services, delivery services" />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Ridesmash" />
        <meta
          property="og:description"
          content="Discover frequently asked questions about Ridesmash's driving and delivery services, app features, and support."
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/faq-page-cover.jpg"
        />
        <meta property="og:url" content="https://ridesmash.com/faq" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | Ridesmash" />
        <meta
          name="twitter:description"
          content="Find answers to common questions about Ridesmash services, including driving opportunities and delivery."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/faq-page-cover.jpg"
        />
      </Helmet>
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