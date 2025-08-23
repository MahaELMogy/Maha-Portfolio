import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectsHome() {
  const projects = [
    {
      id: 1,
      name: "ImGamer",
      title: "Games Web Application",
      description:
        "This project is a Games Web Application built with React.js where users can browse and explore different games",
      image: "/images/cropped_portfolio.png",
      category: "Web Development",
      status: "Completed",
      technologies: ["React", "NextJS", "Zustand", "Tailwind"],
      duration: "3 Days",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      name: "FreshCart",
      description:
        "Modern e-commerce platform promoting eco-friendly products with integrated payment gateway, inventory management, and customer analytics.",
      image: "/images/01.21.29_ec740734.jpg",
      category: "E-commerce",
      status: "In Progress",
      technologies: [
        "React",
        "Formik",
        "TanStack Query",
        "Context",
        "Axios",
        "Helmet",
      ],
      duration: "2 weeks",
    },
    {
      id: 3,
      title: "Weather App",
      name: "Weather",
      description:
        "This project is a Weather Application built with React that allows users to search for and view real-time weather information for any city.",
      image: "/images/40d0fc74-82e3-4cce-8eab-7337a1896f39.png",
      category: "Web Development",
      status: "Completed",
      technologies: ["React", "React Router", "Axios"],
      duration: "5 Days",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-[#302020]">
        Projects<span className="text-[#7a2d31]">.</span>
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border border-[#e5d6c6] flex flex-col justify-between min-h-[480px]"
          >
            {/* Image */}
            <div className="w-full h-[200px] relative mb-4">
              <Image
                src={project.image}
                alt="Project thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              {/* Title + Category */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-[#302020] hover:text-[#7a2d31] transition">
                  {project.title}
                </h4>
                <span className="text-xs bg-[#e5d6c6] text-[#302020] px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#845f56] mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#f9f5f2] text-[#7a2d31] px-2 py-1 rounded-md border border-[#e5d6c6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}

              <div className="flex items-center justify-between pt-3 border-t border-[#e5d6c6] mt-auto">
                <span className="text-sm text-[#bf9476] flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  {project.duration}
                </span>
                <Link href={project.name}>
                  <button className="text-[#7a2d31] cursor-pointer hover:text-[#5a1f23] font-medium text-sm hover:underline">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsHome;
