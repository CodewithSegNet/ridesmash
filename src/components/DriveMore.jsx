import delivery from './../assets/deliveryman.webp'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Link} from 'react-router-dom'

const DriveMore = () => {
  return (
    <div className="flex md:px-14 p-4 md:h-full py-[5rem] mx-auto md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex max-w-screen-2xl mx-auto  md:flex-row-reverse flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
               
                <img src={delivery} alt='' className=' rounded-md'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.4}}
            
            
            className=' md:w-2/5'>
            <h1 className='md:text-4xl text-3xl font-bold text-gray-400 mb-5 leading-normal'>Drive more,<span className='md:text-4xl text-3xl font-bold text-primary'> Earn more:</span></h1>
            <p className='text-gray-200 text-md mb-7'> Ridemash provides the greate opportunities for Driver Partners to earn daily pension savings will ease.</p>
            <Link to='/delivery' className='bg-primary text-white text-sm md:text-md text-black py-3 px-6 rounded hover:text-primary hover:bg-secondary'>Learn More</Link>
        </motion.div>

        </div>
    </div>
  )
}

export default DriveMore