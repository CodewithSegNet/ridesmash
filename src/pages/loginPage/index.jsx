import {useState} from "react"
import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import { Link } from "react-router-dom";
import logo from './../../assets/logos.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import delivery from './../../assets/login.webp'




const LoginPage = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
  const [code, setCode] = useState("")

  async function handleFormSubmit(e) {
    e.preventDefault();

  }
  

  return (
    <div className="h-full flex items-center max-w-full">
      <div className="h-screen md:block hidden flex-2">
        <LazyLoadImage src={delivery} className="h-screen md:block hidden"/>
      </div>

      <div className="w-full flex flex-col items-center justify-center flex-1 h-screen" >
      <div className="max-w-md flex flex-col items-center justify-center">
        <div className=" flex md:p-6 p-3 justify-center ">
          <a href="/"><LazyLoadImage src={logo} alt="" className= " w-[60px] h-[60px]"/></a>
        </div>
        <fieldset className="border border-solid border-gray-300 md:p-12 p-3 ">
        <legend className="font-bold text-primary inter">Login</legend>
        <form className="mt-8 space-y-6 md:w-full md:justify-center md:items-center md:pl-4" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px md:w-full flex md:items-center md:justify-center">
            
            <PhoneInput
              country={'ng'}
              // value={phone}
              // onChange={phone => setPhone({ phone })}
              onlyCountries={['ng']}
            />
            
          </div>
          <div>
            <button
              type="submit"
              className=" w-full md:w- flex justify-center py-2  border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900 md:w-[300px]"
            >
              Send Otp
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Don&apos;t have an account? Register
              </Link>
            </div>
          </div>
        </form>
        </fieldset>
      </div>
      </div>
   
    </div>
  )
}

export default LoginPage


// import {useState} from "react"
// import Socials from '../../components/Socials'
// import Navbar from '../../components/Navbar'
// import { Link } from "react-router-dom";
// import logo from './../../assets/logos.png'


// const LoginPage = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleFormSubmit(e) {
//     e.preventDefault();

//   }
  

//   return (
//     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className=" flex md:p-6 p-3 justify-center ">
//           <a href="/"><img src={logo} alt="" className= " w-[100px] h-[100px]"/></a>
//         </div>
//         <fieldset className="border border-solid border-gray-300 md:p-12 p-3">
//         <legend>Please Login</legend>
//         <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//                 className=" my-3 appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
//             >
//               Login
//             </button>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <Link
//                 to="/register"
//                 className="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Don't have an account? Register
//               </Link>
//             </div>
//           </div>
//         </form>
//         </fieldset>
//       </div>
//     </div>
//   )
// }

// export default LoginPage