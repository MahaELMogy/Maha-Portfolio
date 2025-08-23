// src/app/project/[name]/page.tsx
"use client";
import { useProjects } from "@/app/_components/context/ProjectsContext";
// import { notFound } from "next/navigation";
// import { log } from "node:console";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails(Props) {
  // get name Projects i clicked on
  const { name } = use(Props.params);
  console.log(name);
  // call array of Projects from context
  const projects = useProjects();
  console.log(projects);

  const project = projects.find((Project) => {
    return Project.name.toLowerCase() === name.toLowerCase();
  });
  console.log(project);

  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image */}
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md border border-[#e5d6c6]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-[#302020]">
              {project.title}
            </h1>
            <p className="text-[#845f56]">{project.description}</p>

            <div>
              <p>
                <strong className="text-[#7a2d31]">Category:</strong>{" "}
                {project.category}
              </p>
              <p>
                <strong className="text-[#7a2d31]">Status:</strong>{" "}
                {project.status}
              </p>
              <p>
                <strong className="text-[#7a2d31]">Duration:</strong>{" "}
                {project.duration}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#f9f5f2] text-[#7a2d31] px-3 py-1 rounded-md border border-[#e5d6c6]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              {/* Back Button */}
              <Link href="/">
                <button
                  className="bg-[#e5d6c6] text-[#302020] px-4 py-2 rounded-md hover:bg-[#d8c0ae] transition cursor-pointer
"
                >
                  ← Back to Home
                </button>
              </Link>

              {/* GitHub Button */}
              {project.repositories && (
                <a
                  href={project.repositories}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7a2d31] text-white px-4 py-2 rounded-md hover:bg-[#5a1f23] transition"
                >
                  View on GitHub ↗
                </a>
              )}

              {/* Live Demo Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e7b89c] text-[#302020] hover:bg-[#dda88a] px-4 py-2 rounded-md  transition"
                >
                  Live Demo 🚀
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
