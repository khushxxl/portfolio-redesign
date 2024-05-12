import { skills } from "@/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1 className=" text-5xl font-extrabold text-pink-200 mt-10">Hey! I'm</h1>
      <Link href="/">
        <h1 className=" text-5xl font-extrabold text-blue-500 mt-5">
          Khushaal Choithramani
        </h1>
      </Link>
      <h1 className="text-5xl mt-4 text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
        Full Stack Developer
      </h1>
      <h1 className=" font-mono text-md font-normal tracking-wide text-yellow-300 mt-5">
        Transforming Code into Aesthetic Masterpieces for a Seamless User
        Experience.
      </h1>
      <h1 className=" font-mono text-sm font-normal tracking-wide text-yellow-300 mt-5">
        Deploying apps since 2020 🚀
      </h1>
      <div className="mt-10 flex items-center flex-col justify-center space-y-5 md:flex-row md:space-x-10 md:space-y-0">
        {skills.map((data, i) => {
          return (
            <div
              key={i}
              className="relative focus:outline-none inline-flex group cursor-pointer"
            >
              <div className="absolute focus:outline-none hover:outline-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <div className="relative focus:outline-none hover:outline-none  border-2 inline-flex items-center justify-center text-white transition-all duration-200 bg-gray-900 font-pj rounded-full ">
                <p className="mx-7 my-2">{data}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Image
          className=""
          alt=""
          src={"https://i.ibb.co/b5TnCfn/IMG-4160.png"}
          width={200}
          height={200}
        />
      </div>
      <h1 className="mt-20">
        <ArrowDown size={70} className="animate-bounce" />
      </h1>
    </div>
  );
}

export default Hero;
