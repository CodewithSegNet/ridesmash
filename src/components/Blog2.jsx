import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const Blog2 = () => {

  return (
    <div className="flex md:px-14 mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
{/*            
            <div className=" md:w-1/2">
                <img src={delivery} alt='' className=' rounded-3xl'/>
            </div> */}

            <div
            
            className=' md:w-full'>
                <h1 className='md:text-4xl text-2xl font-bold text-gray-500 mb-5 leading-normal'>THE SMART WAY TO MAKE BIG BUCKS</h1>

                <p className='text-gray-500 text-md mb-8 text-justify'>The digital revolution is innocent. The races of the world are not segregated by the information communication phenomenon. Today, a Congolese peasant has equal market opportunity as the British scholar, everybody operates in a global village connected via the  information superhighway. The regrettable difference is that, like in  every situation, urgency positions people based on time of arrival. Our  world is now located on the cyberspace. Those who embrace the  digital revolution are empowered, those who do not are watching the  brick and mortar system collapse on them. Failure to move at the  pace of the world-changing digital transformation brings abject  poverty to people, death to businesses and chaos to governments. </p>

                <p className='text-gray-500 text-md mb-8 text-justify'>This is why the traditional taxi system in Nigeria is dead and gone. On the other hand, the likes of Uber have succeeded to become  multinationals beyond the shores of America for the same reason. Are  you seeing the big picture here? </p>

                <p className='text-gray-500 text-md mb-8 text-justify'> The pendulum has swung to Nigeria through Ridesmash ---- a world class E-hailing outfit with premium-class operations in pleasure ride. 
                This creationism from Smash Group is exclusively for those who love to 
                make big money. Across major cities in Nigeria partners only have to 
                log on to the platform via the Ridesmash app and do business on the 
                best terms ever. Ridesmash is the freedom to make big bucks. You 
                would be so rich before others arrive.
                </p>

                
            </div>

        </div>
    </div>
  )
}

export default Blog2


