import driver from './../assets/payout.webp'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const EarnAsYouGo = () => {



  return (
    <div className="flex md:px-14 max-w-screen-2xl mx-auto p-4 md:h-full py-[5rem] mx-auto md:my-0 md:items-center md:justify-center bg-white">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <LazyLoadImage src={driver} alt='' className=' rounded-md'/>
            </div>
            <motion.div
            
            variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.2}}
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-primary mb-5 leading-tight lg:leading-normal roboto'>Earn <span className='md:text-4xl text-3xl font-bold text-gray-700'>As You Go</span></h1>
                <p className='text-gray-600 text-md mb-7'>Our partners earn money as they go on this package.</p>
                <button className='bg-primary text-black text-sm md:text-md text-white py-3 px-6 rounded hover:text-primary hover:bg-secondary'>Learn More</button>
            </motion.div>

        </div>
    </div>
  )
}

export default EarnAsYouGo