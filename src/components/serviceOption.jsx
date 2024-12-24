import { useState } from "react"
import lite from './../assets/coolride.png'
import classic from './../assets/cars.png'
import executive from './../assets/newride.png'
import Switch from '@mui/material/Switch';
import bike from './../assets/ridebike.png'
import van from './../assets/busride.png'
// import truck from './../assets/trucks.png'
import {motion} from 'framer-motion'
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
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-20 py-8">
        <motion.div
         variants={fadeIn("down", 0.7)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:true}}

        className="text-center">
            <h3 className="md:text-5xl text-3xl font-black inter text-primary mb-2 md:tracking-wide">Explore Our Services</h3>
            <p className="md:w-[60%] w-[80%] lg:w-[40%] font-medium mx-auto px-0 md:px-4 text-gray-600">We offer a wide range of services to our riders, this brings with it the ambience and style on every trip.</p>
            <div className="mt-12 relative bg-gray-300 rounded-full w-[305px] mx-auto flex items-center justify-center">
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full transition-transform duration-300 ${
              switchChecked ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
          <div className="relative z-10 flex w-full">
            <button
              onClick={() => setSwitchChecked(true)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                switchChecked ? "text-white" : "text-gray-600"
              }`}
            >
              RideSmash
            </button>
            <button
              onClick={() => setSwitchChecked(false)}
              className={`w-1/2 text-center py-3 font-semibold transition-all duration-300 ${
                !switchChecked ? "text-white" : "text-gray-600"
              }`}
            >
              Smash Logistic
            </button>
          </div>
        </div>
      </motion.div>

  <div className="grid lg:grid-cols-3 gap-8 mt-16 md:w-15/12 mx-auto">
  {switchChecked ? (
    <>
      {/* Left Section: Two-Column Card Stack */}
      <motion.div 
      variants={fadeIn("right", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true}}
      
      className="lg:col-span-2 grid lg:grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-2">
        {rideOptions.map((options, index) => (
          <div
            key={index}
            className="border py-6 px-6 rounded-3xl shadow-3xl transition ease-in-out duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl inter font-bold text-primary">{options.type}</h3>
              <img src={options.image} alt="" className="w-[80px] h-[60px]" />
            </div>
            <p className="text-gray-600 font-normal roboto mt-4">{options.descrtiption}</p>
          </div>
        ))}
      </motion.div>

      {/* Right Section: Additional Content */}
      <motion.div 
      variants={fadeIn("left", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true}}

      className="lg:py-16 md:py-0 py-0 flex order-first lg:order-none">
        <div>
        <h3 className="text-3xl px-4 lg:px-0 lg:text-4xl md:text-4xl text-left inter font-black tracking text-primary">
        Reliable Services For Every Occasion
                </h3>
        <p className="text-gray-600 px-4 lg:px-0 font-medium mt-4 roboto text-left">
        Explore a variety of options, from affordable rides to executive transport, offering comfort and efficiency for all your needs.
                </p>
        </div>
      </motion.div>
    </>
  ) : (
    <>
      {/* Left Section: Two-Column Card Stack */}
      <motion.div 
      variants={fadeIn("right", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true}}

      className="lg:col-span-2 grid sm:grid-cols-2 gap-3 lg:gap-2">
        {deliveryOptions.map((options, index) => (
          <div
            key={index}
            className="border py-6 px-6 rounded-3xl shadow-3xl transition ease-in-out duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl inter font-bold text-primary">{options.type}</h3>
              <img src={options.image} alt="" className="w-[80px] h-[60px]" />
            </div>
            <p className="text-gray-600 font-normal roboto mt-4">{options.descrtiption}</p>
          </div>
        ))}
      </motion.div>

      {/* Right Section: Additional Content */}
      <motion.div 
      variants={fadeIn("left", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true}}

      className="lg:py-16 md:py-0 py-0 flex order-first lg:order-none">
        <div>
        <h3 className="text-3xl px-4 lg:px-0 lg:text-4xl md:text-4xl text-left inter font-black tracking text-primary">
        Efficient Delivery Services
        </h3>
       <p className="text-gray-600 px-4 lg:px-0 font-medium mt-4 roboto text-left">
        From affordable bikes to spacious vans, we ensure fast, secure, and efficient delivery to any destination.
        </p>
        </div>
     
      </motion.div>
    </>
  )}
</div>


        </div>

  )
}

export default ServiceOption