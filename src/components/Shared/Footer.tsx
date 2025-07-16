import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1429] py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-white text-sm md:text-base">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
          <a href="#blogs" className="hover:text-blue-500 transition">
            Blogs
          </a>
        </div>
        <p className="text-gray-200 text-sm">
          Looking forward to working with you 😊
        </p>
        <p className="text-white">
          Copyright © 2023 - All right reserved by Rabeya Akter
        </p>
      </div>
    </footer>
  );
};

export default Footer;
