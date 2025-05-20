// components/Footer.tsx
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-[#1a1328] to-[#1a1328]">
      <div className=" py-12 container mx-auto">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start">
              {/* <Image
                            className="w-auto mx-auto h-7"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt-2.svg"
                            alt="Logo"
                            width={120}
                            height={28}
                        /> */}
              <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
                © Copyright 2025. All rights reserved
              </p>
            </div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                {["About",  "Projects","Contact", "Resume", "Blogs"].map(
                  (item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        title={item}
                        className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>

              <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-white "></div>

              <div className="flex items-center justify-center gap-5 px-5">
                <FaLinkedin className="text-white h-5 w-5" />

                <FaGithubSquare className="text-white h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
