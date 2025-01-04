import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaSquare } from "react-icons/fa6";

export default function BecomeDriver() {
  return (
    <div className='flex max-w-screen-2xl mx-auto md:w-full flex-col md:flex-row gap-6 md:p-12 md:h-screen p-6'>
        <div className='flex m md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
            <h1 className='text-xl md:text-3xl text-gray-700 md:font-bold'>
                Become A Ridesmash Driver Partner
            </h1>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-base md:text-md text-gray-700'>
                To become a driver partner on Ridesmash with your vehicle, kindly follow the steps below. 
                </h1>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-500 text-base md:text-md'>Download the App on Play store with “Ridesmash driver” Or Apple IOS with “Ridesmash driver”</h1>
                    </div>
                </div>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-500 text-base md:text-md'> Register with telephone number and email address</h1>
                    </div>
                </div>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-500 text-base md:text-md'>Upload profile picture with your face clearly displayed </h1>
                    </div>
                </div>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-500 text-base md:text-md'>Upload side and front (plate number should show clearly) pictures of the vehicle </h1>
                    </div>
                </div>
               
            </div>
            
        </div>
        <div className='flex md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
           
            <div className='flex flex-col gap-3 '>

                <div className='flex md:flex-col flex-col'>

                        <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                            <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                            <FaCheckCircle size={17} color='blue' />
                            </div>  
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-gray-700 text-base md:text-md'>Upload the following documents </h1>
                            </div>
                        </div>
                        <div className='flex md:flex-col flex-col gap-2 md:ml-12 '>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Valid Driver’s License </p>  
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaSquare size={10} color='black' />
                              <p>Vehicle License  </p>  
                            </div>
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
                              <p>Tinted Permit</p>  
                            </div>
                        </div>

                </div>

                
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-md'>After uploading the required documents above, you will be contacted with date of training and physical verification exercise and vehicle assessment.</h1>
                    </div>
                </div>
                 <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='flex items-center md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={17} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-md'>After successful verification, you go Live </h1>
                    </div>
                </div>
               {/* <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={20} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-xl'>The ability to track their rides in real time</h1>
                    </div>
                </div>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={20} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-xl'>Access to a large customer base</h1>
                    </div>
                </div>
                <div className='flex  md:flex-row gap-2 md:gap-4 md:items-start mb-4 items-center'>
                    <div className='md:w-5 md:h-5 md:pt-1 pt-2'>
                    <FaCheckCircle size={20} color='blue' />
                    </div>  
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-gray-700 text-base md:text-xl'>The opportunity to earn extra income</h1>
                    </div>
                </div> */}

            </div>
            
        </div>
        
        
    </div>
  )
}
