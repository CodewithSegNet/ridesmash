import background from '../assets/background1.jpg'
import rider from '../assets/first.png'
import android from '../assets/android.svg'
import apple from '../assets/apple.svg'
import Button from './Button'
const GetApp = () => {
  return (
    <div className=' flex items-center text-center bg-slate-400 md:w-full relative overflow-hidden bg-green-90 bg-cover bg-center bg-no-repeat py-12 text-white sm:flex-row sm:gap-10 sm:py-10  xl:max-h-[598px] 2xl:rounded-5xl;'>
        <img src={background} alt='image' className='md:w-full md:h-[460px] resizeMode:"cover"' />
        <div className='absolute md:w-full w-full  h-full bg-black top-0 left-0 opacity-80 md:flex md:flex-row flex flex-col gap-3 px-3'>
           <div className="z-20 flex w-full flex-1 flex-col items-start text-center md:text-left justify-center gap-2 md:gap-4 md:px-12 px-6 pt-4 mt-[3rem] md:mt[0]">
              <h2 className="text-[40px] font-[900] text-center md:text-left leading-[100%] inter w-[100%] text-xl tracking-wide md:text-[40px] md:font-[900] md:leading-[100%] xl:w-[500px]"> Get RideSmash App free now!</h2>
              <p className="text-[16px] font-[400] w-[100%] text-gray-10 pb-3 md:pb-4 ">Available on ios and Android</p>
              <div className='flex w-full flex-row gap-3 whitespace-nowrap xl:flex-row md:justify-center md:items-center  '>

                  <Button
                    type="button"
                    title="Play store"
                    icon={android}
                    variant="border-gray-20 bg-green-90 py-3 px-4 text-sm md:text-md md:px-6 md:py-3 text-white"
                    full
                    color ="text-white"
                    
                  />
                  <Button
                    type="button"
                    title="Apple store"
                    icon={apple}
                    variant="border-white bg-white py-3 px-4 text-sm md:text-md md:px-6 md:py-3 text-primary"
                    full
                    color = "text-primary-600"
                  />

                
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">

              <img 
                src={rider} 
                alt=""
                width={900}
                height={1070}
                className='mt-[.8rem] md:mt-[4rem] lg:mt-[7rem]'
              />

            </div>
        
        </div>
    </div>
  )
}

export default GetApp