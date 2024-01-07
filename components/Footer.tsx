import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#060810] h-[40vh] p-10 flex justify-center items-center flex-col">
      <h1 className="text-ms mt-10 text-blue-500 font-bold">
        Directly work with me
      </h1>
      <h1 className="text-3xl font-semibold mt-2 text-center">
        Have a project in mind?
      </h1>
      <p className="text-center max-w-lg mt-3 tracking-wide font-smeibold text-gray-400">
        Wondering to get started with a business? Or have been stuck on that app
        idea, feel free to talk about it with me directly on
        <a target="_blank" href="https://wa.me/7570283597">
          <p className="text-xl font-bold underline cursor-pointer  text-yellow-500">
            WhatsApp.
          </p>
        </a>
      </p>
      <div className="flex space-x-5 mt-10">
        <GithubIcon className=" text-gray-400 hover:text-white cursor-pointer hover:animate-bounce" />
        <LinkedinIcon className=" text-gray-400 hover:text-white cursor-pointer hover:animate-bounce" />
        <TwitterIcon className=" text-gray-400 hover:text-white cursor-pointer hover:animate-bounce" />
      </div>
    </div>
  );
}

export default Footer;
