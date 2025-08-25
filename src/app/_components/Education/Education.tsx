"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import { MyEducation } from "@/app/types/project";

function EducationHome() {
  const MyEducationData: MyEducation[] = [
    {
      id: 1,
      degree: "Bachelor of Arts – Philosophy Department",
      institution: "Faculty of Arts, Helwan University, Cairo",
      period: "(Graduation Year: 2022)",
      description: [
        "Earned a Bachelor's degree (BA) in Philosophy.",
        "Developed analytical thinking, research, and critical reasoning skills.",
      ],
    },
    {
      id: 2,
      degree: "Frontend Development Diploma",
      institution: "Route IT Training Center",
      period: "(Certificate Date: 20 July 2025)",
      description: [
        "Completed a professional diploma in Frontend Development.",
        "Gaining hands-on experience with React, Next.js, Tailwind CSS, and modern web tech to build dynamic, responsive websites",
      ],
      certificateImg: "/images/Frontend Development Diploma Certificate.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="h2">
        Education<span className="text-purple-600">.</span>
      </h2>

      <div className="flex flex-col gap-8 pt-5">
        {MyEducationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white/60 dark:bg-gray-800/60 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl h3 mb-2 font-semibold">{edu.degree}</h3>
            <p className="text-[#845f56] mb-1">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
            <ul className="space-y-2 text-[#845f56]">
              {edu.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaGraduationCap className="text-red-900 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {edu.certificateImg && (
              <div className="mt-4">
                <Image
                  src={edu.certificateImg}
                  alt={`${edu.degree} Certificate`}
                  width={500}
                  height={350}
                  className="rounded-lg shadow-md border border-gray-200 max-w-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationHome;
