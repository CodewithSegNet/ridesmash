import { LazyLoadImage } from 'react-lazy-load-image-component';
import map from './../assets/ridesmash-location-map.webp'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'



const Location = () => {
  return (
  <>
  <div className="flex md:h-full py-[3.5rem] md:py-[4.5rem] lg:py-[5rem] px-[1rem] md:bg-blue-100 md:justify-center md:items-center md:w-full">
   
   <div className="flex max-w-screen-2xl mx-auto md:w-full md:p-6 md:items-center items-start md:justify-center flex-col">
   <div>
   <motion.h1

   variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true}}

   className="text-3xl md:text-4xl text-primary text-center w-[100%] font-black mb-2 inter">Explore Ridesmash</motion.h1>
    <motion.h2
       variants={fadeIn("up", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:true}}
    
    className="text-3xl md:text-4xl text-primary text-center w-[100%] font-black mb-6 inter">Reliable Rides Across Your City and Beyond</motion.h2>
    <motion.p
    variants={fadeIn("down", 0.7)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:true}}
    className="mb-12 text-center text-gray-600 w-full">
    With Ridesmash, getting around has never been easier. We operate in a wide range of cities and towns, offering safe, affordable, and convenient rides whenever you need them. From the vibrant streets of Abuja to the serene neighborhoods of Lagos, and everywhere in between, we’re here to connect you to your destination. Check out our service areas, including Enugu, Port Harcourt, and many more. Your city, your ride, anytime.
    </motion.p>
    </div>
    <motion.div
    variants={fadeIn("up", 0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:true}}
    className='flex mx-auto w-[100%] md:w-[75%]'>
              <LazyLoadImage src={map} alt='business' className='md:w-full'/>
    </motion.div>
    </div> 
  </div>
  </>
  )
}

export default Location


