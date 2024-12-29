import { useState } from "react"
import lite from './../assets/Coupe.svg'
import classic from './../assets/SportCoupe.svg'
import executive from './../assets/SUV.svg'
import Switch from '@mui/material/Switch';
import bike from './../assets/Motorcycle.svg'
import van from './../assets/Van.svg'
// import truck from './../assets/trucks.png'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeIn } from '../variants'



const ServiceOption = () => {
  
  //   const [isRide, setIsRide] = useState(false)  

  const [switchChecked, setSwitchChecked] = useState(true);

  const rideOptions = [
    {id: 1, type : 'Smash Regular', image : lite, title : "Affordable and Fast", descrtiption : "Our cheapest ride rate, at your doorstep with all the comfort you can ask for anytime, any day."},
    {id: 2, type : 'Smash Classic', image : classic, title : "Top Request with Ambience", descrtiption : "Classic ride comes with top notch 100% cruise, all classic cars are exotic and classy."},
    {id: 3, type : 'Smash Executive', image : executive, title : "Affordable and Fast", descrtiption : "As the name implies executive rides, for executive or business owner. This service avail business executives to ride without hassle."},
  ]

  const deliveryOptions = [
    {id: 1, type : 'Smash Bike', image : bike, title : "Affordable and Fast", descrtiption : "Our delivery bikes are the cheapest delivery ride rate, delivering all your items to your doorstep"},
    {id: 2, type : 'Smash Car', image : lite, title : "Top Request with Ambience", descrtiption : "Seamless transportation with our classic cars to any destination of your choice for delivery."},
    {id: 3, type : 'Smash Van', image : van, title : "Affordable and Fast", descrtiption : "Van and buses travel long distance to deliver all your items."},
  ]

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-16 py-8">
        <motion.div
         variants={fadeIn("down", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:true}}

        className="text-center">
            <h3 className="md:text-4xl lg:text-4xl text-3xl font-black inter text-primary mb-2 md:tracking">Rides or Deliveries<span className='font-euclid font-black p-0 m-0'>,</span> We've Got You Covered</h3>
            <div className="mt-8 relative bg-gray-200 rounded-full w-[305px] mx-auto flex items-center justify-center">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full transition-transform duration-300 ${
              switchChecked ? "translate-x-0 transition ease-in-out duration-300" : "transition ease-in-out duration-300 translate-x-full"
            }`}
          ></div>
          <div className="relative z-10 flex w-full">
            <button
              onClick={() => setSwitchChecked(true)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                switchChecked ? "text-white transition ease-in-out duration-300" : "text-gray-600 transition ease-in-out duration-300"
              }`}
            >
              Ridesmash
            </button>
            <button
              onClick={() => setSwitchChecked(false)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                !switchChecked ? "text-white transition ease-in-out duration-500" : "text-gray-600 transition ease-in-out duration-500"
              }`}
            >
              Smash Logistic
            </button>
          </div>
        </div>
      </motion.div>

<AnimatePresence mode="wait">

  <motion.div
  key={switchChecked ? "ride" : "logistic"}
  initial={{ opacity: 0, x: 10 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -10 }}
  transition={{ duration: 0.1 }}
   className="grid lg:grid-cols-2 gap-8 mt-14 mx-auto w-[90%]">
  {switchChecked ? (
  <>
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="lg:col-span-2 grid lg:grid-cols-2 sm:grid-cols-2 gap-3"
    >
      <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:py-0 flex items-center order-first lg:order-none"
      >
        <div className="md:py-4 md:px-4"> 
          <h3 className="text-2xl px-4 lg:px-0 lg:text-3xl md:text-3xl text-left inter font-black tracking text-primary">
            Reliable Solutions For Every Occasion
          </h3>
          <p className="text-gray-600 px-4 lg:px-0 text-md font-normal mt-4 roboto text-left">
            Explore a variety of options, from affordable rides to executive transport, offering comfort and efficiency for all your needs.
          </p>
        </div>
      </motion.div>
      {rideOptions.map((options, index) => (
        <div
          key={index}
          className="py-4 px-4 rounded-md shadow-xl bg-gray-100 bg-white min-h-[150px] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="inter text-xl font-bold text-primary">{options.type}</h3>
            <img src={options.image} alt="" style={{ transform: "scaleX(-1)"}} className="w-[90px] h-[90px] object-contain" />
          </div>
          <p className="text-gray-600 font-normal roboto">{options.descrtiption}</p>
        </div>
      ))}
    </motion.div>
  </>
) : (
  <>
    <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="lg:col-span-2 grid lg:grid-cols-2 sm:grid-cols-2 gap-4"
    >
      <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:py-0 flex items-center order-first lg:order-none"
      >
        <div className="md:py-4 md:px-4">
          <h3 className="text-2xl px-4 lg:px-0 lg:text-3xl md:text-3xl text-left inter font-black tracking text-primary">
            Efficient Delivery Options
          </h3>
          <p className="text-gray-600 px-4 lg:px-0 text-md font-normal mt-4 roboto text-left">
            From affordable bikes to spacious vans, we ensure fast, secure, and efficient delivery to any destination.
          </p>
        </div>
      </motion.div>
      {deliveryOptions.map((options, index) => (
        <div
          key={index}
          className="py-4 px-4 rounded-md shadow-xl bg-gray-100 bg-white min-h-[150px] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="inter text-xl font-bold text-primary">{options.type}</h3>
            <img src={options.image} alt="" style={{ transform: "scaleX(-1)"}} className="w-[90px] h-[90px] object-contain" />
          </div>
          <p className="text-gray-600 font-normal roboto">{options.descrtiption}</p>
        </div>
      ))}
    </motion.div>
  </>
)}
</motion.div>

</AnimatePresence>

        </div>

  )
}

export default ServiceOption