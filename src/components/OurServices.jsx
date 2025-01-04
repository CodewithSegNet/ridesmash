import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BiArrowBack } from "react-icons/bi";
import Image1 from './../assets/new-illus.svg';
import Image2 from './../assets/illus2.svg';
import Image0 from './../assets/illus0.svg';
import Image14 from './../assets/illus14.svg';
import ImageTrav from './../assets/illus-trav.svg';
import Image15 from './../assets/illus15.svg';
import { Link } from 'react-router-dom';




const OurServices = () => {
  const boxes = [
    { id: 1, title: "Ride", parag: "Fast and reliable rides to get you where you need to be.", image: Image14, path: "ride" },
    { id: 2, title: "Delivery", parag: "Quick and secure delivery for all your packages.", image: Image2, path: "delivery"  },
    { id: 3, title: "Car Rental", parag: "Affordable car rentals for any occasion.", image: Image1, path: "rental"  },
    { id: 4, title: "Airport Pickup", parag: "Hassle-free pickups to and from the airport.", image: ImageTrav, path: "airport"  },
    { id: 5, title: "Ridesmash Business", parag: "Smart transport solutions for your business.", image: Image0, path: "business"  },
    { id: 6, title: "Fleets Management", parag: "Effortless control of your fleet in real-time.", image: Image15, path: "fleets"  },
  ];

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-16 py-8">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="md:text-4xl lg:text-4xl text-3xl font-black inter text-primary mb-2 md:tracking">
          Explore Our Services
        </h3>
        <p className="md:w-[60%] w-[80%] lg:w-[40%] font-medium text-md mx-auto px-0 md:px-4 text-gray-600">
          We offer a wide range of services to our riders, this brings with it the ambience and style on every trip.
        </p>
        <div className="mt-12 mx-auto flex items-center justify-center">
          <div className="grid w-[90%] text-left lg:grid-cols-3 col-span-3 sm:grid-cols-2 gap-3 lg:gap-3">
            {boxes.map((box) => (
              <div
                key={box.id}
                className="rounded-md shadow-md hover:shadow-xl bg-gray-50 p-4 hover:-translate-y-1 transition-transform duration-200 cursor-pointer min-h-[150px] flex flex-col justify-between"
              >
                <div>
                  <h5 className="inter text-xl font-bold text-primary">{box.title}</h5>
                  <p className="roboto pt-2 text-md text-gray-500">{box.parag}</p>
                  
                </div>
                {/* Render image if available */}
                <div className='flex items-end justify-between'>
                <div className="flex items-center mt-4 text-sm inter text-primary font-medium hover:text-gray-900 transition-all duration-200">
                    <BiArrowBack
                      style={{ transform: "rotate(180deg)" }}
                      className="mr-4"
                    />
                    <Link to={box.path} className=''>Read More</Link>
                  </div>
                {box.image && (
                  <div className="w-[45%] mt-4 ">
                    <img src={box.image} alt={box.title} className="w-full h-full object-contain" />
                  </div>
                )}
                    
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurServices;
