import delivery from './../assets/shopping.jpg'
import background from '../assets/background2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { FaSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom'; 

const ServiceWise = () => {
  return (
    <div className=' flex h-screen max-w-screen-2xl mx-auto items-center md:justify-center md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-12 sm:py-24  xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-full h-screen resizeMode:"cover"' />
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 md:px-12 absolute md:flex-row-reverse bg-white opacity-90 md:h-full md:justify-between md:items-center h-screen px-3">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
                <h1 className='md:text-2xl text-xl font-bold text-gray-600 mb-5 leading-normal'>Smashwise: Your One-Stop Shop for Everything E-commerce
                </h1>

                <p className='text-gray-500 text-lg my-4 '>
                Smashwise isn’t just another online marketplace; it's your gateway to a vibrant world of commerce! Whether you're a seasoned shopper or just starting your e-commerce journey, Smashwise offers a convenient, secure, and diverse platform to fulfill all your needs.
                </p>
                  <Link to="/smashwise"  className='bg-secondary text-primary py-2 px-6 rounded hover:text-white hover:bg-primary text-xl my-3'>Learn More</Link>
            

                
 

            </motion.div>

        </div>
    </div>
  )
}

export default ServiceWise