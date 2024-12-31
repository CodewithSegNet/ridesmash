import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaSquare } from "react-icons/fa6";

export default function BecomeDriverMore() {
  return (
    <div className='flex md:w-full flex-col md:flex-row gap-6 md:p-12 md:h-screen p-6'>
        <div className='flex md:w-1/2 bg-gray-200 max-w-screen-2xl mx-auto md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
            <h1 className='text-xl md:text-3xl text-gray-700 md:font-bold'>
            Vehicle and Driver partners requirements
            </h1>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-base md:text-xl text-gray-700'>
                To complete driver partner signup successfully, a driver partner will need to  provide the necessary documents and meet the requirements below:  
                </h1>
                <div className='flex md:flex-col flex-col'>

                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={20} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-xl'>Driver requirements </h1>
                    </div>
                </div>
                <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                    <p>Hold a valid driver’s license. </p>  
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='w-6 h-6 items-center'>
                            <FaSquare size={10} color='black' />
                        </div>
                        
                    <p>Attend driver training for service quality and use of the Ridesmash driver application. </p>  
                    </div>
                </div>

                </div>

                <div className='flex md:flex-col flex-col'>

                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={20} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-xl'>Additional Documents for Lagos drivers only</h1>
                    </div>
                </div>
                <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>LASDRI Card</p>  
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaSquare size={10} color='black' />
                        <p>Driver Badge and LASRRA Card</p>  
                    </div>
                </div>

                </div>
              
            </div>
            
        </div>


        <div className='flex md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
           
            <div className='flex flex-col gap-3 '>

                <div className='flex md:flex-col flex-col'>

                        <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                            <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                            <FaCheckCircle size={20} color='blue' />
                            </div>  
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-gray-700 text-base md:text-xl'>Vehicle requirements</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                           
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Vehicle License </p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Certificate of Road Worthiness</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Insurance Certificate</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Proof of Ownership</p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Vehicle Inspection Report</p>  
                            </div>
                        </div>

                </div>

            <div className='flex md:flex-col flex-col'>

            <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                <FaCheckCircle size={20} color='blue' />
                </div>  
                <div className='flex flex-col gap-3'>
                    <h1 className='text-gray-700 text-base md:text-xl'>Additional Documents for Lagos</h1>
                </div>
            </div>
            <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
            
                <div className='flex flex-row gap-2 items-center'>
                    <FaSquare size={10} color='black' />
                <p>State Hackney Permit</p>  
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <FaSquare size={10} color='black' />
                <p>Vehicle Body Tag for all routes</p>  
                </div>
                
            </div>

            </div>

            </div>
            
        </div>
        
        
    </div>
  )
}
