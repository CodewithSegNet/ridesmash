import Socials from '../../components/Socials'
import Navbar from '../../components/Navbar'
import ContactUsTitle from '../../components/ContactUsTitle'
import ContactContent from '../../components/ContactContent'
// import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const ContactUsPage = () => {
  return (
    <>
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