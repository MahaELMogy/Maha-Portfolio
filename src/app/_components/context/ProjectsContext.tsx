// src/context/ProjectsContext.tsx
"use client";

import React, { createContext, useContext } from "react";

export type ProjectType = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  technologies: string[];
  duration: string;
  github: string;
  repositories: string;
};

const projectsData: ProjectType[] = [
  {
    id: 1,
    name: "ImGamer",
    title: "Games Web Application",
    description:
      "ImGamer is a web application that allows users to browse and explore a wide range of video games. The app provides detailed information about each game, including genres, platforms, ratings, and more. It features a clean and responsive UI built with Tailwind CSS, and state management handled through Zustand. The project is built using Next.js for optimized routing and performance.",
    image: "/images/cropped_portfolio.png",
    category: "Web Development",
    status: "Completed",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript ",
      "NextJS",
      "TypeScript",
      "Zustand",
      "Tailwind",
    ],
    duration: "3 Days",
    github:
      "https://imgamer-n7b9-btpnnb3um-maha-el-mogys-projects.vercel.app/shooter",
    repositories: "https://github.com/MahaELMogy/IMGAMER",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    name: "FreshCart",
    description:
      "FreshCart is a modern and responsive e-commerce platform designed for selling eco-friendly and organic products. It includes features such as user authentication, product filtering, cart functionality, and a seamless checkout experience. The app integrates form validation using Formik, handles server communication with Axios and TanStack Query, and uses Context API for global state management. FreshCart prioritizes clean UI and mobile-first design.",
    image: "/images/01.21.29_ec740734.jpg",
    category: "E-commerce",
    status: "In Progress",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Formik",
      "TanStack Query",
      "Context",
      "Axios",
      "Helmet",
    ],
    duration: "2 weeks",
    github: "https://mahaelmogy.github.io/freshcart-v1/",
    repositories: "https://github.com/MahaELMogy/freshcart-v1",
  },
  {
    id: 3,
    title: "Weather App",
    name: "Weather",
    description:
      "Weather is a lightweight weather forecasting application that allows users to search for any city and view real-time weather data, including temperature, humidity, wind speed, and general conditions. The app fetches data from a public weather API using Axios and is built with React Router for page navigation. It’s designed with a simple and clean user interface, optimized for both desktop and mobile devices.",
    image: "/images/40d0fc74-82e3-4cce-8eab-7337a1896f39.png",
    category: "Web Development",
    status: "Completed",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript ",
      "React",
      "React Router",
      "Axios",
    ],
    duration: "5 Days",
    github: "https://mahaelmogy.github.io/Weather/#",
    repositories: "https://github.com/MahaELMogy/Weather",
  },
];

const ProjectsContext = createContext<ProjectType[]>([]);

export const ProjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ProjectsContext.Provider value={projectsData}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
