import React from "react";
import ProjectCard from "./ProjectCard";
import { liveProjects } from "@/data";

function LiveProjects() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        Live Projects
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        Live SAAS projects that are being used by users ⚡️
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-stretch">
        {liveProjects.map((item, i) => {
          return (
            <ProjectCard
              key={i}
              title={item.title}
              deployedLink={item.deployedLink}
              desc={item.dsc}
              tech={item.tech}
              type={item.type}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LiveProjects;
