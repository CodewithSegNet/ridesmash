import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import SupportContent from "../../components/SupportContent"
import SupportTitle from '../../components/supportTitle'
import { HelmetProvider, Helmet } from 'react-helmet-async';


const SupportPage = () => {

  return (
    <>
            <HelmetProvider>

     <Helmet>
        <title>Support | Helmet</title>
        <meta
          name="description"
          content="Get help and support for all your Helmet-related inquiries, including FAQs, troubleshooting, and customer assistance."
        />
        <meta name="keywords" content="Helmet support, help center, troubleshooting, FAQs, customer support" />
        <meta property="og:title" content="Support | Helmet" />
        <meta
          property="og:description"
          content="Explore the support options available for Helmet, including troubleshooting, FAQs, and direct customer assistance."
        />
        <meta property="og:url" content="https://ridesmash.com/support" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Support | Ridesmash" />
        <meta
          name="twitter:description"
          content="Get the help you need with Helmet. Visit our support page for troubleshooting, FAQs, and more."
        />
      </Helmet>
    <div>
    <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>      <Navbar/>
      <SupportTitle/>
      </div>  
      <SupportContent/>
      
      <Footer/>
    </div>
    </HelmetProvider>

  </>
  )
}

export default SupportPage