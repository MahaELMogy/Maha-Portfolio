"use client";
import React from "react";
import { useProjects } from "@/app/_components/context/ProjectsContext";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/app/types/project";

type ProjectPageProps = {
  params: Promise<{ name: string }>;
};

export default function ProjectDetails({ params }: ProjectPageProps) {
  const { name } = React.use(params); // تفكيك الـ Promise

  const projects = useProjects();
  const project: ProjectType | undefined = projects.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!project) return <div>Project not found!</div>;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md border border-[#e5d6c6]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#302020]">{project.title}</h1>
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
            <Link href="/">
              <button className="bg-[#e5d6c6] text-[#302020] px-4 py-2 rounded-md hover:bg-[#d8c0ae] transition cursor-pointer">
                ← Back to Home
              </button>
            </Link>

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

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e7b89c] text-[#302020] hover:bg-[#dda88a] px-4 py-2 rounded-md transition"
              >
                Live Demo 🚀
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
