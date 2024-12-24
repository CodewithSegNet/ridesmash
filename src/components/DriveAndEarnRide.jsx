import driver from './../assets/driver-ride.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import axios from 'axios'

const DriveAndEarn = ({currency, country}) => {


  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("NGN"); 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(400000);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
  console.log('from:', from)

  useEffect(() => {
    axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then((res) => {
            setInfo(res.data[from]);
        })
}, [from]);

  useEffect(() => {
    // setOptions(Object.keys(info));
    convert();
}, [])

// Function to convert the currency
function convert() {
    var rate = info[to];
    setOutput(input * rate);
}

console.log( 'output:', output)


  return (
    <div className="flex md:px-14 p-4 md:h-screen mx-auto my-24 md:my-0 md:items-center md:justify-center bg-white">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={driver} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.4}}
            
            className=' md:w-2/5'>
                <h1 className='md:text-4xl text-3xl font-bold text-gray-600 mb-5  leading-tight lg:leading-normal roboto'>Earning {currency}{currency === "GHS" ? "5,715" : "400,000"} Monthly Guaranteed,<span className='md:text-4xl text-3xl font-bold text-gray-500'>With Ridesmash Expert.</span></h1>
                <p className='text-gray-400 text-lg mb-7'>We guide our drivers throughexpert procedures and training to earn as much as {currency}{currency === "GHS" ? "5,715" : "400,000"} monthly, Our driving process is reliable and beneficial. </p>
                <button className='bg-secondary text-black py-2 px-6 rounded hover:text-white hover:bg-primary text-xl'>Learn More</button>
            </motion.div>

        </div>
    </div>
  )
}

export default DriveAndEarn