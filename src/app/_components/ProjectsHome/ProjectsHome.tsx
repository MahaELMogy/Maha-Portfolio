"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useProjects } from "../context/ProjectsContext";

function ProjectsHome() {
  const projects = useProjects();

  return (
    <section className="container mx-auto px-4">
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
                <h4 className="text-lg line-clamp-1 font-bold text-[#302020] hover:text-[#7a2d31] transition">
                  {project.title}
                </h4>
                <span className="text-xs line-clamp-1 bg-[#e5d6c6] text-[#302020] px-3 py-1 rounded-full">
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
                <Link href={`/project/${project.name}`}>
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
