import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import about from './../assets/cars.png'

const PressTitle = () => {
  return (
    
    <div className='flex md:w-full md:h-[100px] w-full h-1/2 flex-row justify-between items-center '>

        <div className="flex w-full md:w-full md:items-center md:justify-center items-center justify-center">

            <h1 className="text-2xl md:text-gray-300 text-gray-300 md:text-6xl md:font-extrabold roboto">Press Release</h1>
            
        </div>
    
    </div>
  )
}

export default PressTitle