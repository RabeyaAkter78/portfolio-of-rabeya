/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
// import Image from "next/image";
// import AllImages from "@/assets/AllImages";

interface LabelItem {
  name: string;
  link: string;
}

const NavBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const labels: LabelItem[] = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Resume", link: "/resume" },
    { name: "Blogs   ", link: "/blogs    " },
  ];

  const handleMobileMenuClick = () => {
    setDrawerVisible(!drawerVisible);
  };

  const select = (_index: number) => {
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 20,
            paddingBlock: 10,
            borderRadius: 2,
          },
        },
      }}
    >
      <div className="w-full bg-[#1a1328] text-white">
        <div className="container mx-auto flex items-center justify-center py-4 px-6 lg:px-8">
          <div className="flex items-center w-full h-full">
            <Link href="/">
              <p className="mb-0 text-3xl font-bold cursor-pointer">RB</p>
              {/* <Image
                src={AllImages.logo}
                alt="logo"
                className="lg:h-11 h-16 w-auto rounded-full"
              /> */}
            </Link>

            <div className="lg:hidden ml-auto">
              <Button
                icon={<RxHamburgerMenu className="text-black" />}
                onClick={handleMobileMenuClick}
              />
            </div>

            <div className="hidden lg:flex items-center ml-auto space-x-4 mb-0">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button className="px-4 font-medium text-lg">
                    {item.name}
                  </button>
                </Link>
              ))}
          
            </div>
          </div>
        </div>

        <Drawer
          title=""
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          style={{ width: "80%" , }}
        >
          <div className="flex flex-col items-center space-y-4 text-black">
            <div className="flex flex-col items-center space-y-2 w-full">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className="px-4 font-medium text-lg"
                    onClick={() => select(index)}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
          
            </div>
          </div>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

export default NavBar;
