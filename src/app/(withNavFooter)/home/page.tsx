import Skills from "@/components/Pages/Skills";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectsPage from "../projects/page";

const Home = () => {
  return (
    <div className="bg-[#1b1429] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 ">
          <div className="text-white flex flex-col justify-center items-start">
            <h1 className="text-2xl md:text-4xl font-bold my-5 md:my-10">
              Rabeya Akter
            </h1>
            <p className="md:my-10">
              Passionate self-taught web developer proficient in MERN stack,
              JavaScript, HTML, CSS. Committed to creating captivating,
              user-friendly websites with responsive interfaces and RESTful
              APIs.
            </p>
            <button className="px-6 py-3 rounded-md bg-fuchsia-950 text-white flex justify-center items-center gap-2 mt-10 md:mt-28">
              Contact
              <span className="">
                <FaArrowRight className="hover:text-white"></FaArrowRight>
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-end my-5 md:my-10">
            <Image
              src="/rabeya.jpg"
              alt="rabeya"
              height="500"
              width="500"
              className="rounded-full"
            ></Image>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-5 justify-between text-white">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti
            eligendi veritatis voluptate quos iure vitae adipisci qui esse nam.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-end">
            20+ Projects
          </h1>
        </div>

       
      </div>
       <Skills></Skills>
        <ProjectsPage />
    </div>
  );
};

export default Home;
