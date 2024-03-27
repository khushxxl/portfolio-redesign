import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  deployedLink: string;
  desc: string;
  tech: string[];
  img?: string;
  type: string;
}

function ProjectCard({
  title,
  deployedLink,
  desc,
  tech,
  img,
  type,
}: CardProps) {
  const dummy = ["REACT", "NEXTJS", "TAILWIND", "FIREBASE", "REACT NATIVE"];
  return (
    <div className="m-10 border-[0.1px] transform transition-transform duration-300 hover:scale-105 border-gray-600 max-w-sm cursor-pointer">
      <Link className="" target="_blank" href={deployedLink}>
        {img && (
          <Image alt="" src={img} width={400} height={40} objectFit={""} />
        )}
      </Link>

      <div className="space-y-4 p-3">
        <div className="flex items-center flex-col md:flex-row  justify-between">
          <h1 className="font-bold text-gray-300 text-xl">{title}</h1>
          {deployedLink && (
            <a target="_blank" href={deployedLink}>
              <p className="flex font-normal space-x-2">
                <Link2Icon /> <span>Live</span>
              </p>
            </a>
          )}
        </div>
        <div className="bg-slate-800 p-2 text-sm flex w-fit rounded-md">
          <p>{type}</p>
        </div>
        <div className="">
          <p className="text-left text-sm  text-gray-400">{desc}</p>
        </div>
        <hr />
        <div className="grid gap-y-2 grid-cols-2 md:grid-cols-3">
          {tech?.map((text, i) => {
            return (
              <div key={i} className="bg-gray-800 w-fit h-fit p-2  rounded-md">
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
