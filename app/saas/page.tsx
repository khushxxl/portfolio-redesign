import {
  InfinityIcon,
  Linkedin,
  LinkedinIcon,
  Twitter,
  SquareCodeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SaasPage() {
  const ProjectCard = ({
    title,
    desc,
    image,
    url,
  }: {
    title: string;
    desc: string;
    image: any;
    url: string;
  }) => {
    return (
      <div className="bg-[#1C1C1C] flex items-center justify-evenly p-5 rounded-xl md:max-w-2xl max-w-sm w-full">
        <div className=" flex items-center">
          <Image
            alt=""
            src={image}
            className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
          />
          <div className="ml-3">
            <p className="font-bold">{title}</p>
            <p className="text-gray-500 max-w-xs">{desc}</p>
          </div>
        </div>
        {url && (
          <Link target="_blank" href={url}>
            <div className="bg-[] border-2 p-3 px-6 rounded-lg text-center flex items-center">
              <p>Visit</p>
            </div>
          </Link>
        )}
      </div>
    );
  };
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
      <div className="mt-20">
        <SquareCodeIcon size={40} />
      </div>

      <div className="mt-20 flex flex-col items-center">
        <p className="max-w-xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-semibold text-4xl text-center">
          a guy who loves to build cool mobile and web projects and turn them
          into saas
        </p>
        <div className="flex space-x-3 mt-4">
          <Link target="_blank" href={"https://twitter.com/khushaal_04"}>
            <div className="mt-5 cursor-pointer flex bg-[#1C1C1C] p-2 rounded-full space-x-2 border  ">
              <Twitter fill="#2B9BF0" color="#2B9BF0" />
              <p>@khush.dev</p>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/khushcodes/"}
          >
            <div className="mt-5 cursor-pointer flex bg-[#1C1C1C] p-2 rounded-full space-x-2 border  ">
              <LinkedinIcon fill="#2B9BF0" color="#2B9BF0" />
              <p>@khushcodes</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl w-full mt-10 flex space-y-5 items-center justify-center flex-col">
        <ProjectCard
          title="Simple JS Code"
          desc={"A hand-picked collection of more than 150+ JS code snippets"}
          image={require("../../assets/sjcIcon.png")}
          url={"https://www.simplejscode.com/"}
        />
      </div>
    </div>
  );
}

export default SaasPage;
