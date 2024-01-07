import React from "react";
import ProjectCard from "./ProjectCard";
import { moreProjects } from "@/data";

function ExtraProjects() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        More Projects
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        More projects that I built 😉
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {moreProjects.map((item, i) => {
          return (
            <ProjectCard
              key={i}
              title={item.title}
              deployedLink={item.deployedLink}
              desc={item.dsc}
              tech={item.tech}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExtraProjects;
