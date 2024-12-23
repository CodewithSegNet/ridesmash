import { useState, useRef, useEffect  } from 'react';
import logo from '../../src/assets/logo.png'
import { BiSupport, BiTaxi, BiChevronDown } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { NavLink} from 'react-router-dom';


const Navbar = () => {
  

  const navItems = [
    // {link : "Home", path : "/"},
    // {link : "About Us", path : "about"},
    {link : "Services ", path : "services", icon: <BiChevronDown />,
      submenu: [
        { link: "Ride", path: "" },
        { link: "Delivery", path: "" },
        { link: "Car Rental", path: "" },
        { link: "Airport Pickup", path: "" },
        // { link: "Ride Hailing", path: "" },
      ]
    },
    {link : "Company", path : "Company", icon: <BiChevronDown />,
      submenu: [
        { link: "About Us", path: "" },
        { link: "Blog", path: "" },
        { link: "Safety", path: "" },
        { link: "FAQ", path: "" },
      ]
    },
    {link : "Driver", path : "driveAndEarn",icon: <BiChevronDown />, 
      submenu: [
        { link: "Earn With Us", path: "" },
        { link: "Help Center", path: "" },
      ]
    },
    {link : "Partnership", path : "driveAndEarn", icon: <BiChevronDown />,
      submenu: [
      { link: "Drive & Earn", path: "" },
      { link: "Fleets Management", path: "" },
      { link: "Franchise Partner", path: "" },


    ]},
    // {link : "Book a Ride", path: "booking", icon: <BiTaxi/>},
    // {link : "Contact Us", path : "contact"},
  ]

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  
  const toggle = () => {
    setIsMenuOpened((prev) => !prev);
  };
  
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1020px)").matches;

    if (isMobile && isMenuOpened) {
      document.body.classList.add("body-fixed");
    } else {
      document.body.classList.remove("body-fixed");
    }

    return () => {
      document.body.classList.remove("body-fixed");
    };
  }, [isMenuOpened]);

  
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenuIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenuIndex(null);
    }
  };


  return (
    <>
      <nav className="md:px-14 pb-1 pt-3 relative max-w-screen-2xl mx-auto z-20 text-white px-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-14 justify-between w-[100%] md:pb-3 sm:pb-0">
            <a
              href="/"
              className="bg-secondary w-[60px] h-[60px] items-center justify-center flex rounded-xl"
            >
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
            </a>
            <div className='md:flex hidden items-center space-x-7'>
            <div className='flex items-center gap-1 text-white hover:text-secondary  transition-all duration-300'>
                <BiTaxi className='text-xl gap-1'/>
                <a href='/booking' className='text-md'>Book a Ride</a>
              </div>
              <div className='flex items-center gap-1 hover:text-secondary text-white hover:text-secondary transition-all duration-300'>
                 <BiSupport className='text-xl gap-1'/>
                 <a href='/support' className='text-md'>Support</a>
              </div>
              <a href='login' className='bg-secondary py-3 px-6 rounded-full text-primary hover:text-white hover:bg-primary text-sm font-semibold'>Login</a>

              <div className='flex align-center'>
                <button onClick={toggle} className='transition-all duration-700 flex align-center'>
                    {
                      isMenuOpened ? (<FaXmark className='text-2xl'/>) : (<FaBars className='text-2xl'/>)
                    }
                </button>
             </div>
            </div>
            </div>
             {/* small screen */}

             <div className='md:hidden transition-all duration-300 flex'>
                <button onClick={toggle} className='transition-all duration-300'>
                    {
                      isMenuOpened ? (<FaXmark className='text-4xl transition-all duration-300'/>) : (<FaBars className='text-4xl transition-all duration-300'/>)
                    }
                </button>
             </div>

          </div>
          


          <div style={{background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 92, 186, 1))",
          margin: "0 auto"
  }}  className={`space-y-4 pt-0 absolute left-0 lg:left-[4rem] rounded-3xl pb-[6rem] md:pb-5 w-[100%] lg:w-[90%] flex flex-col text-center justify-evenly md:flex-row md:text-left lg:flex-row gap-3 z-10 h-[90vh] lg:h-[400px] overflow-hidden
    ${isMenuOpened ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-5 invisible pointer-events-none"} 
    transition-all duration-500 ease-in-out`}
>
         {navItems.map(({ link, path, icon, submenu }, index) => (
     <div
     key={link}
     className={`px-0 lg:px-14 mt-4 space-y-2 mx-auto text-center md:text-left ${
       index === 0 ? "justify-start" : ""
     }`}
   >
      <div className="flex hover:text-gray-200 text-white items-center hover:text-secondary transition-all duration-300">
        <a href={path} className="block py-1 text-2xl font-bold"> 

          {link}
        </a>
        {icon && (
          
          <span
            className="cursor-pointer md:hidden text-4xl focus:outline-none"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdownToggle(index)}
          >
            {icon}
          </span>
        )}
      </div>
      <hr className="hidden md:block" style={{ margin: "0" }} />
      {/* Render Submenu */}
      <div
  className={`overflow-hidden transition-[max-height, opacity] duration-500 ease-in-out ${
    openSubmenuIndex === index
      ? "opacity-100 visible max-h-96"
      : "opacity-0 invisible max-h-0"
  } md:visible md:opacity-100 md:max-h-96`}
>      
        {submenu && (
          <div className="space-y-2 transition-all duration-500 ease-in">
            {submenu.map(({ link, path }) => (
              <a
                key={link}
                href={path}
                className="block py-2 hover:rounded-md transition-all duration-500 text-white hover:text-secondary"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>

    </div>
  ))}
  <a href='login' className='bg-secondary py-3 mx-[5rem] rounded-full text-primary hover:text-white hover:bg-primary text-sm font-semibold md:hidden'>Login</a>
</div>

        </nav> 
    </>
  )
}

export default Navbar;