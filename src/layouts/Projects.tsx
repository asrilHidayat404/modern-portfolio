import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import React from "react";
type ProjectList = {
  label: string;
  poster: string;
  url: string;
}[];

const projectList: ProjectList = [
  {
    label: "Wedding web",
    poster: "wedding1.png",
    url: "https://wedding-huda-yuli.vercel.app/?to=",
  },
  {
    label: "Wedding web 2",
    poster: "wedding2.png",
    url: "https://ahmadfawaz-febrianadiaruhaini.vercel.app/?to=",
  },
];
const Projects = () => {
  return (
    <div className="w-full py-5 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 min-h-screen">
      <header className="w-full p-10 text-center">
        <p className="text-3xl font-bold">My Projects</p>
      </header>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 px-10 place-items-center">
        {projectList.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              label={project.label}
              url={project.url}
              poster={project.poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
