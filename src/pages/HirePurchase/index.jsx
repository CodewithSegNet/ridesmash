import Footer from "../../components/Footer"
import Title from "../../components/HirePurchaseTitle"
import HirePurchase from "../../components/HirePurchase"
import Navbar from "../../components/Navbar"
import { HelmetProvider, Helmet } from 'react-helmet-async';




const HirePurchasePage = () => {


  return (
    <>
    <HelmetProvider>

     <Helmet>
        <title>Hire Purchase Options | Ridesmash</title>
        <meta
          name="description"
          content="Explore Ridesmash's hire purchase options. Learn how to own your ride with flexible payment plans and easy terms."
        />
        <meta name="keywords" content="Hire Purchase, Flexible Payments, Ridesmash, Ride Purchase" />
        <meta property="og:title" content="Hire Purchase Options | Ridesmash" />
        <meta
          property="og:description"
          content="Want to own your ride with affordable monthly payments? Discover our hire purchase options at Ridesmash and get started today."
        />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/hire-purchase.jpg"
        />
        <meta property="og:url" content="https://ridesmash.com/hire-purchase" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Purchase Options | Ridesmash" />
        <meta
          name="twitter:description"
          content="Own your ride with flexible hire purchase plans from Ridesmash. Learn about our payment options and get started today."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/hire-purchase.jpg"
        />
      </Helmet>
   <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
            <Navbar/>
        <Title/>
    </div>
    <HirePurchase/>
        <Footer/>
        </HelmetProvider>

    </>
  )
}

export default HirePurchasePage