import React from "react";

const projects = [
  { title: "Portfolio Website", desc: "React + Tailwind", img: "https://via.placeholder.com/400x200" },
  { title: "Real Estate App", desc: "React + Redux + Node.js", img: "https://via.placeholder.com/400x200" },
  { title: "Movie Search App", desc: "React + API", img: "https://via.placeholder.com/400x200" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-14 drop-shadow-xl">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl overflow-hidden shadow-xl 
                         hover:scale-105 hover:shadow-pink-400/40 transition-all duration-500"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover border-b-4 border-white/20"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-purple-100">{p.desc}</p>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-2 bg-white text-indigo-700 font-bold rounded-full hover:bg-indigo-700 hover:text-white transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
