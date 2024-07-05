"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { LayoutGrid } from "../ui/layout-grid";


const AboutMe = () => {
  return (
    <div id="about" className="h-full w-full rounded-md  relative flex flex-col items-center  antialiased">
    <div className="w-full mx-auto p-4 space-y-10 mt-20 ">
      <div className="flex flex-col">
          <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            BRYAN GABRIEL RUBIO
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {`I'm a FullStack Developer passionate about creating and building simple web applications. I enjoy studying and exploring the diverse world of web development, constantly seeking to enhance my skills and knowledge `}
          </p>
      </div>
      <div className="h-screen py-4  w-full z-50 rounded-xl ">
      <LayoutGrid cards={cards} />
    </div>
    </div>
    <BackgroundBeams />
  </div>
  )
}

export default AboutMe


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">My NextJs Portfolio</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Updated Portfolio Using Next Acceternity.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Graduation Picture</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I graduated from the Polytechnic University of the Philippines with a Bachelor of Science in Information Technology.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">BossRod Community</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I am part of communities like BossRod TV Coding and I am always active and engaged on Discord.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">After College: Studying Code</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I dedicated my time after graduation to upskilling and learning new things to further enhance my abilities.
      </p>
    </div>
  );
};
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/default.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/grad.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/bossrod.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/coding.jpg",
  },
];
