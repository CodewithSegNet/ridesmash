import delivery from './../assets/delivery.webp'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';



const EarnDelivery = ({currency, country}) => {
  return (
    <div className="flex md:px-14 py-[2rem] md:py-0 px-6 mx-auto md:py-[4rem] md:my-0 md:items-center md:justify-center bg-black">
    <div className="flex max-w-screen-2xl mx-autos md:flex-row-reverse flex-col justify-between md:items-center gap-8">
      {/* Image Section */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <LazyLoadImage src={delivery} alt="Delivery Person" className="rounded-lg" />
      </motion.div>
  
      {/* Content Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:w-2/5"
      >
        {/* Headline */}
        <h1 className="md:text-3xl xl:text-4xl text-3xl font-black inter text-gray-400 mb-5 leading-tight lg:leading-normal">
          Earn Up to {currency}
          {currency === "GHS" ? "5,715" : "400,000"} Monthly Delivering Items
          <span className="font-bold text-secondary"> With Ridesmash Expert.</span>
        </h1>
  
        {/* Subheadline */}
        <h2 className="text-gray-300 text-lg font-semibold mb-4">
          Empowering delivery drivers to achieve high earnings through expert guidance and reliable processes.
        </h2>
  
        {/* Benefits List */}
        <ul className="text-gray-200 font-normal text-md mb-7 space-y-3">
          <li>✔️ Earn up to {currency}{currency === "GHS" ? "5,715" : "400,000"} monthly with a trusted delivery system.</li>
          <li>✔️ Receive hands-on training from industry experts.</li>
          <li>✔️ Access a reliable and seamless delivery process.</li>
          <li>✔️ Benefit from flexible working hours that suit your schedule.</li>
        </ul>
  
        {/* Call to Action */}
        <Link to="/driveAndEarn" className="bg-secondary text-primary py-3 px-6 rounded hover:text-white hover:bg-primary text-sm md:text-md">
          Learn More
        </Link>
      </motion.div>
    </div>
  </div>
  )
}

export default EarnDelivery