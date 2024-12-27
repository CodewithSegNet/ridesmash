import {useState} from 'react'
import logo from './../assets/logos.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import android from "./../assets/Google-play-store.png";
import apple from "./../assets/Apple-Download.png";
import { serverTimestamp, addDoc, collection, } from "@firebase/firestore";
import {db} from '../../firebase'
import Button from '@mui/material/Button';
import {TextField, colors} from '@mui/material';

const Footer = () => {

  let currentYear = new Date().getFullYear()

  const [email, setEmail] = useState("")
  const [emailError, setErrorEmail] = useState("")

//   const inputProps = {
//     step: 300,
//     colors: white,
//     height:8,
//   };

  const onSubmit = async(e) => {

    e.preventDefault()

    if(email === ""){
        return setErrorEmail( "Enter email")
    }

        const collectionRef = collection(db, "newsLetter")
        const docRef = await addDoc(collectionRef, {email: email, timeStamp:serverTimestamp(), status : "UNREAD"})
        setEmail("")
        setErrorEmail("")
        alert("Email sent successfully!!!")
       

  } 
    
  return (
    <div className=" md:max-w-screen-3xl mx-auto bg-primary md:px-14 p-4 text-white">
        
        <div className='my-4 flex flex-col md:flex-row gap-2'>

            <div className='flex flex-col gap-2'>
                <div className=" md:w-full flex flex-col gap-2">
                    <a href="/" className='flex md:justify-start'>
                        <img src={logo} alt='' className='w-[45px] h-[45px]'/>
                    </a>
                    <p className='md:w-1/2 text-base font-extralight text-gray-300'>Ridesmash Technology provides reliable e-hailing and delivery services, connecting cities across Africa with efficiency and convenience.</p>
                    
                </div>
                <div className='flex flex-col h-6 mb-6 md:mb-0'>
                            <h3 className='text-gray-400 text-base md:text-lg'>Newsletter and Events</h3>

                            <div className='flex flex-row '>
                                <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                value={email}
                                variant='filled'
                                onChange={e => setEmail(e.target.value)}
                                sx={{color:'white',}}
                                className='bg-white'
                            />
                                {/* <Button onClick={onSubmit} variant="contained" className="bg-blue-800">Drop Message</Button> */}
                                <Button type='submit' variant="contained" sx={{py:1,}}  onClick={onSubmit}  >subscribe</Button>
                            </div>
                        <span className=' text-red-500'>{emailError !== "" && emailError}</span>
                </div>
            </div>    
       
            <div className='md:w-3/4 flex md:flex-row flex-col flex-wrap justify-between gap-3 mt-[2rem] items-start'>
                <div className='space-y-4 mt-5'>
                    <h1 className=' text--300 md:text-xl'>Company</h1>
                    <ul className='space-y-3'>
                        <a href='/about' className='block hover:text-secondary text-gray-200'>About Us</a>
                        <a href='/services' className='block hover:text-secondary text-gray-200'>Services</a>
                        <a href='/driveAndEarn' className='block hover:text-secondary  text-gray-200'>Earn</a>
                        <a href='/safety' className='block hover:text-secondary text-gray-200'>Safety</a>
                        <a href='/press' className='block hover:text-secondary text-gray-200'>Press Release</a>
                        <a href='/blog' className='block hover:text-secondary text-gray-200'>Blog</a>
                        <a href='/faq' className='block hover:text-secondary text-gray-200'>FAQ</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h1 className=' text--300 md:text-xl'>Services</h1>
                    <ul className='space-y-3'>
                        <a href='/ride' className='block hover:text-secondary text-gray-200'>Ride</a>
                        <a href='/delivery' className='block hover:text-secondary text-gray-200'>Delivery</a>
                        <a href='/rental' className='block hover:text-secondary text-gray-200'>Car Rental</a>
                        <a href='/airport' className='block hover:text-secondary text-gray-200'>Airport Pickup</a>
                        <a href='/business' className='block hover:text-secondary text-gray-200'>Ridesmash Business</a>
                    </ul>
                </div>
                <div className='flex md:flex-col gap-2'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text--300 md:text-xl'>Partnership</h4>
                    <ul className='space-y-3'>
                        <a href='/driveAndEarn' className='block hover:text-secondary text-gray-200'>Drive and Earn</a>
                        <a href='/fleets' className='block hover:text-secondary text-gray-200'>Fleets Management </a>
                        <a href='/franchise' className='block hover:text-secondary text-gray-200'>Franchise Partner</a>
                        
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text--300 md:text-xl'>Countries</h4>
                    <ul className='space-y-3'>
                        <h3 className='block hover:text-secondary text-gray-200'>Nigeria</h3>
                        <h3 href='/' className='block hover:text-secondary text-gray-200'>Others...</h3>
                    </ul>
                </div>
                </div>
               
            </div>
        </div>
       <hr className=' border-b-[0.5] border-solid border-gray-600'/>

       {/* contacts */}

       <div className='flex md:flex-row flex-col md:items-center justify-between md:py-4 gap-8 py-4 '>
         <div>
            <h5 className=' text-gray-300'>Call: 070-RIDESMASH.COM</h5>
            <h3 className=' text-gray-300'>Email: info@ridesmash.com</h3>
         </div>
        <div className='flex md:flex-row gap-3'>
            <a href='/termsAndConditions'><h3 className=' text-gray-300'>Terms and Conditions</h3></a>
            <h3>|</h3>
            <a href='/privacy'><h3 className=' text-gray-300'>Privacy Policy</h3></a>
         </div>
       
         <div className='flex flex-col gap-2 md:items-center md:justify-center'>
            <h3 className=' text-gray-300'>Connect with us </h3>
            <div className='flex flex-row items-center gap-3 '>
                <a href='/'><FaFacebookF className=' text-2xl' /></a>
                <a href='/'><FaInstagram className=' text-2xl' /></a>
                <a href='/'><FaTwitter className=' text-2xl' /></a>
                <a href='/'><FaTiktok className=' text-2xl' /></a>
            </div>
         </div>
        
       </div>

         {/* apps */}
         <hr className=' border-b-[0.5] border-solid border-gray-600'/>
       
         <div className='flex md:flex-row flex-col md:items-center justify-between md:py-4 py-4 gap-8 mb-4 '>
         <div>
            <h3 className=' text-gray-300'></h3>
            <h3 className=' text-gray-300'></h3>
         </div>
         <div className='flex flex-row items-center gap-3'>
            <a href='/'><img src={android} alt='google' className='w-[200px] '/></a>
            <a href='/'><img src={apple} alt='apple' className='w-[200px] '/></a>
           
         </div>
         {/* <div>
            <h3 className=' text-gray-300'>Connect with us (Ghana) </h3>
            <div>
                <span>icons</span>
            </div>
         </div> */}
         </div>
         <div className='items-center md:py-2 py-8 md:justify-center'>
         <p className='regular-14 w-full text-center text-gray-300'>&copy; {currentYear} Ridesmash Technology | All rights reserved</p>
     
         </div>
    </div>
  )
}

export default Footer