import Location from "../../components/Location"
import Navbar from '../../components/Navbar'
import LocationTitle from '../../components/LocationTitle'
import Footer from "../../components/Footer"




const LocationPage = () => {
  return (
    <>
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
    </>
  )
}

export default LocationPage