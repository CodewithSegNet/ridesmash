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
// import Hero from '../../components/Hero'

const FleetPage = () => {
  return (
    <>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <FleetTitle/>
        </div>
        
        <Tabs>

        <div className='flex md:px-40 px-2 md:py-12 py-6'>
        <TabList>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Benefits of Fleet Management</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>How Fleet Managment Works</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Fund Management</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Pay as you go</h1></div></Tab>
        </TabList>

        </div>

        <div className='flex md:px-24 px-2 md:py-3 py-6'>

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