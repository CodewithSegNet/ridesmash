import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FoodTitle from '../../components/FoodTitle'
import ServiceFood from '../../components/ServiceFood'
import PressContentTop from '../../components/PressContentTop'
import PressTitle from '../../components/PressTitle'
import PressContentMiddle from '../../components/PressContentMiddle'
import PressContentBottom from '../../components/PressContentBottom'
import GetDriverApp from '../../components/GetDriverApp'
// import Hero from '../../components/Hero'
import { Helmet } from 'react-helmet';


const PressReleasePage = () => {
  return (
    <>
     <Helmet>
        <title>Press Release | Ridesmash</title>
        <meta
          name="description"
          content="Latest press releases, updates, and news from Ridesmash. Stay informed about our latest developments and press coverage."
        />
        <meta name="keywords" content="Press Release, Ridesmash, News, Updates, Ridesmash press" />
        <meta property="og:title" content="Press Release | Ridesmash" />
        <meta
          property="og:description"
          content="Stay up-to-date with Ridesmash's press releases, updates, and news."
        />
        <meta property="og:url" content="https://ridesmash.com/press-release" />
        <meta property="og:image" content="https://ridesmash.com/assets/press-release-banner.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Press Release | Ridesmash" />
        <meta
          name="twitter:description"
          content="Stay updated with Ridesmash's latest press releases and news."
        />
        <meta name="twitter:image" content="https://ridesmash.com/assets/press-release-banner.webp" />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <PressTitle/>
        </div>
        <PressContentTop/>
        <PressContentMiddle/>
        <PressContentBottom/>
        <GetDriverApp/>
       
        <Footer/>
      </div>
      

    </>
  )
}

export default PressReleasePage