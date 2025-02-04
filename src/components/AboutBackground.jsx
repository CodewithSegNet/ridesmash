import background from '../assets/woman-rider.webp'
import { FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const AboutBackGround = () => {
  return (
    <div className=' flex items-center bg-slate-400 md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat text-white sm:flex-row sm:gap-6 sm:py-12  xl:max-h-[598px] 2xl:rounded-5xl; '>
        <img src={background} alt='image' className='md:w-full md:h-full h-full w-full resizeMode:"cover"' />
        <div className='absolute md:w-1/2 w-full h-full bg-black top-0 left-0 md:rounded-br-full rounded-none opacity-70 flex flex-col'>
         <div className=' flex md:flex-col flex-col md:justify-start md:items-start items-center justify-center md:mx-10 mx-1 md:w-3/4 md:mt-20 mt-4 md:gap-3 gap-1'>
         <div className=' flex flex-col md:flex-col md:gap-6 gap-1 pt-3 w-full items-center md:items-start justify-center md:justify-start' >
              
              <h1 className=" md:text-[60px] text-xl text-white font-bold md:leading-10 inter">Ride in Style,</h1>
              <h1  className=" md:text-[60px] text-xl text-white font-bold inter">Ride in Comfort</h1>
              
          </div>
          <h3 className='text-white md:text-2xl text-base md:mt-6 mt-1 md:mb-3 mb-1'>We Keep lives transformed.</h3>
          <div className="flex flex-col md:flex-row gap-3 mt-3 w-1/2 md:w-full">
                <a href="/driveAndEarn" className='bg-secondary text-primary py-2 md:py-6 px-2 md:px-6 rounded-full hover:text-white hover:bg-primary text-base md:text-xl text-center'>Drive and Earn</a>
                <button className='bg-primary py-2 md:py-6 px-2 md:px-6 text-white rounded-full hover:text-primary hover:bg-secondary text-base md:text-xl'>Download App</button>
          </div>
         </div>
        
        </div>
    </div>
  )
}

export default AboutBackGround