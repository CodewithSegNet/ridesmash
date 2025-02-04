import Socials from '../../components/Socials'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import DriveEarnTitle from '../../components/driveEarnTitle'
import Footer from "../../components/Footer"
import DriveAndEarnRide from '../../components/DriveAndEarnRide'
import DriveEarnDelivery from '../../components/DriveEarnDelivery'
import GetDriverApp from '../../components/GetDriverApp'
import DriveMore from '../../components/DriveMore'
import EarnAsYouGo from '../../components/EarnAsYouGo'
import BusinessOpportunities from '../../components/BusinessOpportunities'
import BecomeDriver from '../../components/BecomeDriver'
import BecomeDriverMore from '../../components/BecomeDriverMore'
import AcceptedVehicle from '../../components/AcceptedVehicle'
import { HelmetProvider, Helmet } from 'react-helmet-async';


const DriveAndEarn = () => {

  const [countryInfo, setCountryInfo] = useState({countryName : '', countryCode : '', countryCurrency : ''})
// const [data, setData] = useState({})

const getGeoInfo = () => {
  axios.get('https://ipapi.co/json/').then((response) => {

      // setData(response.data)
      let data = response.data;
      setCountryInfo({
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          countryCurrency: data.currency
      });
  }).catch((error) => {
      // console.log(error);
  });
};

useEffect(() => {
  getGeoInfo()
}, [])

// console.log(countryInfo.countryName)
// console.log(countryInfo.countryCode)
// console.log(countryInfo.countryCurrency)

  return (
    <>
    <HelmetProvider>

     <Helmet>
        <title>Drive and Earn with Ridesmash</title>
        <meta
          name="description"
          content="Drive and earn with Ridesmash! Discover driving opportunities, earn as you go, and explore business opportunities in your region."
        />
        <meta
          name="keywords"
          content="drive and earn, driving opportunities, business opportunities, Ridesmash drivers, accepted vehicles"
        />
        <meta property="og:title" content="Drive and Earn with Ridesmash" />
        <meta
          property="og:description"
          content="Join Ridesmash to drive and earn in your region. Learn about accepted vehicles, business opportunities, and more!"
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/illus3.svg"
        />
        <meta property="og:url" content="https://ridesmash.com/drive-and-earn" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drive and Earn with Ridesmash" />
        <meta
          name="twitter:description"
          content="Drive and earn on your terms with Ridesmash! Discover flexible opportunities to grow your income."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/illus3.svg"
        />
      </Helmet>
    <div className="">

    <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
        <Navbar/>
        <DriveEarnTitle/>
      </div>
      
      <DriveAndEarnRide  currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
      <BecomeDriver/>
      <BecomeDriverMore/>
      <AcceptedVehicle/>
      <DriveMore/>
      <EarnAsYouGo/>
      <BusinessOpportunities/>
      <GetDriverApp/>
      <DriveEarnDelivery  currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
      <Footer/>
    </div>

    </div>
    </HelmetProvider>

  </>
  )
}

export default DriveAndEarn