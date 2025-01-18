import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import FleetTitle from '../../components/FleetTitle'
import FleetManagement from '../../components/FleetManagment'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaCheckCircle } from 'react-icons/fa'
import FleetManagementSection from '../../components/FleetManagementSection'
import FundManagement from '../../components/FundManagement'
import PayToGo from '../../components/PayToGo'
import { Helmet } from 'react-helmet';
// import Hero from '../../components/Hero'

const FleetPage = () => {
  return (
    <>
     <Helmet>
        <title>Fleet Management | Ridesmash</title>
        <meta
          name="description"
          content="Manage your fleet effectively with Ridesmash's Fleet Management system. Learn about its benefits, how it works, and more."
        />
        <meta name="keywords" content="Fleet Management, Benefits, Fund Management, Pay as you go, Ridesmash" />
        <meta property="og:title" content="Fleet Management | Ridesmash" />
        <meta
          property="og:description"
          content="Explore Ridesmash's Fleet Management page to understand how to optimize fleet operations, manage funds, and use the pay-as-you-go model."
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/fleet-management-cover.jpg"
        />
        <meta property="og:url" content="https://ridesmash.com/fleet-management" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fleet Management | Ridesmash" />
        <meta
          name="twitter:description"
          content="Learn about Fleet Management, Fund Management, and more on Ridesmash. Optimize your fleet and manage funds effectively."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/fleet-management-cover.jpg"
        />
      </Helmet>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <FleetTitle/>
        </div>
        
        <Tabs>

        <div className='flex max-w-screen-2xl mx-auto md:px-40 px-2 md:pt-[2rem] pt-[3rem]'>
        <TabList>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Benefits of Fleet Management</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>How Fleet Managment Works</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Fund Management</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Pay as you go</h1></div></Tab>
        </TabList>

        </div>

        <div className='flex max-w-screen-2xl mx-auto md:px-24 px-2 md:py-3 py-6'>

        <TabPanel>
          <FleetManagement/>
        </TabPanel>
        <TabPanel>
        <FleetManagementSection/>
        </TabPanel>
        <TabPanel>
        <FundManagement/>
        </TabPanel>
        <TabPanel>
        <PayToGo/>
        </TabPanel>
        </div>
        </Tabs>
        </div>
        
        {/* <FleetManagement/> */}
        <Footer/>
      
      

    </>
  )
}

export default FleetPage