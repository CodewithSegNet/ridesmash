import Earn from "../../components/Earn"
import EarnDelivery from "../../components/EarnDelivery"
import Features from "../../components/Features"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import OurServices from "../../components/OurServices"
import Socials from "../../components/Socials"
import {useEffect, useState} from 'react'
import axios from 'axios'
import ServiceOption from "../../components/serviceOption"
import AboutBackGround from "../../components/AboutBackground"
import { HelmetProvider, Helmet } from 'react-helmet-async';
import GetApp from "../../components/GetApp"
import GetDriverApp from "../../components/GetDriverApp"
import Card from "../../components/Card"
import WhyChooseUs from "../../components/WhyChooseus"
import BlogContent from "../../components/blogContent"
import FaqView from "../../components/faqView";
import backgroundImage from '../../assets/hero.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const HomePage = () => {

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
// console.log(data)

//   useEffect(() => {
//     fetch('https://extreme-ip-lookup.com/json/')
//     .then( res => res.json())
//     .then(response => {
//      console.log("Country is : ", response);
//    })
//    .catch((data, status) => {
//      console.log('Request failed:', data);
//    });
//  },[])

const HeroImg = {
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 92, 186, 0.3)), url(${backgroundImage})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center 30%', 
  backgroundRepeat: 'no-repeat',
  height: '500px', 
  width: '100%', 
};


const keywords = [
  "ride-hailing services",
  "delivery services",
  "fleet management",
  "car rental",
  "airport pickup",
].join(", ");


  return (
    <>
        <HelmetProvider>
        <Helmet>
        <title>Ridesmash | Ride-Hailing, Car Rentals, Delivery Services</title>
        <meta
          name="description"
          content="Discover top trending services including e-hailing, delivery, fleet management, car rental, and airport pickup. Book now and experience seamless transportation solutions."
        />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Ridesmash Inc." />
        <meta
          property="og:title"
          content="Ridesmash | Ride-Hailing, Car Rentals, Delivery Services"
        />
        <meta
          property="og:description"
          content="Discover top trending services including e-hailing, delivery, fleet management, car rental, and airport pickup. Book now and experience seamless transportation solutions."
        />
        <meta property="og:url" content="https://ridesmash.com" />
        <meta property="og:image" content="https://ridesmash.com/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ridesmash | Ride-Hailing, Car Rentals, Delivery Services"
        />
        <meta
          name="twitter:description"
          content="Discover top trending services including e-hailing, delivery, fleet management, car rental, and airport pickup. Book now and experience seamless transportation solutions."
        />
        <meta name="twitter:image" content="https://ridesmash.com/logo.svg" />
        <link rel="canonical" href="https://ridesmash.com" />
      </Helmet>
      
      <div style={HeroImg} className="flex w-full min-h-[680px] relative flex-col">
        <Navbar/>
        {/*<AboutBackGround/>*/}
        <LazyLoadImage
        src={backgroundImage}
        alt="move wherever, whenever"
        style={{
          ...HeroImg, 
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
        }}
      />
        <Hero/> 
      </div>
        <OurServices/>
        <GetApp/>
        {/* <Features/> */}
        <ServiceOption />
        <Card />
        <WhyChooseUs/>
        
        <Earn currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
        <EarnDelivery currency = {countryInfo.countryCurrency} country = {countryInfo.countryName}/>
         {/* <GetApp/> */}
        <GetDriverApp/>

{/*        
        <BlogContent/> */}
        {/* <FaqView/> */}
       
        <Footer/>
        </HelmetProvider>

       
    </>
  )
}

export default HomePage