import React from "react";
import ProjectCard from "./ProjectCard";
import { liveProjects, web3Projects } from "@/data";

function Web3Projects() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        Web 3 Projects 🔗
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        Live Web3 projects ⚡️
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-stretch">
        {web3Projects.map((item, i) => {
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

export default Web3Projects;
