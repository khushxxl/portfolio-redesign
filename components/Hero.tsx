import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1 className=" text-5xl font-extrabold text-pink-200 mt-10">Hey! I'm</h1>
      <h1 className=" text-5xl font-extrabold text-blue-500 mt-5">
        Khushaal Choithramani
      </h1>
      <h1 className=" text-5xl font-extrabold underline text-yellow-300 mt-5">
        Full Stack Developer
      </h1>
      <h1 className=" text-sm font-normal tracking-wide text-yellow-300 mt-5">
        Transforming Code into Aesthetic Masterpieces for a Seamless User
        Experience.
      </h1>
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
