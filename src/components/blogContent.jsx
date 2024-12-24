import rider1 from './../assets/person.jpg'
import rider2 from './../assets/bucks.jpg'
import rider3 from './../assets/cars.png'
import { Link } from 'react-router-dom'

const BlogContent = () => {
  return (
    <div className="flex md:px-28 px-4 pb-[4rem] xl:pb-[5rem] xl:pt-[4rem] md:py-6 md:h-screen md:bg-blue-100 md:justify-center md:items-center md:w-full ">

       

        <div className="flex flex-col md:flex-col gap-3 md:gap-0">

        <div className="flex pt-[4rem] pb-[1.5rem] md:w-full md:p-6 md:items-center items-start md:justify-center flex-col">
            <h3 className="text-4xl md:text-6xl text-primary text-center w-[100%] font-bold mb-3 roboto">Blogs</h3>
            <p className="text-base text-tertiary w-[100%] text-center md:text-lg">Latest news and Information on Ridesmash activities, engage. </p>
        </div>

         
            <div className="w-full md:w-full md:flex-row flex-col gap-2 md:gap-2">
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-16 gap-8 md:items-center md:justify-center'>
                    <Link to='/blog'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider1} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-sm md:text-sm font-semibold text-gray-500 px-3 mt-5'>THE ECONOMIC BENEFITS OF E-HAILING AND WHY RIDESMASH IS THE ACCLAIMED PLATFORM FOR SELF – REGULATED WORK SCHEME</h5>
                            <h5 className='text-sm md:text-sm text-gray-400 px-3 mt-3'>With all the hype and the news around E-hailing in Africa cities, especially the 2 major countries operation in Nigeria and Ghana!</h5>
                        </div>
                    </div>
                    </Link>
                    <Link to='/blog'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider2} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-sm md:text-sm font-semibold text-gray-500 px-3 mt-5'>THE SMART WAY TO MAKE BIG BUCKS</h5>
                            <h5 className='text-sm md:text-sm text-gray-400 px-3 mt-3'>The digital revolution is innocent. The races of the world are not segregated by the information communication phenomenon. Today, a Congolese peasant has equal market opportunity as the British scholar, everybody operates in a global village connected via the  information superhighway.</h5>
                        </div>
                    </div>
                    </Link>
                    <Link to='/blog'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider3} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-sm md:text-sm font-semibold text-gray-500 px-3 mt-5'>INTRODUCING THE RIDESMASH APP</h5>
                            <h5 className='text-sm md:text-sm text-gray-400 px-3 mt-3'>The Access Control System of Nigeria’s  Premium E-hailing Company  In the words of Will Foster, “quality is never an accident, it is always the result of  high intention, sincere effort, intelligent direction and skillful execution, it  represents the wise choice of many alternatives, the cumulative experience of  many masters of craftsmanship”.</h5>
                        </div>
                    </div>
                    </Link>
                    {/* <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl  items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div className='flex w-[100%] h-[100%] flex-col'>
                            <img src={rider2} alt="" className=" h-2/5 rounded-tl-3xl rounded-tr-3xl"/>
                            <h5 className='text-2xl font-semibold text-primary px-3 mt-5'>Safety Guaranteed</h5>
                            <h5 className='text-lg text-gray-600 px-3 mt-3'>Your safety is our priority. Our drivers are rigorously trained to follow all security measures, ensuring you arrive home safely.</h5>
                        </div>
                    </div> */}
                   
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default BlogContent