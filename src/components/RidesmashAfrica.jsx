import nigeria from '../assets/Nigeria.jpg'
import southAfrica from '../assets/SouthAfrica.jpg'
import kenya from '../assets/Kenia.jpg'
import egypt from '../assets/Egipto.jpg'
import ghana from '../assets/Ghana.jpg'
import uganda from '../assets/Uganda.jpg'
import togo from "../assets/Togo.jpg"
import country from "../assets/country.jpg"
import algeria from "../assets/algeria.jpg"
import sa from "../assets/SAARA.jpg"
import burkina from "../assets/BurkinaFaso.jpg"
import gabon from "../assets/Gabon.jpg"
import country1 from "../assets/country1.jpg"
import mali from "../assets/Mali.jpg"
import benin from "../assets/BENINFLAG.jpg"
import angola from "../assets/Angola.jpg"
import senegal from "../assets/Senegal.jpg"
import { fadeIn } from '../variants'




import {motion} from 'framer-motion'

const RidesmashAfrica = () => {
  const countries = [
    {
      imgSrc: nigeria,
      altText: 'Nigeria',
      visaType: 'Nigeria',
    },
    {
        imgSrc: benin,
        altText: 'Benin Republic',
        visaType: 'Benin Republic',
      },
    {
        imgSrc: togo,
        altText: 'Togo',
        visaType: 'Togo',
      },
      {
        imgSrc: southAfrica,
        altText: 'South Africa',
        visaType: 'South Africa',
      },
      {
        imgSrc: country,
        altText: 'ivory coast',
        visaType: 'Ivory Coast',
      },
      
      {
        imgSrc: algeria,
        altText: 'Algeria',
        visaType: 'Algeria',
      },
      {
        imgSrc: burkina,
        altText: 'burkina faso',
        visaType: 'Burkina Faso',
      },
    {
      imgSrc: kenya,
      altText: 'Kenya',
      visaType: 'Kenya',
    },
    {
        imgSrc: gabon,
        altText: 'Gabon',
        visaType: 'Gabon',
      },
      {
        imgSrc: country1,
        altText: 'Tanzania',
        visaType: 'Tanzania',
      },
      {
        imgSrc: mali,
        altText: 'mali',
        visaType: 'Mali',
      },
     
      {
        imgSrc: angola,
        altText: 'Angola',
        visaType: 'Angola',
      },
    {
      imgSrc: egypt,
      altText: 'Egypt',
      visaType: 'Egypt',
    },
    {
      imgSrc: ghana,
      altText: 'Ghana',
      visaType: 'Ghana',
    },
    {
      imgSrc: uganda,
      altText: 'Uganda',
      visaType: 'Uganda',
    },
    {
        imgSrc: senegal,
        altText: 'Senegal',
        visaType: 'Senegal',
      },
  ];

  return (
    <main className="max-w-screen-2xl mx-auto py-[4rem] px-5">
      <section className="max-w-screen-2xl mx-auto ">
        <div className="">
          <div className="">
          <motion.h2 
           variants={fadeIn("down", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:true}}
          className='text-3xl md:text-4xl text-primary text-center w-[100%] font-black mb-6 inter'>
  Locations We Serve Across <span>Africa</span>
</motion.h2>
    <motion.p 
     variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true}}
    className="mb-[3.5rem] text-center text-gray-600 w-full"> 
  At Ridesmash, we provide fast, reliable, and professional e-hailing, delivery, and airport pickup services across various African cities. Whether you're looking for a smooth ride to the airport, efficient delivery services, or top-notch fleet management, we are here to ensure your transportation needs are met with ease. Our services are designed for businesses and individuals, offering flexibility and efficiency wherever you need us. Explore our locations in Africa and experience quality service at its best.
</motion.p>

          </div>

          <div className='flex flex-wrap justify-between gap-6 mt-8'>
            <motion.div 
             variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:true}}
            className='flex flex-wrap justify-between gap-6'>
              {countries.map((country, index) => (
                <div key={index} className={`${country.className} flex flex-col items-center`}>
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img src={country.imgSrc} alt={country.altText} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-center text-sm text-primary">
                    {country.visaType}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RidesmashAfrica;
