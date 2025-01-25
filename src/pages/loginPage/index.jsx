import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "./../../assets/logos.png";
import delivery from "./../../assets/login.webp";
import { Helmet } from "react-helmet";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    // Form submit logic
  }

  return (
    <>
      <Helmet>
        <title>Login | Ridesmash</title>
        <meta
          name="description"
          content="Login to your Ridesmash account. Enter your phone number to receive an OTP for verification."
        />
        <meta
          name="keywords"
          content="Ridesmash Login, User Login, OTP Login"
        />
        <meta property="og:title" content="Login | Ridesmash" />
        <meta
          property="og:description"
          content="Login to your Ridesmash account and access your services."
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/login.webp"
        />
        <meta property="og:url" content="https://ridesmash.com/login" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login | Ridesmash" />
        <meta
          name="twitter:description"
          content="Login to your Ridesmash account and access services with OTP authentication."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/login.webp"
        />
      </Helmet>

      <div
        className="relative h-screen bg-cover"
        style={{
          backgroundImage: `url(${delivery})`,
          backgroundPosition: "50% 40%",
        }}
      >
        <div className="absolute opacity-40 z-20"></div>

        <div className="flex items-center justify-center h-full z-40">
          <div className="max-w-md w-full p-6">
            <div className="flex justify-center mb-6 cursor-pointer">
              <Link to="/">
                <LazyLoadImage
                  src={logo}
                  alt="Ridesmash Logo"
                  className="w-20 h-17"
                />
              </Link>
            </div>
            <fieldset className="border border-solid border-secondary p-6">
              <legend className="font-bold text-secondary text-center">
                Login
              </legend>
              <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                <div className="flex flex-col justify-center items-center">
                  <PhoneInput
                    country="ng"
                    value={phone}
                    onChange={setPhone}
                    onlyCountries={["ng"]}
                    inputClass="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 text-white bg-sky-800 hover:bg-secondary rounded-md"
                  >
                    Send OTP
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm">
                    <Link to="/" className="text-secondary hover:underline">
                      Don&apos;t have an account? Register
                    </Link>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

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
