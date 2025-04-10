import {useState} from 'react'
import logo from './../assets/logos.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import android from "./../assets/Google-play-store.png";
import apple from "./../assets/Apple-Download.png";
import { Link } from 'react-router-dom';




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
                        <Link to='/about-us' className='block hover:text-secondary text-gray-200'>About Us</Link>
                        <Link to='/services' className='block hover:text-secondary text-gray-200'>Services</Link>
                        <Link to='/drive-and-earn' className='block hover:text-secondary  text-gray-200'>Earn</Link>
                        <Link to='/safety' className='block hover:text-secondary text-gray-200'>Safety</Link>
                        <Link to='/press-release' className='block hover:text-secondary text-gray-200'>Press Release</Link>
                        <Link to='/blog' className='block hover:text-secondary text-gray-200'>Blog</Link>
                        <Link to='/faq' className='block hover:text-secondary text-gray-200'>FAQ</Link>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h1 className=' text--300 md:text-xl'>Services</h1>
                    <ul className='space-y-3'>
                        <Link to='/ride-hailing' className='block hover:text-secondary text-gray-200'>Ride Hailing</Link>
                        <Link to='/delivery' className='block hover:text-secondary text-gray-200'>Delivery</Link>
                        <Link to='/car-rentals' className='block hover:text-secondary text-gray-200'>Car Rental</Link>
                        <Link to='/hire-purchase' className='block hover:text-secondary text-gray-200'>Hire Purchase</Link>
                        <Link to='/airport-pickup' className='block hover:text-secondary text-gray-200'>Airport Pickup</Link>
                        <Link to='/ridesmash-business' className='block hover:text-secondary text-gray-200'>Ridesmash Business</Link>
                    </ul>
                </div>
                <div className='flex md:flex-col gap-2'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text--300 md:text-xl'>Partnership</h4>
                    <ul className='space-y-3'>
                        <Link to='/drive-and-earn' className='block hover:text-secondary text-gray-200'>Drive and Earn</Link>
                        <Link to='/fleet-management' className='block hover:text-secondary text-gray-200'>Fleets Management </Link>
                        <Link to='/franchise-partner' className='block hover:text-secondary text-gray-200'>Franchise Partner</Link>
                       
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
            <Link to='/terms-and-conditions'><h3 className=' text-gray-300'>Terms and Conditions</h3></Link>
            <h3>|</h3>
            <Link to='/privacy-policy'><h3 className=' text-gray-300'>Privacy Policy</h3></Link>
         </div>
       
         <div className='flex flex-col gap-2 md:items-center md:justify-center'>
            <h3 className=' text-gray-300'>Connect with us </h3>
            <div className='flex flex-row items-center gap-3 '>
                <Link to='https://web.facebook.com/ridesmashNigeria'><FaFacebookF className='hover:text-secondary text-2xl transition-all duration-300 cursor-pointer' /></Link>
                <Link to='https://www.instagram.com/ridesmashnigeria/'><FaInstagram className='hover:text-secondary text-2xl' /></Link>
                <Link to='https://x.com/ridesmashng?s=21/'><FaTwitter className='hover:text-secondary text-2xl' /></Link>
                <Link to='https://www.tiktok.com/@ridesmash?_t=ZM-8spvH4JpCrd&_r=1'><FaTiktok className='hover:text-secondary text-2xl' /></Link>
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
            <Link to='/'><img src={android} alt='google' className='w-[200px] '/></Link>
            <Link to='/'><img src={apple} alt='apple' className='w-[200px] '/></Link>
           
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