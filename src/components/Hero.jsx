import React, { useEffect, useState } from "react";
import myPhoto from "../assets/my image.jpeg";
import mylogo from "../assets/my logo.png";
import cv from "../assets/Sagar cv.pdf"

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [flipped, setFlipped] = useState(false); 

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  return (
    <section
      className={`relative h-screen flex flex-col justify-center items-center text-center 
        bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 transition-opacity duration-1000 
        ${fadeIn ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div
          className="relative mb-6 w-80 h-80 perspective cursor-pointer"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full backface-hidden rounded-b-full border-8 border-b-cyan-500 overflow-hidden shadow-2xl">
              <img
                src={myPhoto}
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full rotate-y-180 backface-hidden border-8 border-b-cyan-500 rounded-b-full overflow-hidden shadow-2xl bg-white flex justify-center items-center">
              <img src={mylogo} alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Hi, I'm Sagar Sharma
        </h1>
        <p className="mt-4 text-xl text-gray-100">
          A passionate <span className="text-yellow-300">React Developer</span>
        </p>
        <p className="mt-6 text-lg text-gray-200 max-w-md">
          Crafting interactive UIs with TailwindCSS and smooth animations
        </p>
        <div className="mt-8 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-full border-2 border-indigo-500 
                       hover:bg-indigo-700 hover:text-white transition-all shadow-md"
          >
            View My Work
          </a>
          <a
            href={cv}
            className="px-6 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white 
                       hover:bg-white hover:text-indigo-700 transition-all shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
