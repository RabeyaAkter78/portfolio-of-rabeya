"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { AllImages } from "@/assets/images/AllImages";
const NavBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const labels = [
    { name: "Home", link: "/" },
    { name: "Competition", link: "/competition-rooms" },
    { name: "Profile", link: "/user-profile" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const handleMobileMenuClick = () => {
    setDrawerVisible(!drawerVisible);
  };

  const select = () => {
    // setSelected(index);
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
      <div className=" w-[100%] bg-[#1b1429] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-center py-4 px-6 lg:px-8">
          <div className="flex items-center w-full h-full">
            <h1>Rabeya Akter</h1>
            <Link href="/">
              {/* <Image
                src={AllImages.logo}
                alt="logo"
                width={100}
                height={100}
                className="rounded-full"
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
                  <button className={`px-4 font-medium text-lg `}>
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer component */}
        <Drawer
          title=""
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2 w-full">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`px-4 font-medium text-lg`}
                    onClick={() => select()}
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
