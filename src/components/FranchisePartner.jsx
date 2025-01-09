import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const FranchisePartner = ({currency, country}) => {

  return (
    <div className="flex md:px-14 p-4 max-w-screen-2xl mx-auto py-[4rem] md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-md font-bold text-primary mb-5 leading-normal'>Unleash the Ridesmash Revolution: Be Our Franchise Partner across Africa!</h1>

                <p className='text-gray-500 text-md mb-4'>Ridesmash is Africa's rising star in the e-hailing app market, and we're looking for passionate entrepreneurs to join our journey!  We offer a dynamic franchise opportunity for those who share our vision of making transportation seamless, affordable, and empowering across the continent.</p>

                
                <p className='text-primary text-md mb-4 md:font-bold'>Why Partner with Ridesmash?</p>

                <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Proven Business Model: </span> Benefit from our established and successful business model, already disrupting the African transportation landscape.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Local Expertise - Global Support: </span>We understand the unique needs of African markets, and provide comprehensive training and ongoing support to ensure your franchise thrives.</p>
               </div>
              <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Technology at Your Fingertips: </span>Leverage our cutting-edge Ridesmash app, featuring intuitive interfaces for drivers and riders, efficient routing systems, and secure payment options.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Be Your Own Boss with Regional Support: </span>Enjoy the freedom and satisfaction of running your own business with the backing of a strong regional partner.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Multiple Revenue Streams: </span>Earn from ride commissions, delivery fees, and car rental services, all within the Ridesmash ecosystem..</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Make a Positive Impact: </span> Empower local drivers, entrepreneurs, and communities by fostering a thriving transportation network within your region.</p>
               </div> 
               
               <p className='text-primary text-md mb-4 md:font-bold'>What We Offer Our Franchise Partners:</p>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Comprehensive Training: </span>Our dedicated team provides in-depth training on the Ridesmash platform, operations, marketing strategies, and driver recruitment.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Ongoing Support: </span>You'll have access to a team of experts for continuous support in marketing, legal compliance, and technical assistance.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Regional Brand Building: </span>We'll collaborate with you on developing targeted marketing campaigns to establish a strong Ridesmash presence in your territory.</p>
               </div> 
               
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Technology & App Access: </span>Benefit from our continually updated and user-friendly Ridesmash app technology for drivers, riders, and your own franchise management.</p>
               </div>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Discounted Fees and Revenue Sharing: </span>Enjoy competitive franchise fees and a revenue-sharing model that incentivizes your success.</p>
               </div> 
               <p className='text-primary text-md mb-4 md:font-bold'>Who We're Looking For:</p>
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Entrepreneurs with Vision: </span>We seek passionate individuals with a strong business acumen and a commitment to excellence.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Local Market Knowledge: </span>Understanding your region's demographics, transportation landscape, and business environment is crucial.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <FaSquare size={8} color='gray' />
                  <p className='text-gray-500 text-md '><span className='font-[500]'>Leadership and Communication Skills: </span>The ability to build a strong local team and effectively communicate Ridesmash's value proposition is key.</p>
               </div> 
                
               <div className='flex  md:flex-row gap-2 mb-4 items-center '>
                  <p className=' text-md md:text-xl text-primary md:font-bold'>Ready to Join the Ridesmash Family?</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-600 text-xl'>If you're a forward-thinking entrepreneur who thrives in a dynamic environment, we encourage you to take the next step. Send us an email (franchisepartners@ridesmash.com) to learn more about the application process and the exciting opportunities that await you as a Ridesmash franchise partner.</p>
               </div> 
               <div className='flex  md:flex-row gap-2 md:items-center mb-4 items-center '>
                  <p className='text-gray-600 text-md '>Together, let's revolutionize the way Africa moves!</p>
               </div> 
              
            </div>

        </div>
    </div>
  )
}

export default FranchisePartner


