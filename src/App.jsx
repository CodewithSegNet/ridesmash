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
import ServicesPage from './pages/servicesPage';
import AboutUsPage from './pages/aboutUsPage';
import ContactUsPage from './pages/contactUsPage';
import LoginPage from './pages/loginPage';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import RiderPage from './pages/riderPage';
import BookingPage from './pages/BookingPage';
import SupportPage from './pages/supportPage';
import DriveAndEarn from './pages/driveAndEarn';

import smash from "./assets/videos/ridesmash.mp4"
import SmashFoodPage from './pages/smashFoodPage';
import SmashwisePage from './pages/smashwisePage';
import FleetPage from './pages/fleetPage';
import FranchisePage from './pages/franchisePage';
import RidePage from './pages/RidePage';
import DeliveryPage from './pages/deliveryPage';
import RentalPage from './pages/rentalPage';
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
      
      {/* {
        
        isLoading 

        ?

       <div className='flex items-center justify-center h-screen w-full'>
            <video className="h-[300px] w-[300px] rounded-lg" autoPlay >
              <source src={smash} type="video/mp4" />
            </video>
       </div>

        : */}

        <BrowserRouter>
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
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="about" element={<AboutUsPage/>}/>
            <Route path="driveAndEarn" element={<DriveAndEarn/>}/>
            <Route path="contact" element={<ContactUsPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="forgotPwd" element={<ForgotPasswordPage/>}/>
            <Route path="booking" element={<BookingPage/>}/>
            <Route path="support" element={<SupportPage/>}/>
            <Route path="food" element={<SmashFoodPage/>}/>
            <Route path="ride" element={<RidePage/>}/>
            <Route path="delivery" element={<DeliveryPage/>}/>
            <Route path="rental" element={<RentalPage/>}/>
            <Route path="airport" element={<AirportPage/>}/>
            <Route path="business" element={<SmashBusinessPage/>}/>
            <Route path="safety" element={<SafetyPage/>}/>
            <Route path="press" element={<PressReleasePage/>}/>
            
            <Route path="faq" element={<FaqPage/>}/>
            <Route path="smashwise" element={<SmashwisePage/>}/>
            <Route path="fleets" element={<FleetPage/>}/>
            <Route path="franchise" element={<FranchisePage/>}/>
            <Route path="privacy" element={<PrivacyPage/>}/>
            <Route path="termsAndConditionsPage" element={<TermsAndConditionsPage/>}/>

            <Route  path="blog" element={<BlogPage/>}/>
             

            <Route element={
              <RequireAuth>
                  {/* <RiderPage user={currentUser}/> */}
                  <Route path="riderProfile" element={<RiderPage user={currentUser}/>}/>
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
