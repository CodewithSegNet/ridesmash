import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import ServicesTitle from '../../components/ServicesTitle'
import Earn from '../../components/Earn'
import EarnDelivery from '../../components/EarnDelivery'
import Footer from "../../components/Footer"
import ServiceRide from '../../components/ServiceRide'
import ServiceDelivery from '../../components/ServiceDelivery'
import ServiceCarRental from '../../components/ServiceCarRental'
import ServiceFood from '../../components/ServiceFood'
import ServiceWise from '../../components/ServiceWise'
import ServiceBusiness from '../../components/ServiceBusiness'
import ServiceAirport from '../../components/serviceAirport'
import { HelmetProvider, Helmet } from 'react-helmet-async';
// import Hero from '../../components/Hero'


const ServicesPage = () => {
  return (
    <>
        <HelmetProvider>
     <Helmet>
        <title>Our Services | Ridesmash</title>
        <meta
          name="description"
          content="Explore a variety of services offered by Ridesmash, including ride-sharing, food delivery, car rentals, business solutions, and more."
        />
        <meta name="keywords" content="Ridesmash Services, Ride-sharing, Food Delivery, Car Rentals, Business Solutions, Airport Rides" />
        <meta property="og:title" content="Our Services | Ridesmash" />
        <meta
          property="og:description"
          content="Discover Ridesmash's wide range of services, from ride-sharing and food delivery to car rentals and business solutions."
        />
        <meta property="og:url" content="https://ridesmash.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services | Ridesmash" />
        <meta
          name="twitter:description"
          content="Explore all the services Ridesmash offers, including convenient ride-sharing, food delivery, and more!"
        />
      </Helmet>

     <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
        <Navbar/>
        <ServicesTitle/>
      </div>
       
        <ServiceRide/>
        <ServiceDelivery/>
        <ServiceCarRental/>
        <ServiceBusiness/>
        <ServiceAirport/>

        
        
        <Footer/>

      </div>
      </HelmetProvider>

    </>
  )
}

export default ServicesPage