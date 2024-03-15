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
