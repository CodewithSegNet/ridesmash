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
import Blog1 from '../../components/Blog1'
import Blog2 from '../../components/Blog2'
import Blog3 from '../../components/Blog3'
import BlogTitle from '../../components/blogTitle'

const BlogPage = () => {
  return (
    <>
      <div>
      <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
              <Navbar/>
          <BlogTitle/>
        </div>
        
        <Tabs>

        <div className='flex max-w-screen-2xl mx-auto md:px-40 px-2 md:py-12 pt-[5rem]'>
        <TabList>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 1</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 2</h1></div></Tab>
          <Tab><div className='flex flex-row gap-6 text-center'>< FaCheckCircle size={20} color='blue' /><h1 className='text-lg md:6xl md:font-bold text-gray-600'>Blog 3</h1></div></Tab>
        </TabList>

        </div>

        <div className='flex max-w-screen-2xl mx-auto md:px-24 px-2 md:py-3'>

        <TabPanel>
          <Blog1/>
        </TabPanel>
        <TabPanel>
        <Blog2/>
        </TabPanel>
        <TabPanel>
        <Blog3/>
        </TabPanel>
        </div>
        </Tabs>
        </div>
        
        <Footer/>
      
      

    </>
  )
}

export default BlogPage