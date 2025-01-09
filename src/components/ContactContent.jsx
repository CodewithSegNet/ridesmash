// "use client"
import {useState} from 'react'
import driver from './../assets/driver.png'
import safety from './../assets/safety.png'
// import Image from 'next/image'
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdOutlineMail, MdOutlinePhoneEnabled } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import { serverTimestamp, addDoc, collection, } from "@firebase/firestore";
import {db} from '../../firebase'

export default function ContactContent() {

  const [contactInfo, setContactInfo] = useState({name:"", email:"", telephone:"", subject:"", message:""})
  const [nameError, setErrorName] = useState( "")
  const [emailError, setErrorEmail] = useState("")
  const [telephoneError, setErrorTelephone] = useState( "")
  const [subjectError, setErrorSubject] = useState("")
  const [messageError, setErrorMessage] = useState( "")

  const onSubmit = async() => {

    if(contactInfo.name === ""){
        return setErrorName("This field is required")
    }

    if(contactInfo.email === ""){
        return setErrorEmail( "This field is required")
    }
    if(contactInfo.telephone === ""){
        return setErrorTelephone("This field is required")
    }
    if(contactInfo.subject === ""){
        return setErrorSubject("This field is required")
    }
    if(contactInfo.message === ""){
        return setErrorMessage("This field is required")
    }

    const collectionRef = collection(db, "contact")
    const docRef = await addDoc(collectionRef, {...contactInfo, timeStamp:serverTimestamp(), status : "UNREAD"})
    setContactInfo({name:"", email:"", telephone:"", subject:"", message:""})
    setErrorName("")
    setErrorEmail("")
    setErrorTelephone("")
    setErrorSubject("")
    setErrorMessage("")
    alert("Message sent successfully!!!")


  } 
    
  return (
    <div className='flex'>
        <div className='flex max-w-screen-2xl mx-auto flex-col md:flex-row justify-between px-6 md:px-12 gap-2 md:gap-6 w-full py-6 mb-[3rem] md:mb-[0]'>
            <div className=' flex flex-col w-full h-full gap-4 py-12'>
                <div className=' w-[80%]'>
                    <h1 className=' font-extrabold text-primary text-[32px] md:text-[36px] lg:text-[46px] roboto-regular leading-[40px] md:leading-[56px]'>Reasons why we are Preferred</h1>
                </div>
                <div className='md:pr-6'>
                    <p className=' text-md text-gray-500'>
                    We bring to you the comfort and style as you ride with us from your pickup location to your destination and we ensure safety of lives and property.
                    </p>
                </div>
                <div className='flex flex-row my-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div>
                            <img
                                src={driver}
                                alt=""
                                width={60}
                                height={60}
                            />
                        
                        </div>
                        <div className=' w-[70%]'>
                            <h2 className='font-bold md:font-extrabold roboto text-base md:text-xl text-primary'>
                                Experience Drivers
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                    <div className='flex flex-row gap-2items-center'>
                            <img
                                src={safety}
                                alt=""
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className=' w-[70%]'>
                            <h2 className='font-bold md:font-extrabold roboto text-base md:text-xl text-primary'>
                                riders safety first
                            </h2>
                        </div>
                    </div>


                </div>
                <div>
                    <p className=' text-md text-[#00000099]'>
                    Regular enlightenment and knowledge sharing for our drivers and riders on rewards and bonuses for all customers.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between justify-center gap-6'>
                    <div className='flex flex-col items-center gap-1 md:gap-3 md:w-1/3'>
                        <MdOutlineMail color='red'  size='40px'/>
                        <h2 className='text-[12px] lg:text-[18px] md:text-[14px] text-black '>Send Us Email</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>info@ridesmash.com</p>
                    </div>
                    <div className='flex flex-col items-center   gap-1 md:gap-3 md:w-1/3 '>
                        <MdOutlinePhoneEnabled color='red'  size='40px'/>
                        <h2 className='text-[12px] md:text-[14px] lg:text-[18px] text-black '>Call Us Anytime</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>070-RIDESMASH.COM</p>
                    </div>
                    <div className='flex flex-col items-center  gap-1 md:gap-3 md:w-1/3  '>
                        <FaAddressCard color='red' size='40px'/>
                        <h2 className='text-[12px] lg:text-[18px] md:text-[14px] text-black'>Visit Our Office</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>Nigeria</p>
                    </div>
                </div>
                <div className='flex w-[100%] md:w-[100%] my-2 md:my-6 justify-center md:justify-start'>
                    <div className='flex flex-row gap-2  bg-[#002066] rounded-2xl items-center justify-center py-6 px-8'>
                        <p className='text-white roboto text-base'>Free Online Assessment</p>
                        <IoMdArrowRoundForward color="#ffffff"/>
                    </div>
                </div>
                
                
            </div>
            <div className=' flex flex-col md:flex-col gap-6 md:gap-8  w-[100%] justify-center md:px-12'>
                <div>

                    <h1 className='font-extrabold text-primary text-[24px] md:text-[36px] roboto'>Drop us a Line</h1>
                    <p>We will respond immediately</p>

                </div>

                <div className='flex flex-col md:flex-col'>

                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    value={contactInfo.name}
                    onChange={e => setContactInfo({...contactInfo, name:e.target.value})}
                />
                <span className=' text-red-500'>{nameError !== "" && nameError}</span>

                </div>
               
                

                <div className='flex flex-col md:flex-col'>

                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    value={contactInfo.email}
                    onChange={e => setContactInfo({...contactInfo, email:e.target.value})}
                />
                
                <span className=' text-red-500'>{emailError !== "" && emailError}</span>
                    
                </div>
               
                <div className='flex flex-col md:flex-col'>

                <TextField 
                    id="outlined-basic" 
                    label="Phone Number" 
                    variant="outlined" 
                    value={contactInfo.telephone}
                    onChange={e => setContactInfo({...contactInfo, telephone:e.target.value})}
                />
                <span className=' text-red-500'>{telephoneError !== "" && telephoneError}</span>
                    
                </div>
                  
                <div className='flex flex-col md:flex-col'>

                <TextField 
                    id="outlined-basic" 
                    label="Subject" 
                    variant="outlined" 
                    value={contactInfo.subject}
                    onChange={e => setContactInfo({...contactInfo, subject:e.target.value})}
                />
                <span className=' text-red-500'>{subjectError !== "" && subjectError}</span>
                    
                </div>
                 
                <div className='flex flex-col md:flex-col'>

                <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={3}
                    variant="outlined"
                    value={contactInfo.message}
                    onChange={e => setContactInfo({...contactInfo, message:e.target.value})}
                />
                <span className=' text-red-500'>{messageError !== "" && messageError}</span>
                    
                </div>
               
                <Button onClick={onSubmit} variant="contained" className="bg-blue-800">Drop Message</Button>
            </div>
        </div>
    </div>
  )
}
