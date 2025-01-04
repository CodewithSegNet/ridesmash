import delivery from './../assets/Business-opportunity.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Link} from 'react-router-dom'

const BusinessOpportunities = () => {
  return (
    <div className="flex md:px-14 p-4 md:h-full py-[5rem] mx-auto md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex md:flex-row-reverse max-w-screen-2xl mx-auto flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-md'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-2/5'>
            <h1 className='md:text-4xl text-3xl font-bold text-gray-400 mb-5 leading-normal'>Business Opportunities</h1>
            <p className='text-gray-200 text-md mb-7'> Our platform give individuals, businesses across to earn money through vehicle partnership and fund management with amazing returns of investment.</p>
            <Link to='/delivery' className='bg-primary text-white text-sm md:text-md text-white py-3 px-6 rounded hover:text-primary hover:bg-secondary'>Learn More</Link>
        </motion.div>

        </div>
    </div>
  )
}

export default BusinessOpportunities