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
      console.log(error);
  });
};

useEffect(() => {
  getGeoInfo()
}, [])

console.log(countryInfo.countryName)
console.log(countryInfo.countryCode)
console.log(countryInfo.countryCurrency)

  return (
    <>
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
  </>
  )
}

export default DriveAndEarn