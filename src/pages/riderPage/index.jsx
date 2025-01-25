import React from 'react'
import RiderProfileContent from '../../components/RiderProfileContent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet';



export default function RiderPage() {


  return (
    
    <>
     <Helmet>
        <title>Download RideSmash | Ridesmash</title>
        <meta
          name="description"
          content="Manage your rider profile with Ridesmash. View your ride history, update personal information, and access settings."
        />
        <meta name="keywords" content="Rider Profile, Manage Profile, Ridesmash, Ride History" />
        <meta property="og:title" content="Rider Profile | Ridesmash" />
        <meta
          property="og:description"
          content="Access and manage your rider profile with ease. View ride history, update your information, and customize your settings with Ridesmash."
        />
        <meta property="og:url" content="https://ridesmash.com/rider-profile" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rider Profile | Ridesmash" />
        <meta
          name="twitter:description"
          content="Manage your rider profile and access your ride history and settings on Ridesmash."
        />
      </Helmet>

      <Navbar/>
      <RiderProfileContent/>
      <Footer/>

    </>
   
  )
}
