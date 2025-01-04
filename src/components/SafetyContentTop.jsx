import React from 'react'
import back from "./../assets/safety.jpg"

export default function SafetyContentTop() {
  return (
    <div className='flex w-full md:w-full p-12 md:h-1/3 bg-black md:flex-row flex-col'>
        <div className='flex max-w-screen-2xl mx-auto  md:w-1/2 w-full md:relative flex-col gap-3'>
            <img src={back} alt='' className='w-[400px] '/>
            <div className='flex md:absolute md:w-[500px] md:h-1/2 bg-white  md:justify-center md:top-10 md:right-10 md:px-12 opacity-70 flex-col px-3'>
                <h1 className='text-black text-lg md:text-2xl roboto md:font-semibold'>WE ARE CONCERNED. </h1>
                <h3 className='text-gray-700 text-base md:text-lg'>YOUR SAFETY IS IMPORTANT TO US </h3>
            </div>
        </div>
        <div className='flex md:w-1/2 w-full my-2'>
          <p className='text-gray-400 md:text-lg'>
          Throughout every step of your RIDESMASH experience, we will always be here for  you. As a driver before you can partner with us or request ride: We check every  single driver and if a driver doesn’t pass our professionally administered  background checks, they can’t join us. It is as simple as that. Drivers must submit  a valid driver's license, vehicle insurance, and more. Any driver whose  background check shows crimes or other disqualifying felonies is not allowed to  drive on the platform. To remain on our platform, active drivers need to pass  another background check every 12 months. 
          </p>
        </div>
    </div>
  )
}
