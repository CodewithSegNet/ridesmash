import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaSquare } from "react-icons/fa6";

export default function AcceptedVehicle() {
  return (
    <div className='flex max-w-screen-2xl mx-auto md:w-full flex-col md:flex-row gap-6 md:p-12 md:h-screen p-6 pb-[5rem] md:pb-[5rem]'>
        <div className='flex md:w-1/2 max-w-screen-2xl mx-auto w-full bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
            <h1 className='text-xl md:text-3xl text-gray-700 md:font-bold'>
            Accepted Vehicles
            </h1>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-base md:text-md text-gray-700'>
                List of accepted vehicle for Ridesmash transport service:  
                </h1>
                <div className='flex md:flex-col flex-col'>

                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pb-1 md:pb-1'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-md'>Accepted vehicles for Ridesmash Lite.</h1>
                    </div>
                </div>
                <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>The vehicle is a model between 2002 and 2004. </p>  
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>The vehicle is a 4-door sedan or SUV. </p>  
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>The vehicle is in excellent condition.</p>  
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>The vehicle must accommodate at least 4 passengers.</p>  
                    </div>
                </div>

                </div>

              
            </div>
            
        </div>


        <div className='flex md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
           
            <div className='flex flex-col gap-6 '>

                <div className='flex md:flex-col flex-col'>

                        <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                            <div className='flex items-center md:w-5 md:h-5 md:pt-1 pb-1 md:pb-1'>
                            <FaCheckCircle size={17} color='blue' />
                            </div>  
                            <div className='flex flex-col gap-6'>
                                <h1 className='text-gray-700 text-base md:text-md'>Accepted vehicles for Ridesmash Classic. </h1>
                            </div>
                        </div>
                        <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                           
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is a model between 2008 and 2012.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is a 4-door sedan or SUV.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is in excellent condition.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                                <FaSquare size={10} color='black' />
                                </div>
                              <p>The vehicle must accommodate at least 4 passengers.</p>  
                            </div>
                           
                        </div>

                </div>

                <div className='flex md:flex-col flex-col'>

                        <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                            <div className='flex items-center md:w-5 md:h-5 md:pt-1 pb-1 md:pb-1'>
                            <FaCheckCircle size={17} color='blue' />
                            </div>  
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-gray-700 text-base md:text-md'>Accepted vehicles for Ridesmash Executive.</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                           
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is no older than 5 years.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is a 4-door sedan or SUV.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>The vehicle is in excellent condition.</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                            <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                                <FaSquare size={10} color='black' />
                                </div>
                              <p>The vehicle must accommodate at least 4 passengers.</p>  
                            </div>
                           
                        </div>

                </div>

            </div>
            
        </div>
        
        
    </div>
  )
}
