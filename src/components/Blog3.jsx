import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const Blog3 = () => {

  return (
    <div className="flex md:px-14 mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-gray-500 mb-5 leading-normal'>INTRODUCING THE RIDESMASH APP</h1>

                <p className='text-gray-500 text-md mb-8 text-justify'>The Access Control System of Nigeria’s  Premium E-hailing Company  In the words of Will Foster, “quality is never an accident, it is always the result of  high intention, sincere effort, intelligent direction and skillful execution, it  represents the wise choice of many alternatives, the cumulative experience of  many masters of craftsmanship”. This is the summary of both the Ridesmash  framework and the Ridesmash app, an expression of the meeting point of an  investment platform perfection and turnkey digital product versatility.  
                </p>

                <p className='text-gray-500 text-md mb-8 text-justify'>
                As the access control engine of Nigeria’s premium E-hailing Company, the  Ridesmash app is embodiment of impregnable security, genuine rider/driver self service, powerful navigation machine, and real time text collaboration that  facilitate visitors ease-of-use, multi-dimensional input system, and unhindered 
                flow of input information. 
                </p>

                <p className='text-gray-500 text-md mb-8 text-justify'>The Ridesmash app exhibits the do-it-yourself characteristics of a superior digital  masterpiece that caters not only for knowledgeable IT persons but also for  persons at app-usage starter echelon. The in-built responsive facility propels the  ability to input details with ease on dedicated field bars that carry system- aided  functionality for an amazing visitor experience.  Reposed upon an industry – top – level database system the Ridesmash app  operability is simply phenomenal. It delivers first hand efficiency and all- round  effectiveness to all users, ushering stakeholders -– riders, drivers and partners –  into a world of self regulated participation in Nigeria’s emerging international –  class E-hailing business that wins on excellent service delivery at all times. Pre-eminant among the excellent features of Ridesmash app, is the distinct 
                design that can enable even persons of zero knowledge in E-hailing to make  near-accurate guesses as to what it’s all about.   </p>          


                <p className='text-gray-500 text-md mb-8 text-justify'>
                The app imparts knowledge via  its design, dispenses it by the high readability-enabling outlay and releases its call to action through its eye-popping framework. 
                Though there is an inherent customer experience that endears it to the mind of  users of all categories, yet the beauty delivered by the design, braced with  industry-best features and functionalities that tops international best practice, is  simply legendary. 
                The Ridesmash app is available both on the IOS store and Android play store. 
                </p>

                <p className='text-gray-500 text-md mb-8 text-justify'> 
                Download Ridesmash app now
                </p>

                
            </div>

        </div>
    </div>
  )
}

export default Blog3


