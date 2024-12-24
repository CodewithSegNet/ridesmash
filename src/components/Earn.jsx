import driver from './../assets/driver-male.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Earn = ({currency, country}) => {


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
    <div className="flex md:px-14 py-[5rem] px-8 md:h-screen h-full mx-auto md:my-0 md:items-center md:justify-center bg-black">
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
           
            <div className=" md:w-1/2">
                {/* <div className='w-[100%] h-[100%] bg-primary'>

                </div> */}
                <img src={driver} alt='' className=' rounded-3xl'/>
            </div>
            <motion.div
            
            variants={fadeIn("down", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.7}}
            
            className=' md:w-2/5'>
                <h1 className='md:text-3xl xl:text-4xl text-3xl font-black inter text-gray-400 mb-5 leading-tight lg:leading-normal'>Earning {currency}{currency === "GHS" ? "5,715" : "400,000.00"} Monthly Guaranteed,<span className='md:text-3xl xl:text-4xl text-3xl font-bold text-secondary'>With 2.5% rebate on weekly basis.</span></h1>
                <p className='text-gray-200 text-md mb-7'>We guide our drivers through expert procedures and training to earn {currency}{currency === "GHS" ? "5,715" : "400,000"} and more on monthly basis in addition to our 2.5% weekly payback, Our driving process is reliable and beneficial. </p>
                <Link to='/driveAndEarn' className='bg-secondary text-md text-black py-3 px-6 rounded hover:text-white hover:bg-primary'>Learn More</Link>
            </motion.div>

        </div>
    </div>
  )
}

export default Earn