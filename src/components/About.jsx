import React, { useState, useEffect } from "react";
import mylogo from "../assets/my logo.png";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gradient-to-br from-indigo-900 via-purple-800 to-black`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-14">
        {/* === Left: Flipping Card === */}
        <div
          className="relative w-64 h-64 perspective"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center rounded-2xl bg-white/10 shadow-lg border border-indigo-500/20 backface-hidden">
              <img
                src={mylogo}
                alt="Logo"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full flex flex-col justify-center items-center rounded-2xl bg-white/10 shadow-lg border border-pink-500/20 rotate-y-180 backface-hidden">
              <p className="text-lg text-white font-semibold">
                Frontend Developer
              </p>
              <span className="text-sm text-gray-300 mt-1">
                Hover to flip again
              </span>
            </div>
          </div>
        </div>

        {/* === Right: Text === */}
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            About Me
          </h2>
          <div className="w-20 h-1 mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full" />

          <p className="mt-6 text-gray-200 leading-relaxed text-lg">
            I’m a <span className="text-pink-300 font-semibold">React Developer</span> who loves building
            modern, interactive UIs with <span className="text-yellow-300 font-semibold">Tailwind CSS</span>,
            beautiful transitions, and responsive layouts.
          </p>

          <p className="mt-4 text-gray-400">
            I'm passionate about clean code, accessibility, and pixel-perfect design.
          </p>

          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition-all shadow-md"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
