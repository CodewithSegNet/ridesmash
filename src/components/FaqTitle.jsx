import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/cars.png'

const FaqTitle = () => {
  return (
    <div className='flex mt-[1.5rem] md:mt-0 md:pt-5'>
    <div className='md:w-full md:h-[200px] w-full max-w-screen-2xl mx-auto h-full flex flex-row justify-between items-center '>
<div className="w-full md:w-96 md:items-center md:justify-center items-center justify-center h-full md:h-1/3 mx-5 lg:mx-10">
    <h1 className="text-2xl md:text-gray-300 text-gray-300 md:text-4xl font-black inter">FAQ</h1>
    <div className="flex flex-row py-2 items-center">
        <Link to="/"><p className="mr-1 text-base text-gray-300 md:text-white md:text-1xl hover:text-secondary">Home</p></Link>
        <IoChevronForwardOutline className="text-base text-gray-300 md:text-white lg:text-md"/>
        <p className="ml-1 text-base text-gray-300 md:text-white lg:text-1xl">FAQ</p>
    </div>
   
</div>
<div className='hidden md:block'>
  <img
    src={about}
    alt="menu"
    width={600}
    height={600}
    // className="lg: w-[600px] lg: h-[600px] w-[300px] h-[300px]"
  />
</div>
</div>
</div>
  )
}

export default FaqTitle