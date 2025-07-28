import React from "react";

const Navbar = ({ scrolled }) => {
  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
          Sagar
          <span className="text-yellow-300">Vashist</span>
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-white font-medium text-lg">
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <li key={i} className="group relative">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-300 transition"
              >
                {item}
              </a>
              {/* Underline animation */}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
