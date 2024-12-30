import rider from '../assets/woman-rider.jpg'
import background from '../assets/background2.jpg'
// import background1 from '../assets/background1.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { FaSquare} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className='flex h-[900px] md:h-[600px] xl:h-screen items-center md:justify-center md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-12 md:py-0 xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-full h-screenresizeMode:"cover"' />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-2 md:gap-12 md:px-12 absolute md:flex-col bg-white opacity-90 h-screen md:h-full md:justify-between md:items-center px-6">
           
           <div className='flex flex-col md:flex-col gap-6 md:py-8 md:gap-3  md:relative'>

            <motion.div
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}

            className='flex md:items-center text-primary md:py-5 md:absolute md:top-4 md:left-4'><h1 className='md:text-4x text-3xl font-black text-center w-[100%] md:text-left inter md:font-black roboto mb-[2rem] mt-[5rem] md:mt-[0rem] xl:mt-[2rem]'>Why Choose Us</h1></motion.div>

            <div className='flex flex-col-reverse md:flex-row-reverse gap-6 justify-center items-center md:justify-center md:items-center'>

            
            <motion.div
            
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}
            
            
            className=' md:w-1/3 w-full md:items-center py-[4rem] md:justify-center'>
                
                <div className='flex md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-start'>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                  <FaCheckCircle size={17} color='blue' />
                  </div>  
                  
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>24/7 Available</h1>
                    <p className='text-gray-500 md:text-md'>Ridesmash is always available to fulfil your needs whether you want a ride urgently.</p>
                  </div>
               </div>
               <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-start'>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                   <FaCheckCircle size={17} color='blue' />
                  </div>  
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>User-friendly App</h1>
                    <p className='text-gray-500 md:text-md md:pt-[.1rem]'>Our user-friendly app allows you to track your driver’s arrival and helps you manage your ride in your hands.</p>
                  </div>
               </div>
              
               <div className='flex md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-start'>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                     <FaCheckCircle size={17} color='blue' />
                  </div>   
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>Professional Drivers</h1>
                    <p className='text-gray-500 md:text-md '>Ridemash drivers are professionals with a pro-client attitude. </p>
                  </div>
               </div>
                
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.7}}
              className=' md:w-1/3 hidden md:block'
            >
              

                <img src={rider} alt='' className=' rounded-3xl rounded-br-full'/>

            </motion.div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}
            
            
            className=' md:w-1/3 w-full'>
                
                <div className='flex  md:flex-row gap-4 md:items-start mb-4 items-start '>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                    <FaCheckCircle size={17} color='blue' />
                  </div> 
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>Easy Booking</h1>
                    <p className='text-gray-500 md:text-md '>Booking a ride with Ridesmash is a breeze and simple process. </p>
                  </div>
               </div>
               <div className='flex  md:flex-row gap-4 md:items-start mb-4 items-start'>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                    <FaCheckCircle size={17} color='blue' />
                  </div> 
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>Reliable and Safe</h1>
                    <p className='text-gray-500 md:text-md '>Your safety is our top priority. Our drivers undergo rigorous background checks.</p>
                  </div>
               </div>
              
               <div className='flex  md:flex-row gap-4 md:items-start mb-4 items-start'>
                  <div className='md:w-5 md:h-5 md:pt-[.1rem]'>
                    <FaCheckCircle size={17} color='blue' />
                  </div> 
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 font-medium md:text-1xl'>Competitive Pricing</h1>
                    <p className='text-gray-500 md:text-md '>We believe that quality doesn’t have to come at a premium price. </p>
                  </div>
               </div>
            </motion.div>

            </div>



           </div>
           
          

        </div>
    </div>
  )
}

export default WhyChooseUs