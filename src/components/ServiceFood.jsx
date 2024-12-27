import food from './../assets/food.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const ServiceFood = () => {




  return (
    <div className="flex md:px-14 p-4 md:h-screen mx-auto my-24 md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex max-w-screen-2xl md:flex-row flex-col md:items-center gap-8">
           
            <div className="  md:items-center md:justify-center flex">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={food} alt='' className=' rounded-3xl md:h-[400px] md:w-[400px]'/>
            </div>
            <motion.div
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            
            
            className=' md:w-[650px]'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-300 mb-5 leading-normal'>SMASH Food: Africa's Food Delivery Revolution</h1>
                <p className='text-gray-500 text-lg mb-4'>SMASH Food isn't just another delivery app - it's a game-changer for African food lovers! We offer a convenient, diverse, and budget-friendly experience that caters to every craving.</p>
                <p className='text-gray-500 text-lg md:text-xl mb-4 md:font-bold'>Here's what sets us apart:</p>
                <p className='text-gray-500 text-lg mb-4 leading-6'><span className='font-[600]'>Effortless Delivery:</span> Get delicious meals from your favorite restaurants, supermarkets, and even local vendors delivered straight to your door with just a few clicks.</p>
                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  
                  <p className='text-gray-500 text-lg leading-6 '><span className='font-[600]'>Foodie Paradise:</span> We offer an unmatched variety. From local specialties and continental cuisine to healthy raw food options and everyday groceries, SMASH Food satisfies all your culinary desires.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-500 text-lg leading-6'><span className='font-[600]'>Savings Savvy:</span> Our app helps you discover amazing discounts and deals, making delicious food even more affordable.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-500 text-lg leading-6'><span className='font-[600]'>Peace of Mind:</span> SMASH Food prioritizes your security. We offer a secure payment platform that ensures your transactions are safe and worry-free. Join the SMASH Food revolution and experience the future of African food delivery!
                  </p>
               </div>
               
            </motion.div>

        </div>
    </div>
  )
}

export default ServiceFood