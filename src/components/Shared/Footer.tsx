import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-700 text-sm md:text-base">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <a href="#blogs" className="hover:text-blue-500 transition">Blogs</a>
        </div>
        <p className="text-gray-500 text-sm">
          Looking forward to working with you 😊
        </p>
      </div>
    </footer>
  );
};

export default Footer;
