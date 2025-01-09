import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const Blog1 = () => {

  return (
    <div className="flex md:px-14 p-4  mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-gray-500 mb-6 leading-normal'>THE ECONOMIC BENEFITS OF E-HAILING AND WHY RIDESMASH IS THE ACCLAIMED PLATFORM FOR SELF – REGULATED WORK SCHEME</h1>

                <p className='text-gray-500 text-md mb-8 text-justify'>With all the hype and the news around E-hailing in Africa cities, especially the 2 major countries operation in Nigeria and Ghana, it has become pertinent to  underscore the major benefits of this business to the public and why Ridesmash has become the Industry benchmark for service delivery and productivity vis-à-vis International best practice.</p>

                <p className='text-gray-500 text-md mb-8  text-justify'>While the BRT may have dedicated routes and bus stops for its operation, E-hailing mobility system is better in comparison, because although it uses the general road network and bus stops, there is almost always a single rider or at most 2 to 3 related riders who may demand drop-offs before the final destination. Thus, E-hailing system saves productive time.</p>

                <p className='text-gray-500 text-md mb-8  text-justify '> In peculiar cases, like what obtains in Nigeria and in some African countries, checkpoints by government establishments like the police, Road Safety Corps and vehicle inspection office are always on the neck of the drivers of commercially operated vehicles. This is not so with E-hailing mobility system, the E-hailing is a framework founded upon stringent terms of operations and must operate within such terms of its license must not be revoked. For this reason, it is less likely that E-hailing Mobility system would face such level of interference from government established agencies.</p>

                <p className='text-gray-500 text-md mb-8  text-justify '> 
                The rider on an E-hailing mobility System by the experience of Excellence, comfort and pleasure has created in himself a sense of self-worth, that he has been able work hard to give himself a ride-hailing treat. This sense of self-worth is a motivation for the rider to perhaps work harder so he can take more rides, it is an economic benefits.
                Arguably the pre-eminent ethos of E-hailing –- the concept of start and stop when you want–-is a formidable influencer in the E-hailing business. It enables people to free their time to do other things and take up E-hailing at their own time. It means those in formal employment can ride hail after their official hours and still make money.
                .</p>

                <p className='text-gray-500 text-md mb-8 text-justify '> On the part of the rider and specifically on Ridesmash, the major economic benefits are that all the charges are incorporated into the bill shown on the system, and there are no hidden charges. The rider is aware of how he is charged on Ridesmash as he enjoys the comfort and convenience of a cozy interior circumscribed by privacy and security
                .</p>


              
            </div>

        </div>
    </div>
  )
}

export default Blog1


