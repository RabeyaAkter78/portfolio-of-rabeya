import { AllImages } from "@/assets/images/AllImages";
import Image from "next/image";
import React from "react";

const Skills = () => {
  const data = [
    {
      _id: "1",
      title: "HTML",
      icon: AllImages.html,
      short_desc: "Markup language for creating web pages",
    },
    {
      _id: "2",
      title: "CSS",
      icon: AllImages.css,
      short_desc: "Styling language for web design and layout",
    },
    {
      _id: "3",
      title: "JavaScript",
      icon: AllImages.js,
      short_desc: "Programming language for interactive web elements",
    },
    {
      _id: "4",
      title: "React",
      icon: AllImages.react,
      short_desc: "Library for building modern user interfaces",
    },
    {
      _id: "5",
      title: "Next.js",
      icon: AllImages.next,
      short_desc: "React framework with server-side rendering and routing",
    },
    {
      _id: "6",
      title: "Tailwind CSS",
      icon: AllImages.tailwind,
      short_desc: "Utility-first CSS framework for building custom designs",
    },
    {
      _id: "7",
      title: "Redux Toolkit",
      icon: AllImages.redux,
      short_desc: "Simplified state management for React",
    },
    {
      _id: "8",
      title: "Ant Design",
      icon: AllImages.antdesign,
      short_desc: "UI library with polished components and layout system",
    },
    {
      _id: "9",
      title: "Node.js",
      icon: AllImages.node,
      short_desc: "JavaScript runtime for server-side development",
    },
    {
      _id: "10",
      title: "Express.js",
      icon: AllImages.express,
      short_desc: "Web framework for building RESTful APIs with Node.js",
    },
    {
      _id: "11",
      title: "MongoDB",
      icon: AllImages.mongodb,
      short_desc: "Document-based NoSQL database",
    },
    {
      _id: "12",
      title: "Mongoose",
      icon: AllImages.mongodb,
      short_desc: "ODM library for MongoDB and Node.js",
    },
    {
      _id: "13",
      title: "Socket.IO",
      icon: AllImages.soket,
      short_desc: "Library for real-time web applications",
    },
    {
      _id: "14",
      title: "Git",
      icon: AllImages.git,
      short_desc: "Version control system for tracking code changes",
    },
    {
      _id: "15",
      title: "GitHub",
      icon: AllImages.github,
      short_desc: "Code hosting platform for version control and collaboration",
    },
    {
      _id: "16",
      title: "REST API",
      icon: AllImages.rest,
      short_desc:
        "API architecture for communication between client and server",
    },
    {
      _id: "17",
      title: "Postman",
      icon: AllImages.postman,
      short_desc: "Tool for testing and managing APIs",
    },
    {
      _id: "18",
      title: "JWT Auth",
      icon: AllImages.jwt,
      short_desc: "Token-based user authentication",
    },
    {
      _id: "19",
      title: "Firebase",
      icon: AllImages.firebase,
      short_desc: "Backend-as-a-Service platform for web and mobile apps",
    },
    {
      _id: "20",
      title: "Figma",
      icon: AllImages.figma,
      short_desc: "Collaborative design tool for UI/UX",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-6xl mb-8">What I Do</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item._id} className="p-4 border rounded shadow">
            <Image
              src={item.icon}
              alt={item.title}
              className="h-12 w-12 mb-2"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.short_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
