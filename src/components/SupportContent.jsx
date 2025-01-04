import support from './../assets/support.png'
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdOutlineMail, MdOutlinePhoneEnabled } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';

export default function ContactContent() {


    
  return (
    <div className='flex'>
        <div className='flex max-w-screen-2xl mx-auto flex-col md:flex-row justify-between px-6 md:px-12 gap-2 md:gap-6 w-full  py-6'>
            <div className=' flex flex-col w-full h-full gap-4 py-12'>
                {/* <div className=' w-[80%]'>
                    <h1 className=' font-extrabold text-orange-500 text-[32px] md:text-[56px] roboto-regular leading-[40px] md:leading-[66px] '>Help and Support</h1>
                </div> */}
                <div className='  md:pr-6'>
                    <p className=' text-md md:text-lg text-gray-700 my-4'>
                    We operates 24/7 and we fully ready to help and support you at anytime.
                    </p>
                </div>
              
                <div className='flex flex-col md:flex-row md:justify-between justify-center my-6 gap-6'>
                    <div className='flex flex-col items-center gap-1 md:gap-3 md:w-1/3'>
                        <MdOutlineMail color='red'  size='40px'/>
                        <h2 className='text-[12px] md:text-[18px] text-black '>Send Us Email</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>info@ridesmash.com</p>
                    </div>
                    <div className='flex flex-col items-center   gap-1 md:gap-3 md:w-1/3 '>
                        <MdOutlinePhoneEnabled color='red'  size='40px'/>
                        <h2 className='text-[12px] md:text-[18px] text-black '>Call Us Anytime</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>070-RIDESMASH.COM</p>
                    </div>
                    <div className='flex flex-col items-center  gap-1 md:gap-3 md:w-1/3  '>
                        <FaAddressCard color='red' size='40px'/>
                        <h2 className='text-[12px] md:text-[18px] text-black'>Visit Our Office</h2>
                        <p className='text-[10px] md:text-[14px] text-[#00000088]'>Nigeria</p>
                    </div>
                </div>
              
                
                
            </div>
            <div className=' flex flex-col md:flex-col gap-6 md:gap-8  w-[100%] justify-center md:px-12 bg-blue'>
                
            <img 
                src={support} 
                alt=""
                width={550}
                height={870}
              />
            </div>
        </div>
    </div>
  )
}
