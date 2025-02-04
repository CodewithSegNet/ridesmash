import Location from "../../components/Location"
import Navbar from '../../components/Navbar'
import LocationTitle from '../../components/LocationTitle'
import Footer from "../../components/Footer"
import { HelmetProvider, Helmet } from 'react-helmet-async';





const LocationPage = () => {
  return (
    <>
        <HelmetProvider>
     <Helmet>
        <title>Our Locations | Ridesmash</title>
        <meta
          name="description"
          content="Find out where Ridesmash is currently located and discover the services available at our various locations."
        />
        <meta name="keywords" content="Ridesmash Locations, Service Locations, Ridesmash Offices" />
        <meta property="og:title" content="Our Locations | Ridesmash" />
        <meta
          property="og:description"
          content="Looking for Ridesmash's current locations? Explore our offices and service centers in your area."
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/location-map.jpg"
        />
        <meta property="og:url" content="https://ridesmash.com/location" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Locations | Ridesmash" />
        <meta
          name="twitter:description"
          content="Explore Ridesmash's current locations and learn more about the services available in your area."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/location-map.jpg"
        />
      </Helmet>
     <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <LocationTitle/>
        </div>
    <Location/>
    <Footer/>

    </div>
    </HelmetProvider>

    </>
  )
}

export default LocationPage