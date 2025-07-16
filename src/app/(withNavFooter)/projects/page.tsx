import { AllImages } from "@/assets/images/AllImages";
import Image from "next/image";
import React from "react";

interface Idata {
  _id: string;
  project_banner: string;
  title: string;
  short_desc: string;
  technology_used: string;
  live_link: string;
  client: string;
  server: string;
}

const projectData: Idata[] = [
  {
    _id: "1",
    project_banner: AllImages.p1,
    title: "E-Commerce Website",
    short_desc: "An online platform to buy and sell products.",
    technology_used: "React, Node.js, MongoDB, Tailwind CSS",
    live_link: "https://example.com/project-one",
    client: "https://github.com/user/ecommerce-client",
    server: "https://github.com/user/ecommerce-server",
  },
  {
    _id: "2",
    project_banner:AllImages.p2,
    title: "Task Manager App",
    short_desc: "A productivity tool to manage daily tasks.",
    technology_used: "Next.js, Express, PostgreSQL",
    live_link: "https://example.com/project-two",
    client: "https://github.com/user/task-manager-client",
    server: "https://github.com/user/task-manager-server",
  },
  {
    _id: "3",
    project_banner: AllImages.p3,
    title: "Portfolio Website",
    short_desc: "A personal portfolio to showcase skills and projects.",
    technology_used: "HTML, CSS, JavaScript",
    live_link: "https://example.com/portfolio",
    client: "https://github.com/user/portfolio",
    server: "N/A",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((item) => (
          <div key={item._id} className="border rounded-lg shadow p-4">
            <Image
              src={item?.project_banner}
              alt={item.title}
              className="w-full h-48 object-cover rounded"
              height={100}
              width={100}
            />
            <h2 className="text-xl font-bold mt-4">{item.title}</h2>
            <p className="text-gray-600">{item.short_desc}</p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Tech:</strong> {item.technology_used}
            </p>
            <div className="mt-3 space-x-2">
              <a
                href={item.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Live
              </a>
              <a
                href={item.client}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                Client
              </a>
              {item.server !== "N/A" && (
                <a
                  href={item.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 underline"
                >
                  Server
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
