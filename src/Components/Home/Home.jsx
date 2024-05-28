import React, { useEffect, useRef, useState } from "react";
import Background from "../Background/Background";
import About from "../About/About";
import Coffees from "../Coffees/Coffees";
import Shop from "../Shop/Shop";
import clientImg1 from "../../assets/client-img1.png";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'


const Home = () => {
  

  const [heroCount, setHeroCount] = useState(0);
  const totalImages = 4;

  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  let heroData = [
    { text1: "Coffe", text2: "Shop" },
    { text1: "Fuel", text2: "Your Day" },
    { text1: "Sip, Savor,", text2: " Smile." },
    { text1: "Wake Up to", text2: " Greatness." },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 2000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  let headingRef = useRef(null)
  let paraRef = useRef(null)
  let buttonsRef = useRef(null)
  let feedbackHEadingRef = useRef(null)
  let feedbackRef = useRef(null)

  useGSAP(() => {
      let timeline = new gsap.timeline();

      timeline.from(headingRef.current, {
        opacity: 0,
        y: "100",
        duration: 1,
        skewX: "-20",
        ease: 'power3.inOut',
      }, "")
  }, [heroCount])

  useGSAP(() => {
    let timeline = new gsap.timeline();
    timeline.from(paraRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: 'power3.inOut',
    }, "")
      timeline.from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.inOut',
      }, "")
      timeline.from(feedbackHEadingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.inOut',
      }, "")
      timeline.from(feedbackRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.inOut',
      }, "")
  })

  const heroText = heroData[heroCount] || { text1: "", text2: "" };

  const handleLeftClick = () => {
    setIsLeftClicked(true);
    setIsRightClicked(false);
    setHeroCount((prevCount) => (prevCount + 1) % totalImages);
  };

  const handleRightClick = () => {
    setIsRightClicked(true);
    setIsLeftClicked(false);
    setHeroCount((prevCount) => (prevCount + 1) % totalImages);
  };

  return (
    <div>
      
      <Background heroCount={heroCount} />

      {/* Hero Text */}
      <div className="flex justify-start items-center w-full max-w-7xl mx-auto p-0 h-[68vh] sticky">
        <div className="flex flex-col gap-6 px-4 lg:px-14">
          <h1  ref={headingRef} className="text-white px-0 md:px-14 ml-1 text-4xl md:text-7xl font-black leading-tight mt-12">
            <div>{heroText.text1}</div> {" "}
            <div className="inline">{heroText.text2}</div>
          </h1>
          <p ref={paraRef} className="text-white px-0 md:px-14 ml-1 text-2xl md:text-3xl">
            more-or-less normal distribution of letters, as opposed to using
          </p>
          <div ref={buttonsRef} className="px-0 flex flex-col items-start gap-6 md:flex-row md:px-14 text-xl">
            <NavLink to="about" className="uppercase text-white bg-red-600 px-8 md:px-7 py-3 rounded-lg">
              About Us
            </NavLink>
            <button className="uppercase md:ml-12 bg-white px-8 text-black md:px-7 py-3 rounded-lg">
              Call Now
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center relative text-center -mt-16">
        <button
          onClick={handleLeftClick}
          className={`p-6 mx-2 ${
            isLeftClicked ? "bg-red-600" : "bg-slate-300"
          }`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleRightClick}
          className={`p-6 mx-2 ${
            isRightClicked ? "bg-red-600" : "bg-slate-300"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* What Says Customer Section */}
      <div className="flex flex-col px-8 md:px-6 justify-center w-full max-w-7xl mx-auto py-8 relative -z-10 h-auto">
          <div className="w-full md:w-auto">
            <h1 ref={feedbackHEadingRef} className="text-2xl md:text-4xl text-center md:text-start text-gray-600 font-black py-4">WHAT SAYS CUSTOMERS</h1>
          </div>

          <div ref={feedbackRef} className="flex flex-col md:flex-row md:justify-center items-center md:items-start gap-10">
            <div className="flex-shrink-0">
              <img className="object-cover object-center w-full md:w-auto h-auto" src={clientImg1} alt="Client Image" style={{ maxHeight: "180px", maxWidth: "280px" }} />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl md:text-3xl px-6 text-center md:text-start md:px-0 font-bold">Joy Moark</h1>
              <p className="text-2xl px-6 text-center md:text-start md:px-0 md:text-2xl">
                now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy now use Lorem Ipsum as their default model text,
              </p>
            </div>
          </div>
        </div>

        {/* About Section  */}

        <About />
        <Coffees />
        <Shop />
        <Blog />
        <Contact />

    </div>
  );
};

export default Home;
