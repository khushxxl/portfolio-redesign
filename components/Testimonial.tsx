import * as React from "react";

import { testimonials } from "@/data";
import Marquee from "react-fast-marquee";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function Testimonial() {
  const MarqueeComponent = ({ data }: { data: any }) => {
    return (
      <div className="max-w-lg text-justify mr-20 p-4 flex flex-col  min-h-[300px] rounded-md bg-slate-800">
        <div className="flex items-center space-x-3">
          <UserCircleIcon className="h-8 w-8" />
          <div>
            <p>{data.name}</p>
            <p className="text-gray-300 text-sm font-semibold">{data.work}</p>
          </div>
        </div>
        <p className="mt-3">{data.text}</p>
      </div>
    );
  };
  return (
    <div className="flex  flex-col p-5">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        Testimonials
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        Let's hear what clients have to say about my work 🧑‍💻
      </h1>
      <div className="flex items-center justify-center mt-10">
        <Marquee direction="right" className="">
          {testimonials.map((data, i) => {
            return <MarqueeComponent key={i} data={data} />;
          })}
        </Marquee>
      </div>
    </div>
  );
}
