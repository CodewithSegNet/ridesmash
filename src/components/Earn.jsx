import driver from './../assets/smashdriver.webp'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';


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

  return (
    <div className="flex md:px-14 py-[2rem] md:py-0 px-6 md:py-[4rem] mx-auto md:my-0 md:items-center md:justify-center bg-black">
    <div className="flex max-w-screen-2xl mx-auto md:flex-row flex-col justify-between md:items-center gap-8">
      {/* Image Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <LazyLoadImage src={driver} alt="Driver" className="rounded-lg" />
      </motion.div>
  
      {/* Content Section */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="md:w-2/5"
      >
        {/* Headline */}
        <h1 className="md:text-3xl xl:text-4xl text-3xl font-black inter text-gray-400 mb-5 leading-tight lg:leading-normal">
          Earn {currency}
          {currency === "GHS" ? "5,715" : "400,000.00"} Monthly
          Guaranteed<span className="font-euclid font-black p-0 m-0">,</span>
          <span className="md:text-3xl xl:text-4xl text-3xl font-bold text-secondary">
            With 2.5% Weekly Rebates
          </span>
        </h1>
  
        {/* Subheadline */}
        <h2 className="text-gray-300 text-lg font-semibold mb-4">
          Empowering drivers with reliable earnings and weekly rewards.
        </h2>
  
        {/* Benefits List */}
        <ul className="text-gray-200 font-normal text-md mb-9 space-y-3">
          <li>✔️ Earn {currency}{currency === "GHS" ? "5,715" : "400,000"} or more monthly with our trusted system.</li>
          <li>✔️ Receive 2.5% payback weekly for consistent earnings.</li>
          <li>✔️ Access professional training to boost your skills and earnings.</li>
          <li>✔️ Enjoy a transparent and beneficial driving process.</li>
        </ul>
  
        {/* Call to Action */}
        <Link
          to="/driveAndEarn"
          className="bg-secondary text-sm md:text-md text-black py-3 px-6 rounded hover:text-white hover:bg-primary"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  </div>
  
  )
}

export default Earn