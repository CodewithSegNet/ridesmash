import ImageTrav from './../assets/illus-trav.svg';
import background from '../assets/background2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { FaSquare } from "react-icons/fa6";

const ServiceAirport = () => {
  return (
    <div className=' flex h-full md:h-screen max-w-screen-2xl mx-auto items-center md:justify-center md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-12 py-10 xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-full h-screen resizeMode:"cover"' />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 md:px-12 absolute md:flex-row-reverse bg-white opacity-90 md:h-full md:justify-between md:items-center h-screen px-3">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={ImageTrav} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-1/2'>
                <h1 className='md:text-4xl text-3xl font-bold text-black md:text-gray-700 mb-5 leading-normal'>Airport Pickup:</h1>
                <p className='text-gray-600 text-md md:text-lg mb-4'>Pre-book a comfortable and reliable ride to or from the airport through the Ridesmash app. Take the stress out of airport commutes.</p>
                <p className='text-gray-600 text-md md:text-lg mb-4'>For our users arriving or departing air travelers who want a smooth transition to/from their destination.</p>

                <p className='text-gray-600 text-lg mb-4 md:font-bold'>Benefits:</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md md:text-lg '>Guaranteed pick-up and drop-off at the airport.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md md:text-lg '>Reliable transportation you can count on after a long flight.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-600 text-md md:text-lg '>Pre-booking ensures a car is waiting upon arrival (avoiding wait times).</p>
               </div>
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceAirport