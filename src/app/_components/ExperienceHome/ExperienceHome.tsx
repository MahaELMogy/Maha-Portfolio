"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

function ExperienceHome() {
  // state to get index
  const [ActiveIndex, setActiveIndex] = useState(0);
  // array includ in all my Experience
  const MyExperience = [
    {
      title: "Administrator",
      company: "A.B.G Real Estate, Cairo",
      period: "(Jul 2022 – Oct 2024)",
      description: [
        "Handled daily administrative operations and documentation",
        "Coordinated between departments and ensured efficient workflow",
        "Maintained accurate records and improved internal systems",
        "Built strong organizational and multitasking capabilities",
      ],
    },
    {
      title: "Administrator & Marketing Specialist",
      company: "Step One",
      period: "(Mar 2018 – Oct 2020)",
      description: [
        "Administrator: Optimized internal processes and managed office tasks",
        "Marketing Specialist: Developed marketing materials and strategies",
        "Strengthened client communication and relationship-building skills",
      ],
    },
    {
      title: "Call Center Agent",
      company: "WASLA",
      period: "(Jan 2017 – Jan 2018)",
      description: [
        "Delivered excellent customer support and technical assistance",
        "Enhanced team communication processes and customer satisfaction",
        "Developed resilience and problem-solving in fast-paced environments",
      ],
    },
  ];
  // const save index of My Experience
  const active = MyExperience[ActiveIndex];

  return (
    <section className="container mx-auto px-4 ">
      <h2 className="h2">
        Experience<span className="text-purple-600">.</span>
      </h2>

      <div className="flex flex-col lg:flex-row pt-10 gap-10">
        {/* Company Tabs */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 border-l-2 border-gray-200">
          {MyExperience.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative pl-4 py-2 text-left transition-all duration-200 cursor-pointer ${
                ActiveIndex === index
                  ? "text-red-900 font-semibold before:content-[''] before:absolute before:left-[-2] before:top-[-20] before:h-20 before:w-[3px] before:bg-red-900"
                  : "text-[#845f56] hover:text-red-900"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="w-full lg:w-3/4">
          <h3 className="text-xl h3 mb-4 font-semibold">{active.title}</h3>
          <p className="text-[#845f56] mb-4">{active.period}</p>
          <ul className="space-y-3 text-[#845f56]">
            {active.description.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheck className="text-red-900 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceHome;
