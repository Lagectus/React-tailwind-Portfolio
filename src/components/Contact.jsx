import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white"
    >
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Let's Connect
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-lg text-purple-100">
          Have a question or want to work together? Drop a message! 💬
        </p>

        {/* Email Button */}
        <a
          href="mailto:vashsagar2@email.com"
          className="mt-8 inline-block px-8 py-4 text-lg font-semibold rounded-full border-2 border-white
                     hover:bg-white hover:text-indigo-700 transition duration-300 shadow-md hover:shadow-white"
        >
          Say Hello 👋
        </a>

        {/* Decorative line */}
        <div className="mt-12 w-32 h-1 mx-auto bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Contact;
