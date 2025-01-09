
import Carousel from "./../components/Carousel";
import partner from "./../assets/partner.webp";
import partner2 from "./../assets/partner2.webp";
import partner3 from "./../assets/partner03.webp";
import partner4 from "./../assets/Moniepointlogo.png";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);



  const carouselData1 = [
    { src: partner, alt: "Image 1" },
    { src: partner2, alt: "Image 01" },
    { src: partner3, alt: "Image 2" }, 
    { src: partner4, alt: "Image02"}
  ];


  const sliderSettings1 = {
    dots: false,
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto md:py-16 py-8" ref={ref}>
      <div className="max-w-screen max-auto w-full text-center">
        <motion.p
        
        
        initial={{ opacity: 0, x: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.4 }}
        
        
        className="md:text-4xl lg:text-4xl text-3xl font-black inter text-primary mb-2 md:tracking">Our Partners</motion.p>
        <motion.h1
        
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.5 }}

        className="font-medium text-md mx-auto px-0 md:px-4 text-gray-600"
        >
          We Work With The <span> Best Partners </span>
        </motion.h1>
      </div>
      <div className="mt-[6rem] w-full">
        <Carousel slides={carouselData1} settings={sliderSettings1} />
      </div>
    </div>
  );
};

export default Card;