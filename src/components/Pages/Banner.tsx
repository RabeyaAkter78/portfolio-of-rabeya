/* eslint-disable react/no-unescaped-entities */
'use client';

import { FaArrowCircleRight, FaArrowDown } from "react-icons/fa";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from "next/link";

const roles = [
  "Frontend Developer.",
  "MERN Stack Developer.",
  "React JS Developer."
];

const typingDelay = 100;
const eraseDelay = 50;
const delayBetweenWords = 2000;

const Banner = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typingDelay);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = roles[loopNum % roles.length];

      setCurrentText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? eraseDelay : typingDelay);

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  return (
    <section id="home" className="w-full pt-10 pb-20 md:flex border-b-[1px] border-b-black">
      {/* Left section */}
      <div className="md:w-1/2 p-8 lg:p-2">
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <div className="flex flex-col gap-5 mb-20 overflow-x-hidden">
            <h4 className="text-lg uppercase">WELCOME TO My Portfolio!</h4>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-orange-400">RABEYA AKTER</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold">
              A{' '}
              <motion.span
                className="text-orange-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {currentText}
              </motion.span>
              <span className="text-orange-400">|</span>
            </h2>
            <p>
              Passionate self-taught web developer proficient in MERN stack, JavaScript, HTML, CSS. Committed to
              creating captivating, user-friendly websites with responsive interfaces and RESTful APIs.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          <div className="my-4 flex lg:flex-row flex-col gap-10 lg:gap-4 items-center">
            <div>
              <Link href={""}
                // href={resume}
                download
                className="btn btn-outline border-0 border-b-4 border-orange-400 border-l-2 shadow-2xl shadow-black"
              >
                Download CV <FaArrowDown />
              </Link>
            </div>
            <div>
              <Link
                href="contact"
                className="btn btn-outline border-0 border-b-4 border-orange-400 hover:bg-orange-400 border-l-2 shadow-2xl shadow-black cursor-pointer"
              >
                Contact <FaArrowCircleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="p-5 md:w-1/2 md:px-2 flex justify-center items-center relative"
      >
        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
          {/* <Image height={500} width={500} 
            className="rounded-full border-0 border-b-8 border-b-black shadow shadow-2xl shadow-gray-700 z-10"
            src={bannerImg.src}
            alt="Banner"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
