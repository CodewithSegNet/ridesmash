import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import driver from './../assets/hero_2.webp'
import { div } from 'framer-motion/client'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function PressContentBottom() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
<div className='flex md:w-full flex-col md:flex-row-reverse gap-6 md:items-center md:p-12 md:h-full p-6'>
        <div className='flex md:order-1 order-2 max-w-screen-2xl mx-auto md:w-1/2 bg-white md:h-full flex-col md:flex-col md:gap-6 md:p-6 rounded-xl py-6 gap-3'>
            
            <div className='flex flex-col gap-3'>

                <div className='flex md:flex-col flex-col gap-2 md:gap-4 md:items-start mb-4 items-center'>
                      
                <h1 className='text-xl md:text-3xl font-medium text-primary'>
                    Announcement for Drivers
                </h1>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-md'>
                        We are currently in the process of recruiting drivers. If you are interested in becoming a driver, please visit our website or download our app.
                        </h1>
                        <h1 className='text-gray-700 text-base md:text-md'>
                        We are also offering a special promotion for riders who sign up for our service. For a limited time, you can get your first ride free.
                        </h1>
                        <h1 className='text-gray-700 text-base md:text-md'>
                        We are excited to bring RIDESMASH to Africa and to make a positive impact on the lives of people across the continent. Thank you for your support.
                        </h1>

                        <h1 className='text-gray-700 text-base md:text-md md:font-semibold'>
                            Sign up for our newsletter to stay up-to-date on the latest news and promotions.
                        </h1>
                    </div>
                </div>

            </div>
            
        </div>
        <div className='flex md:w-1/2 md:h-full flex-col md:flex-col md:gap-6 rounded-xl gap-3 order-1'>
            <div className='flex flex-col gap-3 '>
                <LazyLoadImage src={driver} alt='' className='w-full h-full rounded-md'/>
            </div>
            
        </div>
        
        
    </div>
    </div>
    
  )
}
