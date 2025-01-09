import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const FleetManagement = ({currency, country}) => {

  return (
    <div className="flex md:px-14 p-4 max-w-screen-2xl mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>Ridesmash Fleet Management:</h1>

                <p className='text-gray-500 text-md mb-4'>Ridesmash Fleet Management: Powering Your Business with Efficiency.</p>

                <p className='text-gray-500 text-md mb-4'>Ridesmash is committed to empowering not just drivers, but alsofleet
                owners and businesses in Africa. Our comprehensive fleet management solutions are designed to streamline operations, maximize efficiency, and boost your bottom line.</p>

                <p className='text-primary text-md mb-4 md:font-bold'>Why Choose Ridesmash Fleet Management?</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Seamless Integration: </span> Our fleet management systemintegrates
                    seamlessly with the Ridesmash driver app, providing centralizedcontrol and real-time data.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Simplified Driver Management: </span>Easily recruit, onboard, and manageyour driver fleet, all within one platform. Track driver performance, monitor safety metrics, and ensure compliance.</p>
               </div>
              <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Optimized Operations: </span>Leverage our intelligent dispatch systemtoassign rides efficiently, minimize wait times, and maximize driver productivity.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Data-Driven Insights: </span>Gain valuable insights into your fleet performancethrough comprehensive reports and analytics. Track key metrics likedriver earnings, trip details, and maintenance schedules.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Reduced Costs: </span>Our platform helps optimize routes, minimize fuel consumption, and streamline maintenance processes, leadingtosignificant cost savings for your fleet.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Enhanced Safety:</span> Ridesmash prioritizes safety. Our features includedriver background checks, in-app emergency buttons, and tripmonitoring for added peace of mind.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Dedicated Support: </span>Our team is here to assist you with any questions or
                  technical issues you may encounter.</p>
               </div> 
               <p className='text-primary text-md mb-4 md:font-bold'>Benefits for Fleet Owners and Businesses:</p>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Reduced Costs: </span>Increased Efficiency: Manage your fleet effortlessly with a centralizedplatform and real-time data at your fingertips.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Maximized Profits: </span>Optimize operations, reduce costs, and improvedriver productivity to boost your bottom line.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Improved Driver Satisfaction: </span>Provide drivers with a user-friendly app, efficient dispatch system, and clear communication channels.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Enhanced Customer Service: </span>Offer your customers a smooth andreliable rideshare experience with faster pick-up times and efficient
                  service.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Data-Driven Decision Making: </span>Make informed decisions about your fleet based on real-time insights and comprehensive analytics.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Scalability: </span>Our platform scales with your business, allowing you toeasilyadd or remove vehicles as needed.</p>
               </div> 
               <p className='text-primary text-md mb-4 md:font-bold'>Ridesmash Fleet Management Features:</p>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Driver Recruitment & Onboarding: </span>Simplify the process of recruiting, screening, and onboarding new drivers to your fleet.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Intelligent Dispatch System: </span>Assign rides efficiently based on driver
                location, availability, and traffic conditions.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Real-Time Tracking: </span>Monitor driver location, trip progress, andestimatedarrival times in real-time.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Performance Tracking: </span>Analyze driver performance metrics likecompletion rates, earnings generated, and customer feedback.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Route Optimization: </span>Optimize routes to minimize travel time, fuel
                consumption, and driver fatigue.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Automated Reporting: </span>Generate comprehensive reports on driver
                performance, fleet activity, and earnings.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>Maintenance Management: </span>Schedule and track maintenancetasks
                for your fleet vehicles to ensure optimal performance.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500] text-primary'>In-App Communication: </span>Communicate with your drivers directly
                through the Ridesmash app for clear and efficient task management.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 mb-4 items-center '>
                  <p className=' text-md md:text-xl text-primary md:font-bold'>Ready to Take Your Fleet to the Next Level?</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-600 text-xl'>Contact Ridesmash today (info@ridesmash.com) to learn moreabout
                our fleet management solutions and how we can help your business
                thrive. We offer customized plans to suit the specific needs of your fleet, ensuring a successful partnership.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-600 text-md '>Join the Ridesmash revolution and redefine the future of fleet
                management in Africa!</p>
               </div> 
              
            </div>

        </div>
    </div>
  )
}

export default FleetManagement


