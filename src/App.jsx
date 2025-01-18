import { useState, useContext,useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import HomePage from './pages/homePage'
import ScrollToTop from './components/ScrollToTop'
import ServicesPage from './pages/servicesPage';
import AboutUsPage from './pages/aboutUsPage';
import ContactUsPage from './pages/contactUsPage';
import LoginPage from './pages/loginPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import RiderPage from './pages/riderPage';
import BookingPage from './pages/BookingPage';
import SupportPage from './pages/supportPage';
import DriveAndEarn from './pages/driveAndEarn';
import RidesmashAfricaPage from './pages/africaPage';

import smash from "./assets/videos/ridesmash.mp4"
import SmashFoodPage from './pages/smashFoodPage';
import SmashwisePage from './pages/smashwisePage';
import FleetPage from './pages/fleetPage';
import FranchisePage from './pages/franchisePage';
import RidePage from './pages/RidePage';
import DeliveryPage from './pages/deliveryPage';
import RentalPage from './pages/rentalPage';
import LocationPage from './pages/locationPage';
import AirportPage from './pages/airportPage';
import SmashBusinessPage from './pages/smashBusinessPage';
import SafetyPage from './pages/safetyPage';
import PressReleasePage from './pages/PressReleasePage';
import BlogPage from './pages/blogPage';
import FaqPage from './pages/faqPage';
import PrivacyPage from './pages/privacyPage';
import TermsAndConditionsPage from './pages/termsAndConditionsPage';
import BlogSingle from './pages/blogSinglePage';
import ScrollToTopButton from './components/ScrollToTopButton';
import HirePurchasePage from './pages/HirePurchase';


function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({children}) => {

    return currentUser ? children : <Navigate to="/home"/>

  }

  const [count, setCount] = useState(0)

  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
        // Wait for 3 seconds
        setTimeout(() => {

            setIsLoading(false);

        }, 5000);

  }, []);



  return (
    <div>
        <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/">
            <Route path='/' index 
            element={

              
        
                isLoading 
        
                ?
        
               <div className='flex items-center justify-center h-screen w-full'>
                    <video className="h-[300px] w-[300px] rounded-lg" autoPlay >
                      <source src={smash} type="video/mp4" />
                    </video>
               </div>
        
                :

              <HomePage user={currentUser}/>
            

            }
            
            />
            <Route path="services" element={<ServicesPage/>}/>
            <Route path="about-us" element={<AboutUsPage/>}/>
            <Route path="drive-and-earn" element={<DriveAndEarn/>}/>
            <Route path="contact-us" element={<ContactUsPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
            <Route path="booking" element={<BookingPage/>}/>
            <Route path="support" element={<SupportPage/>}/>
            <Route path="food" element={<SmashFoodPage/>}/>
            <Route path="ride-hailing" element={<RidePage/>}/>
            <Route path="delivery" element={<DeliveryPage/>}/>
            <Route path="location" element={<LocationPage/>}/>
            <Route path="Ridesmash-africa" element={<RidesmashAfricaPage />} />


            <Route path="car-rentals" element={<RentalPage/>}/>
            <Route path="airport-pickup" element={<AirportPage/>}/>
            <Route path="ridesmash-business" element={<SmashBusinessPage/>}/>
            <Route path="safety" element={<SafetyPage/>}/>
            <Route path="press-release" element={<PressReleasePage/>}/>
            
            <Route path="faq" element={<FaqPage/>}/>
            <Route path="smashwise" element={<SmashwisePage/>}/>
            <Route path="fleet-management" element={<FleetPage/>}/>
            <Route path="franchise-partner" element={<FranchisePage/>}/>
            <Route path="privacy" element={<PrivacyPage/>}/>
            <Route path="terms-and-conditions" element={<TermsAndConditionsPage/>}/>
            <Route path="hire-purchase" element={<HirePurchasePage/>}/>


            <Route  path="blog" element={<BlogPage/>}/>
             

            <Route element={
              <RequireAuth>
                  {/* <RiderPage user={currentUser}/> */}
                  <Route path="rider-profile" element={<RiderPage user={currentUser}/>}/>
              </RequireAuth>
            } />

          </Route>
        </Routes>
        {!isLoading && <ScrollToTopButton />}
        </BrowserRouter>
      
      {/* } */}
     

    </div>
  )
}

export default App
