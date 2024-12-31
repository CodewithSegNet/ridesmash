import driver from './../assets/driver-ride.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
                <img src={driver} alt='' className=' rounded-md'/>
            </div>
            <motion.div
                   variants={fadeIn("down", 0.2)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{ once: true }}
                   className="md:w-2/5"
                 >
                   {/* Headline */}
                   <h1 className="md:text-3xl xl:text-4xl text-3xl font-black inter text-gray-700 mb-5 leading-tight lg:leading-normal">
                     Earn {currency}
                     {currency === "GHS" ? "5,715" : "400,000.00"} Monthly
                     Guaranteed<span className="font-euclid font-black p-0 m-0">,</span>
                     <span className="md:text-3xl xl:text-4xl text-3xl font-bold text-primary">
                       With 2.5% Weekly Rebates
                     </span>
                   </h1>
             
                   {/* Subheadline */}
                   <h2 className="text-gray-600 text-lg font-semibold mb-4">
                     Empowering drivers with reliable earnings and weekly rewards.
                   </h2>
             
                   {/* Benefits List */}
                   <ul className="text-gray-600 font-normal text-md mb-9 space-y-3">
                     <li>✔️ Earn {currency}{currency === "GHS" ? "5,715" : "400,000"} or more monthly with our trusted system.</li>
                     <li>✔️ Receive 2.5% payback weekly for consistent earnings.</li>
                     <li>✔️ Access professional training to boost your skills and earnings.</li>
                     <li>✔️ Enjoy a transparent and beneficial driving process.</li>
                   </ul>
             
                   {/* Call to Action */}
                   <Link
                     to="/driveAndEarn"
                     className="bg-primary text-white text-sm md:text-md text-black py-3 px-6 rounded hover:text-primary hover:bg-secondary"
                   >
                     Get Started
                   </Link>
                 </motion.div>
        </div>
    </div>
  )
}

export default DriveAndEarn