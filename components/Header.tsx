import {
  Github,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { DarkModeToggler } from "./DarkModeToggler";
import HeaderDropDown from "./HeaderDropDown";

function Header() {
  return (
    <div className=" sticky top-0 z-50 border-b-[0.1px] md:px-10 px-4 py-3 bg-[#10101A] border-gray-600 flex items-center justify-between ">
      <div className="flex items-center cursor-pointer">
        <h1 className="text-lg font-mono font-semibold tracking-wide ml-5 text-gray-100">
          Khushaal Choithramani
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        <div className="hidden md:flex items-center space-x-4">
          <a target="_blank" href="https://github.com/khushxxl">
            <GithubIcon className=" text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/khushcodes/">
            <LinkedinIcon className=" text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://twitter.com/khushaal_04">
            <TwitterIcon className=" text-gray-400 hover:text-white cursor-pointer" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/khushcodes/">
            <Button variant={"secondary"}>
              <MailIcon className="mr-2 h-4 w-4" /> Hire Me
            </Button>
          </a>
        </div>
        <div className="md:hidden flex">
          <HeaderDropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <Image
          className=""
          alt=""
          src={"https://i.ibb.co/b5TnCfn/IMG-4160.png"}
          width={50}
          height={50}
        /> */
}
