import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import ContactUsTitle from '../../components/ContactUsTitle'
import ContactContent from '../../components/ContactContent'
import { Helmet } from 'react-helmet';
// import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const ContactUsPage = () => {
  return (
    <>
     <Helmet>
        <title>Contact Us | Ridesmash</title>
        <meta
          name="description"
          content="Get in touch with Ridesmash. We're here to assist with your inquiries, feedback, or support needs."
        />
        <meta
          name="keywords"
          content="contact Ridesmash, customer support, ride services help, inquiries, feedback"
        />
        <meta property="og:title" content="Contact Us | Ridesmash" />
        <meta
          property="og:description"
          content="Need assistance? Reach out to Ridesmash for support and inquiries."
        />
        <meta property="og:url" content="https://ridesmash.com/contact-us" />
        <meta
          property="og:image"
          content="https://ridesmash.com/assets/contact-us-cover.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Ridesmash" />
        <meta
          name="twitter:description"
          content="Get in touch with Ridesmash for all your queries and support needs."
        />
        <meta
          name="twitter:image"
          content="https://ridesmash.com/assets/contact-us-cover.jpg"
        />
      </Helmet>
    <div>
    <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
        <Navbar/>
        <ContactUsTitle/>
      </div>
        <ContactContent/>
        <Footer/>
    </div>
    </>
  )
}

export default ContactUsPage