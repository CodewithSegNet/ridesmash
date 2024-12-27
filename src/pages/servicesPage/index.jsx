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
// import Hero from '../../components/Hero'
const ServicesPage = () => {
  return (
    <>
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
        <ServiceFood/>
        <ServiceAirport/>
        <ServiceBusiness/>
        <ServiceWise/>
        
        
        <Footer/>

      </div>
    </>
  )
}

export default ServicesPage