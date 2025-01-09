import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const FleetManagementSection = ({currency, country}) => {

  return (
    <div className="flex md:px-14 p-4  mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>How Fleet works:</h1>

                <p className='text-gray-500 text-md mb-4'>We are professionals in managing fleets of vehicles for partners . Fleet Management is categorized into two, Pay as you Go(Rentals) and Pay to Own (Hire Purchase) </p>

                <p className='text-primary text-md mb-4 md:font-bold'>Pay as you Go (Rental):</p>

                <p className='text-gray-500 text-md '> This is designed for car owners who want Ridesmash to manage their vehicle with a weekly return. </p>

                <p className='text-primary text-md mb-4 md:font-bold md:my-3'>Features:</p>


                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>No more hassle with drivers</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Direct Payment on weekly basis</p>
               </div>

               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Professional Management of vehicles</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Timely response on Partners returns on Investment</p>
               </div>

               <p className='text-primary text-md mb-4 md:font-bold'>REQUIREMENT FOR PAY AS YOU GO (RENTALS) FOR PARTNERS </p>

                
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Partners identification card </p>
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
                  <p className='text-gray-500 text-md '>Comprehensive Insurance (Compulsory)</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Other Vehicle Particulars</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '>Account Details for Payment</p>
               </div>


               <p className='text-primary text-md mb-4 md:font-bold'><span className='text-red-500'>Note:</span> We can handle all comprehensive Insurance if Partners have no Insurance Cover.</p>


                
               <p className='text-primary text-md mb-4 md:font-bold'>Pay to Own::</p>

                <p className='text-gray-500 text-md '> This is a purchase system where our partners provide vehicles to be leased to our qualified drivers on High Purchase of 18 -24 months after which the driver claims ownership of the vehicle.  </p>

                <p className='text-primary text-md mb-4 md:font-bold md:my-3'>Features:</p>


                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                <FaSquare size={8} color='gray' />
                <p className='text-gray-500 text-md '>Professional Managers</p>
                </div>
                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                <FaSquare size={8} color='gray' />
                <p className='text-gray-500 text-md '>Monthly repayment</p>
                </div>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                <FaSquare size={8} color='gray' />
                <p className='text-gray-500 text-md '>Agreed and structured returns of investment between 45 -60% over a period of time. </p>
                </div>
               

                <p className='text-primary text-md mb-4 md:font-bold'>Requirement for Hire Purchase of Partners </p>


                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                <FaSquare size={8} color='gray' />
                <p className='text-gray-500 text-md '>Partners identification card </p>
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
                <p className='text-gray-500 text-md '>Comprehensive Insurance (Compulsory)</p>
                </div>
                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                <FaSquare size={8} color='gray' />
                <p className='text-gray-500 text-md '>Other Vehicle Particulars</p>
                </div>
                <p className='text-primary text-md mb-4 md:font-bold'><span className='text-red-500'>Note:</span> We can handle all comprehensive Insurance if Partners have no Insurance Cover.</p>

              
            </div>

        </div>
    </div>
  )
}

export default FleetManagementSection


