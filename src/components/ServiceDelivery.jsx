import Image2 from './../assets/illus2.svg';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const ServiceDelivery = ({currency, country}) => {

  return (
    <div className="flex md:px-14 p-4 h-full py-12 md:py-0 md:h-screen mx-auto md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex md:flex-row flex-col justify-between md:items-center max-w-screen-2xl gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={Image2} alt='' className=' rounded-md'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-100 mb-5 leading-normal'>Delivery </h1>
                <p className='text-gray-400 text-lg mb-4'>Get anything delivered quickly and efficiently using the Ridesmash app. From parcels and groceries to restaurant meals, Ridesmash takes care of it.</p>
                <p className='text-gray-400 text-lg mb-4'>Our delivery service is available for all busy individuals who need a reliable delivery service or those who lack personal transportation.</p>

                <p className='text-gray-100 text-lg mb-4 md:font-bold'>Benefits:</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-400 text-lg '>Saves time and effort compared to self-pickup.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-400 text-lg '>Wide variety of delivery options to choose from.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-400 text-lg '>Convenient in-app tracking of your delivery.</p>
               </div>
              
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceDelivery