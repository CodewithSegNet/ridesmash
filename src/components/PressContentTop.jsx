import React from 'react'
import back from "./../assets/business.jpg"

export default function PressContentTop() {
  return (
    <div className='bg-black w-full'>
    <div className='flex max-w-screen-2xl mx-auto w-full md:w-full py-12 px-6 md:h-1/3 bg-black md:flex-row flex-col'>
      <div className='max-w-screen-2xl mx-auto flex w-full md:w-full md:h-1/3 bg-black md:flex-row flex-col'>
      <div className='flex  md:w-1/2 w-full md:relative flex-col gap-3'>
            <img src={back} alt='' className='w-[400px] '/>
            <div className='flex md:absolute md:w-[410px] lg:w-[500px] md:h-1/2 bg-white md:justify-center lg:top-1 md:top-[-10px] md:right-[-20px] lg:right-10 md:px-6 lg:px-12 opacity-95 flex-col px-3'>
                <h1 className='text-gray-700 text-lg md:text-2xl roboto md:font-semibold'>Introducing Ridesmash</h1>
                <h3 className='text-gray-500 text-base md:text-md'>The new ride sharing company that's launching in NIGERIA. </h3>
            </div>
        </div>
        <div className='flex md:w-1/2 md:pl-8 w-full my-2'>
          <p className='text-gray-400 md:text-md'>
              We are excited to announce the launch of RIDESMASH, a new ride sharing company that will operate in 40 countries across Africa. We are committed to providing a safe, reliable, and affordable transportation option for people across the continent.
          </p>
        </div>
      </div>
    </div>
    </div>

  )
}
