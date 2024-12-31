import Image1 from './../assets/new-illus.svg';
import background from '../assets/background2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { FaSquare } from "react-icons/fa6";

const ServiceCarRental = () => {
  return (
    <div className=' flex w-full h-full md:h-screen items-center max-w-screen-2xl mx-auto md:justify-center md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white flex-row md:gap-12 py-10 gap-2 md:py-24 md:py-0 xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-full h-screen resizeMode:"cover"' />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 md:px-12 absolute md:flex-row-reverse bg-white opacity-90 h-screen md:h-full md:justify-between md:items-center px-3">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={Image1} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-700 mb-5 leading-normal'>Car Rental</h1>
                <p className='text-gray-600 text-md md:text-lg mb-4'>Reserve and rent a car directly through the Ridesmash app for short-term or long-term needs. Choose from a variety of vehicles to suit your purpose.</p>
                <p className='text-gray-600  text-md md:text-lg mb-4'>It’s a swift service set apart for Travelers, individuals needing a car for specific errands or tasks, or those whose own vehicle is unavailable.</p>

                <p className='text-gray-700  text-md md:text-lg mb-4 md:font-bold'>Benefits:</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600  text-md md:text-lg'>Seamless experience - rent a car without needing a separate app.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600  text-md md:text-lg '>Variety of choices to fit your needs and budget.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600  text-md md:text-lg'>Potentially lower cost than traditional car rental agencies.</p>
               </div>
              
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceCarRental