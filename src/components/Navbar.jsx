import { useState, useRef, useEffect  } from 'react';
import logo from '../../src/assets/logo.png'
import { BiSupport, BiTaxi, BiChevronDown } from "react-icons/bi";
import {FaXmark, FaBars} from 'react-icons/fa6'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  

  const navItems = [
    {
      link: "Services",
      path: "/services",
      icon: <BiChevronDown aria-hidden="true" />,
      ariaLabel: "View our services including ride hailing, delivery, car rental, and more",
      submenu: [
        { link: "Ride Hailing", path: "ride", ariaLabel: "Learn about our ride-hailing services" },
        { link: "Delivery", path: "delivery", ariaLabel: "Explore our delivery services" },
        { link: "Car Rental", path: "rental", ariaLabel: "Rent cars with ease" },
        { link: "Airport Pickup", path: "airport", ariaLabel: "Book an airport pickup service" },
        { link: "Ridesmash Business", path: "business", ariaLabel: "Discover our business solutions" },
      ],
    },
    {
      link: "Company",
      path: "/company",
      icon: <BiChevronDown aria-hidden="true" />,
      ariaLabel: "Learn about our company, blog, safety measures, and more",
      submenu: [
        { link: "About Us", path: "/about", ariaLabel: "Learn more about us" },
        { link: "Blog", path: "/blog", ariaLabel: "Read our latest blog posts" },
        { link: "Safety", path: "/safety", ariaLabel: "Learn about our safety measures" },
        { link: "FAQ", path: "/faq", ariaLabel: "Get answers to frequently asked questions" },
      ],
    },
    {
      link: "Driver",
      path: "/driveAndEarn",
      icon: <BiChevronDown aria-hidden="true" />,
      ariaLabel: "Explore driver opportunities and help resources",
      submenu: [
        { link: "Earn With Us", path: "/driveAndEarn", ariaLabel: "Learn how to earn by driving with us" },
        { link: "Help Center", path: "/contact", ariaLabel: "Get support from our help center" },
      ],
    },
    {
      link: "Partnership",
      path: "/driveAndEarn",
      icon: <BiChevronDown aria-hidden="true" />,
      ariaLabel: "Discover partnership opportunities including fleet management and franchises",
      submenu: [
        { link: "Fleets Management", path: "/fleets", ariaLabel: "Learn about fleet management" },
        { link: "Franchise Partner", path: "/franchise", ariaLabel: "Become a franchise partner" },
      ],
    },
  ];
  

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
    if (openSubmenuIndex !== null && openSubmenuIndex !== index) {

      setOpenSubmenuIndex(null);
  
      setTimeout(() => {
        setOpenSubmenuIndex(index);
      }, 500);
    } else {
      setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    }
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
      <nav className={`md:px-14 pb-3 pt-3 relative max-w-screen-2xl mx-auto z-40 text-white px-4 transition-all duration-500 ${
            isMenuOpened ? "bg-gradient-active" : "bg-transparent"
          }`}
          style={
            isMenuOpened
              ? { background: "linear-gradient(to top,  rgba(0, 92, 186, .3), rgba(0, 92, 186, .7))" }
              : {}
          }>
      <div
          className="flex justify-between z-20" 
>
          <div className="flex items-center space-x-14 justify-between w-[100%] md:pb-3 pb-2">
            <NavLink
              to="/"
              className="bg-secondary w-[45px] h-[45px]  items-center justify-center flex rounded-md"
              aria-label="Ridesmash home page"
            >
              <img src={logo} alt="Ridesmash - Your trusted e-hailing service" className="w-[30px] h-[30px]" />
            </NavLink>
            <div className='md:flex hidden items-center space-x-7'>
            <div className='flex items-center gap-1 text-white hover:text-secondary  transition-all duration-300'>
                <BiTaxi className='text-xl gap-1'/>
                <NavLink to='/booking' aria-label="Book a ride with Ridesmash" className='text-md'>Book a Ride</NavLink>
              </div>
              <div className='flex items-center gap-1 hover:text-secondary text-white hover:text-secondary transition-all duration-300'>
                 <BiSupport className='text-xl gap-1'/>
                 <NavLink to='/support' aria-label="Customer support for Ridesmash" className='text-md'>Support</NavLink>
              </div>
              <NavLink to='/login' className='bg-secondary py-3 px-6 rounded-full text-primary hover:text-white hover:bg-primary text-sm font-semibold'>Login</NavLink>

              <div className='flex align-center'>
              <button 
                  onClick={toggle} 
                  className="relative transition-all duration-700 flex items-center"
                  aria-label="Services menu"
                  aria-controls="services-submenu"
                >
                  {/* Icon Wrapper */}
                  <div className="relative w-6 h-6">
                    {/* Close Icon */}
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-2xl transition-opacity duration-300 ${
                        isMenuOpened ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <FaXmark />
                    </span>
                    {/* Menu Icon */}
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-2xl transition-opacity duration-300 ${
                        !isMenuOpened ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <FaBars />
                    </span>
                  </div>
                </button>

             </div>
            </div>
            </div>
             {/* small screen */}

             <div className='md:hidden transition-all duration-300 flex'>
                <button onClick={toggle} aria-label="Toggle menu" className='transition-all duration-300'>
                    {
                      isMenuOpened ? (<FaXmark className='text-2xl transition-all duration-300'/>) : (<FaBars className='text-2xl transition-all duration-300'/>)
                    }
                </button>
             </div>

          </div>
          


          <div style={{background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 92, 186, 1))",
          margin: "0 auto"
  }}  className={`space-y-4 pt-0 absolute left-0 rounded-bl-3xl rounded-br-3xl z-40  md:pb-5 w-[100%] lg:w-[100%] flex flex-col text-center md:flex-row md:text-left lg:flex-row h-[90vh] lg:h-[400px] overflow-hidden
    ${isMenuOpened ? "opacity-100 translate-y-0 visible pointer-events-auto z-40" : "opacity-0 -translate-y-5 invisible pointer-events-none z-40"} 
    transition-all duration-500 ease-in-out`}
>
         {navItems.map(({ link, path, icon, submenu, ariaLabel }, index) => (
     <div
     key={link}
     className={`px-0 lg:px-14 space-y-2 mx-auto text-center md:text-left w-[100%] px-4 z-40 ${
       index === 0 ? "justify-start mt-[1rem]" : ""
     }`}
   >
      <div className="flex hover:text-gray-200 text-white items-center w-[100%]  mt-5 justify-between hover:text-secondary transition-all duration-300 justify-center md:justify-start">
        <NavLink to={path} className="block py-1 text-md font-bold" aria-label={ariaLabel}> 

          {link}
        </NavLink>
        {icon && (
          
          <span
            className={`cursor-pointer cursor-pointer md:hidden text-3xl focus:outline-none transition-transform duration-300 ease-in-out ${
              openSubmenuIndex === index ? "rotate-180" : "rotate-0"
            }`}
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

  style={{
    transition: `max-height 0.5s ease-in-out, opacity 0.3s ease-in-out`,
  }}
>      
        {submenu && (
          <div className="space-y-2 ml-5 md:ml-0 transition-all duration-500 ease-in">
            {submenu.map(({ link, path }) => (
              <NavLink
                key={link}
                to={path}
                aria-label={ariaLabel}
                className="block text-left text-sm py-2 hover:rounded-md transition-all duration-500 text-white hover:text-secondary"
              >
                {link}
              </NavLink>
            ))}
          </div>
        )}
      </div>

    </div>
  ))}
  <NavLink to='/login' className='bg-secondary py-3 mx-[5rem] rounded-full text-primary hover:text-white hover:bg-primary text-sm font-semibold md:hidden'>Login</NavLink>
</div>

        </nav> 
    </>
  )
}

export default Navbar;