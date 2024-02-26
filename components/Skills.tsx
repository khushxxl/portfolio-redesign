import { skills } from "@/data";
import React from "react";

function Skills() {
  return (
    <div className="p-2">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        Skills
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        Skills that I excel and have a lot of experience inn 💪
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-3 place-items-center text-justify">
        {skills?.map((data, i) => {
          return (
            <div
              key={i}
              className="bg-slate-800 transform hover:scale-110 transition-all duration-150 cursor-pointer min-w-[170px] text-center  p-[3px] mt-5 rounded-md"
            >
              <h1>{data}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
