import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function SafetyContentMiddle() {
  return (
    <div className='flex max-w-screen-2xl py-[4rem] mx-auto md:w-full flex-col md:flex-row gap-6 md:p-12 md:h-screen p-6'>
        <div className='flex max-w-screen-2xl mx-auto md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>
           
            <p className='text-sm'>
            <span className='text-md text-primary font-bold'>Ridesmash app</span> will always display your  driver’s personal info (name and photo), and car info (license plate, make,  model, and color).  Before entering the cab make sure the license plate and car make and model  match the info displayed in your app. Verify your driver’s name with the name of  the driver in the app Or you can also ask them to verify your name or destination.  If you’re having trouble finding your driver, feel free to text or call them through  the RIDESMASH app. 
            </p>
            <p className='text-sm'>
            We value your feedback. Riders and drivers can rate each other after every ride. Your feedback is important, kindly feel free to let us know your experience if  something about your experience wasn’t right. Know that your ratings are always  anonymous. We use your feedback to improve the quality of all rides and to  decide what actions should be taken for the parties involved. If you rate a driver  three stars or fewer, you’ll never be matched with them again through the app. 


            </p>

        </div>
        <div className='flex md:w-1/2 bg-gray-200 md:h-full flex-col md:flex-col md:gap-6 md:p-16 rounded-xl p-6 gap-3'>

            <p className='text-sm'>
            If something wasn’t right, we want to know so we can offer any additional help.  We deactivate low rated rides from our platform in other to satisfy our riders as  well as drivers. But if you enjoyed your ride, you could choose to be matched with  them in the future. We have a dedicated Safety team that’s available to speak  with you and assist you. 
            </p>

            <div>
                <h1 className='text-md font-bold text-primary'>
                As a Rider… 
                </h1>
                <p className='text-sm'>1. Request for a ride from somewhere safe</p> 
                <p className='text-sm'>2. Make sure it is the right car.</p>
                <p className='text-sm'>3. Use your seat belt, even for short trips.</p>
                <p className='text-sm' >4. If a driver makes you feel uncomfortable, you have the option to end the  ride at anytime.</p>
                <p className='text-sm' >5. Your driver can’t see your contact details in their ride history.</p>
                <p className='text-sm'>6. Check for vehicles, bikes, and people before exiting the vehicle and 
                        make sure you haven’t left anything behind.
                </p>
                <p className='text-sm'>Thanks for riding with RIDESMASH considering joining us? Do visit us today.</p>
 
 
 
 
 

            </div>
           
            
        </div>
        
        
    </div>
  )
}
