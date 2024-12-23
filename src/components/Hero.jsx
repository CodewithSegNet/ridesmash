import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { BiTaxi, BiDownload } from "react-icons/bi";



import banner from "./../assets/Ridesmash-brand.png"
const Hero = () => {
  return (
    <div className="flex md:px-12 p-4 max-w-screen-2xl mx-auto mt-10 md:h-[400px]">
        
        <div className="flex md:flex-row flex-col w-[100%] md:items-center">
            <motion.div 
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
                
                className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-2/4 w-full flex flex-col mt-6">
                <h1 className="lg:text-6xl text-4xl text-white font-black inter tracking leading-[1.5] " style={{ lineHeight: '1.2' }}>Ride in Style<span className='font-euclid font-black p-0 m-0'>,</span></h1>
                <h1  className="lg:text-6xl md:text-4xl text-4xl text-white font-black inter tracking">Ride in Comfort</h1>
                {/* <h3 className="text-xl text-gray-300 py-3 font-extralight">We keep lives transformed.</h3> */}
                <h3 className="lg:text-xl text-gray-300 py-3 pb-6 font-extralight text-md ">Experience the ultimate ride-sharing solution bringing comfort, 
                    style, and reliability to Africa. Whether commuting, traveling, 
                    or exploring, we make every journey smooth, affordable, and hassle-free. 
                    Transform the way you move, one ride at a time.</h3>
                <div className="flex flex-row gap-3 mt-3">
                    <button 
                     className='flex items-center border justify-center hover:bg-primary border-secondary bg-secondary transition-all duration-300 hover:border-primary py-3 px-6 text-primary rounded-full hover:text-white text-sm md:text-md font-semibold'> Download App</button>
                    <a href="/driveAndEarn" className='flex items-center border-[2px] border-secondary justify-center bg-transparent transition-all duration-300 text-secondary py-3 px-4 md:px-6 rounded-full hover:border-primary hover:text-white hover:bg-primary font-semibold text-sm md:text-md'> Drive and Earn</a>
                </div>
            </motion.div>
            {/* <motion.div
                variants={fadeIn("left", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}}
            >
                <img src={banner} alt="" className=""/>
            </motion.div> */}
        </div>
    </div>
  )
}

export default Hero