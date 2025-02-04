import rider1 from './../assets/payout.webp'
import rider2 from './../assets/people.webp'
import rider3 from './../assets/person.webp'
const Features = () => {
  return (
    <div className="flex md:px-12 px-4 py-6 md:h-screen md:bg-blue-100 md:justify-center md:items-center md:w-full ">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0">
            <div className=" lg:w-1/4 md:mr-6">
                <h3 className="text-4xl text-primary font-bold mb-3 roboto">Why Riders Choose us</h3>
                <p className="text-base text-tertiary md:text-lg">Ridesmash: The future of rideshare is here. We're rapidly growing for a reason! Riders and drivers love our service. Experience the difference. </p>
            </div>
            <div className="w-full lg:w-3/4">
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider1} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-3 mt-5'>Convenient ride home</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>All our cars are impeccably clean and refreshingly cool. Expect to experience a ride in style!</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider2} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-3 mt-5'>Safety Guaranteed</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>Your safety is our priority. Our drivers are rigorously trained to follow all security measures, ensuring you arrive home safely.</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider3} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-3 mt-5'>Discount price on trips </h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>Unlock exclusive benefits as a regular rider! Enjoy a monthly 25% discount and other perks just for our valued customers.</h5>
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Features