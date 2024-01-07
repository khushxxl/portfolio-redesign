import { Link2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  deployedLink: string;
  desc: string;
  tech: string[];
}

function ProjectCard({ title, deployedLink, desc, tech }: CardProps) {
  const dummy = ["REACT", "NEXTJS", "TAILWIND", "FIREBASE", "REACT NATIVE"];
  return (
    <div className="m-10 border-[0.1px] transform transition-transform duration-300 hover:scale-105 border-gray-600 max-w-sm cursor-pointer">
      {/* <Image alt="" src={""} /> */}
      <div className="h-44 bg-black " />
      <div className="space-y-4 p-3">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-gray-300 text-xl">{title}</h1>
          {deployedLink && (
            <a target="_blank" href={deployedLink}>
              <h1 className="flex font-normal space-x-2">
                <Link2Icon /> <span>Live</span>
              </h1>
            </a>
          )}
        </div>
        <p className="text-left text-sm  text-gray-400">{desc}</p>
        <hr />
        <div className="grid gap-y-2 grid-cols-3">
          {tech?.map((text, i) => {
            return (
              <div key={i} className="bg-gray-800 w-fit p-2  rounded-md">
                <p className="text-sm font-semibold">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
