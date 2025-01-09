import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const FundManagement = () => {

  return (
    <div className="flex md:px-14 p-4  mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-3xl text-2xl font-bold text-primary mb-5 leading-normal'>Fund Management: </h1>

                <p className='text-gray-500 text-md mb-4'>This is designed for Partners who are interested in investing their money. </p>

                

               <p className='text-primary text-md mb-4 md:font-bold'>REQUIREMENT FOR FUND MANAGEMENT </p>

                
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>A minimum Fund of  </p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Vehicle Inspection</p>
               </div>

               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Documents of Vehicles</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>5% Monthly interest from 6months and above, VAT inclusive and less than 6months is 7.5% VAT inclusive.</p>
               </div>
               
              
            </div>

        </div>
    </div>
  )
}

export default FundManagement


