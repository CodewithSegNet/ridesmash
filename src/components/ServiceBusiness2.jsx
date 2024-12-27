import business from './../assets/biz.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'

const ServiceBusiness2 = ({currency, country}) => {

  return (
    <div className="flex md:px-1 p-4 md:h-screen my-6 md:my-0 bg-white">
        <div className="flex md:flex-row max-w-screen-2xl mx-auto flex-col gap-6 md:gap-8 md:px-12">
           
           
            <motion.div
            
            variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
            
            className=' md:w-1/2'>
              
                <p className='text-gray-500 text-lg mb-7'>As part of our effort to ensure a smooth operation of business of adding value, we deem it necessary to introduce Ridesmash business.  </p>

                <p className='text-gray-500 text-lg mb-7'>Ridesmash is a ride sharing platform with class and difference. In view, our mission is to operate in 40 Africa countries. 
                
                </p>

                <p className='text-gray-500 text-lg mb-7'>
                It is our pleasure to inform you, that Ridesmash is in operation in Nigeria and Ghana and with expansion focus into 40 countries in Africa in 5 years to come. We are ensured that your partnership with Ridesmash will enhance Business Growth for both parties. 
                </p>

                <p className='text-gray-500 text-lg mb-7'>This document illustrates a vivid prospect of profit and benefit availability and categories of partnership. Thank you for your interest in our global business. We hope you have a smooth ride in partnership with Ridesmash.  </p>

                <p className='text-gray-500 text-lg mb-7'>Ridesmash made for Africa, Powered by Africans. 
                </p>

                <div className=' flex md:flex-col gap-5'>
                <p className='text-gray-600 font-bold text-lg md:text-xl'>Business Partner Manager </p>
                <p className='text-gray-600 font-bold text-lg md:text-xl'>Ridesmash</p> 
                <p className='text-gray-600 font-bold text-lg md:text-xl'>Categories of Partnerships</p> 

                </div>

            </motion.div>

            <motion.div
            
            variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
            
            className=' md:w-1/2'>
              
              <img src={business} alt='' className='md:w-full'/>

            </motion.div>

            

        </div>
    </div>
  )
}

export default ServiceBusiness2