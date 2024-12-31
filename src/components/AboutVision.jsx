import background from '../assets/aboutteam.png'
import { FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const AboutVision = () => {
  return (
    <div className=' flex items-center bg-slate-400 md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat py-12 text-white sm:flex-row sm:gap-12 sm:py-24  xl:max-h-[598px] 2xl:rounded-5xl; '>
        <img src={background} alt='image' className='md:w-full md:h-full resizeMode:"cover"' />
        <div className='absolute md:w-3/4 w-full h-full bg-black top-0 right-0 md:rounded-bl-full opacity-70'>
        <div className='  items-center md:justify-center mx-4 md:ml-40 md:w-3/4 md:h-1/2 h-full md:mt-20 mt-1'>
         <div className=' flex flex-row md:gap-4 gap-2 items-center pt-10' >
              <FaPaperPlane className="md:w-8 md:h-8 w-4 h-4 text-[#4d4bdf]"/>
              <h1 className=' text-white md:text-6xl md:my-6 my-2 text-xl'>
                Our Team
              </h1>
              
          </div>
          <h3 className='text-white md:text-4xl text-base md:mt-6 mt-2 md:mb-3 mb-2 text-gray-200'>We have professionals in our team.</h3>
          <hr className='text-white md:mb-6 mb-2'/>
          <p className='text-[#FFFFFF99] md:text-lg text-sm text-gray-200'>

            Our workforce comprises of great minds and professionals in the transport business and we work round the clock to ensure all your transportation needs are met professionally.

          </p>
         </div>
        </div>
    </div>
  
  )
}

export default AboutVision