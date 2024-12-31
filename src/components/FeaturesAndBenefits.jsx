import { FaPaperPlane } from "react-icons/fa";
import quality from './../assets/quality.png'
import satisfaction from './../assets/satisfaction.png'
import expert from './../assets/expert.png'
// import canada from './../public/canadian.png'
// import traveller from './../public/traveller.png'
// import traveller from './../public/travellingboy.png'



const FeaturesAndBenefits = () => {

  const featuresList = [
    {id : '1', 'img' : quality, 'title' : 'Service options ', 'description1' : 'Smash Lite - an economical option ideal for value and efficiency .', 'description2' : 'Smash Executive - for comfort and luxury suitable for business class and  VIP .', 'description3' : 'Smash Classic - caters to individuals or groups .'},
    {id : '2', 'img' : satisfaction, 'title' : 'Ride Options  ', 'description1' : 'Ride now option, for instant pick up .', 'description2' : 'Ride later option for future schedule ride.', 'description3' : ''},
    
    {id : '3', 'img' : expert, 'title' : 'Payment options  ', 'description1' : 'Cash/Transfer', 'description2' : 'Card ', 'description3' : 'Special Option Wallet '},

    // {id : '4', 'img' : satisfaction, 'title' : ' Call or Chat Option', 'description1' : 'call or chat with the driver option which comes up immediately when a  driver accepts a ride request.'},
    
   
  ]

  const benefitsList = [
    {id : '1', 'img' : quality, 'title' : 'Micro pension for drivers  ', 'description' : 'Our Micro Pension for driver partners is unique and security a  better life after retirement. We are in partnership with  verifiable pension firm to secure a better life for our partner  drivers  Life Insurance .'},

    {id : '2', 'img' : satisfaction, 'title' : ' Wallet  ', 'description' : 'This feature is a payment option for riders who do not want to make payment by cash or bank card.  Wallet is funded by direct debit transfer from bank cards added to the app. When booking a ride, choose "wallet" and when trip is ended, payment is removed automatically.'},
    
    {id : '3', 'img' : expert, 'title' : 'Emergency Button ', 'description' : 'SOS Button for an emergency which comes up immediately when a driver accepts a ride request'},

    // {id : '4', 'img' : expert, 'title' : 'Location', 'description' : 'Amazingly, from the booking by the rider, the driver sees the location of the rider before picking negating the usual tradition of Drivers asking riders of their location after accepting request.'},
   
  ]

  return (
    
    <div className=' grid lg:grid-cols-2 grid-cols-1 md:gap-10 w-[100%] h-[100%] bg-red-100 items-center md:py-20 py-3 px-4 pb-10 '>
      <div className='flex max-w-screen-2xl mx-auto flex-col md:gap-3 md:ml-3 md:h-screen md:pb-[150px] md:px-8 w-[100%]'>
          {/* <div className="flex flex-row gap-3 items-center mt-10 ">
            <FaPaperPlane className="w-4 h-4 text-red-700 "/>
            <h3 className="lg:text-base text-sm text-[#020066] font-semibold">WHY CHOOSE US</h3>
          </div> */}
          <div className=" my-5 md:my-0 max-w-screen-2xl">
            <h1 className="inter font-bold md:text-3xl text-xl">Ridesmash Features</h1>
          </div>
          <div className="flex flex-col md:w-[100%] gap-3">
            {featuresList.map((item) => (

                <div key={item.id}  className="max-w-screen-2xl flex flex-row relative items-center justify-end pr-2">
                <div className=" flex absolute w-28 h-28 bg-blue-200 rounded-full top-4 left-0 items-center justify-center ">
                  <div className="flex w-24 h-24 bg-blue-700 items-center justify-center rounded-full">
                    <img src={item.img} alt="image" className="w-12 h-12"/>
                  </div>
                </div>
                <div className="w-[90%] bg-white rounded-xl max-w-screen-2xl flex-col flex md:gap-1 pr-3 md:pl-20 pl-24 pt-4 pb-4 h-40 md:h-48">
                    <h1 className="md:text-xl text-base">{item.title}</h1>
                    <h3 className="md:text-base text-[10px] md:text-sm text-gray-500">{item.description1}</h3>
                    <h3 className="md:text-base text-[10px] md:text-sm text-gray-500">{item.description2}</h3>
                    <h3 className="md:text-base text-[10px] md:text-sm text-gray-500">{item.description3}</h3>
                </div>


                </div>

            ))}
           
          </div>
          
      </div>

      <div className='flex flex-col md:gap-3 md:ml-3 md:h-screen md:pb-[150px] md:px-8'>
          {/* <div className="flex flex-row gap-3 items-center mt-10 ">
            <FaPaperPlane className="w-4 h-4 text-red-700 "/>
            <h3 className="lg:text-base text-sm text-[#020066] font-semibold">WHY CHOOSE US</h3>
          </div> */}
          <div className=" my-5 pt-[2rem] md:pt-0 md:my-0">
            <h1 className="inter font-bold md:text-3xl text-xl">Ridesmash Benefits </h1>
          </div>
          <div className="flex flex-col md:w-[100%] gap-3">
            {benefitsList.map((item) => (

                <div key={item.id}  className=" flex flex-row relative items-center justify-end pr-2">
                <div className=" flex absolute w-28 h-28 bg-blue-200 rounded-full top-4 md:top-6 left-0 items-center justify-center ">
                  <div className="flex w-24 h-24 bg-blue-700 items-center justify-center rounded-full">
                    <img src={item.img} alt="image" className="w-12 h-12"/>
                  </div>
                </div>
                <div className="w-[90%] bg-white rounded-xl flex-col flex md:gap-1 pr-3 md:pl-20 pl-24 pt-4 pb-4 h-40 md:h-48">
                    <h1 className="md:text-xl text-base">{item.title}</h1>
                    <h3 className="md:text-base text-[10px] md:text-sm text-gray-500">{item.description}</h3>
                </div>


                </div>

            ))}
           
          </div>
          
      </div>
    
    </div>
  )
}

export default FeaturesAndBenefits