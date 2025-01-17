import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative rounded-lg shadow-lg border border-[#00bbe081]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="object-contain w-full"
      />

      <div className=" p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
