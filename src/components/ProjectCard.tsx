import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProjectList {
  label: string;
  poster: string;
  url: string;
}
const ProjectCard = ({ label, poster, url }: ProjectList) => {
  return (
    <div className="relative h-64 bg-black rounded-lg overflow-hidden shadow-lg mx-auto">
      <Image
        src={`/projectPoster/${poster}`}
        alt="Movie poster of a woman with curly hair surrounded by photographers"
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
      />

      <Link
        target="_blank"
        href={url}
        className="absolute bottom-0 left-0 right-0 text-center text-white text-sm bg-gray-800 p-4"
      >
        <span className="block">{label}</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
