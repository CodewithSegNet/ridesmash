import Image0 from './../assets/illus0.svg';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import axios from 'axios'

const ServiceBusiness = () => {


  return (
    <div className="flex h-full md:px-14 p-4 md:h-screen mx-auto py-10 md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex max-w-screen-2xl mx-auto md:flex-row flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={Image0} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-100 mb-5 leading-normal'>Ridesmash Business</h1>
                <p className='text-gray-300 text-md md:text-lg mb-7'>Ridesmash is a multinational entity, which primarily operates by connecting drivers for on-demand transportation services. 
                Ridesmash connects passengers with drivers who use their own or leased vehicles to provide rides.

               </p>

               <p className='text-gray-300 text-lg mb-7'>                 Passengers can request a ride through the Ridesmash app, specify their location and destination, and then be connected with a nearby available driver. 
                
 </p>
            
                  <p className='text-gray-300 text-lg mb-7'>                  
                  The app provides information about the driver, the estimated time of arrival, and the fare. Payment is typically processed through the app, eliminating the driver pricing method. </p>
            
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceBusiness