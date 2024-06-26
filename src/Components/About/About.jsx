import React, { useRef } from "react";
import aboutImg from '../../assets/about-img.png'
import { Link } from "react-router-dom";

import gsap  from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {

  let textRef = useRef(null);
  let imgRef = useRef(null);

  let timeline = gsap.timeline()

  useGSAP(() => {
      let timeline = gsap.timeline()
      timeline.from(textRef.current, {
        opacity: 0,
        x: "-300",
        duration: 1,
        ease: "power2.inOut"
      })
  })

  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-8 gap-8 h-fit lg:h-screen justify-center items-center w-full max-w-7xl mx-auto py-8 space-y-8 md:space-y-0 md:space-x-8">
      <div ref={textRef} className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 pt-12">ABOUT OUR SHOP</h1>
        <h2 className="text-3xl text-gray-600 mt-4">Coffee distribution</h2>
        <p className="text-xl text-gray-600 my-4">
          has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors have a
          more-or-less normal distribution of letters.
        </p>
        <Link to="/blog" className="mt-8 px-6 py-2 border-2 border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition duration-300">
          READ MORE
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <img
          ref={imgRef} 
          className="w-full h-auto object-cover rounded-md"
          src={aboutImg}
          alt="Coffee distribution"
        />
      </div>
    </div>
  );
};

export default About;
