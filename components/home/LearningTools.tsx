import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const LearningTools = () => {
  return (
    <div id="tools" className="h-full py-8 px-8 md:px-4 w-full dark:bg-slate-900 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" w-full max-w-7xl mb-12 mt-12 space-y-4 text-left z-10 ">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900">
            Tools for {" "}
            <span className="text-indigo">Personal</span> &
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-950">
            Professional {" "}
            <span className="text-indigo">Improvement </span>
        </h1>
        <p className="text-sm text-slate-600 dark:text-white max-w-5xl">
            {`These tools have been incredibly powerful, facilitating self-exploration 
             and enhancing my skills and knowledge. Through hands-on experience, they have 
             played a pivotal role in shaping my journey of personal and professional development.`}
        </p>
      </div>
   
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] z-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton imageUrl={item.imageUrl} />}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
interface SkeletonProps {
    imageUrl?: string;
  }
const Skeleton:React.FC<SkeletonProps> = ({ imageUrl }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}>
    {!imageUrl && (
      <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.6] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-slate-950 flex-1 w-full h-full rounded-xl"></div>
    )}
  </div>
);

const items = [
    {
      title: "GitHub for Repository",
      description: "A vital platform for version control, collaboration, and project management in software development. GitHub helps streamline workflows and manage code efficiently, making it essential for any developer. It's where I store my projects and collaborate with other developers.",
      className: "md:col-span-2",
      imageUrl: "https://githubuniverse.com/og-image-24.jpg",
    },
    {
      title: "Google",
      description: "A comprehensive search engine and suite of tools that provide valuable resources for learning, problem-solving, and staying updated with the latest in technology. Google is indispensable for research and development. It's where I read documentation and search for answers to my coding questions.",
      className: "md:col-span-1",
      imageUrl: "https://4kwallpapers.com/images/wallpapers/google-3d-4480x2520-10995.jpg",
    },
    {
      title: "Visual Studio Code",
      description: "A powerful and versatile code editor that enhances productivity with features like debugging, task running, and version control. Visual Studio Code's intuitive design and extensions make it a favorite among developers. This is where I write and debug my code.",
      className: "md:col-span-1",
      imageUrl: "https://external-preview.redd.it/Uz0PH-r8nGx8gU9UCHURirqrtXgLhtqJiNDVgT03jtw.jpg?auto=webp&s=580d0dc62b6581d2a8ff8e628d3bea5d53bdf5d2",
    },
    {
      title: "YouTube",
      description: "An invaluable resource for learning through video tutorials. YouTube provides a vast array of tutorials that help me learn new skills, stay updated with the latest trends in web development, and improve my coding techniques.",
      className: "md:col-span-2",
      imageUrl: "https://www.cnet.com/a/img/resize/55f2ab60e25d1ec7e18c4290c93e6e27300c8cc6/hub/2020/01/01/301595b2-19b5-4399-94a2-718b3e3ed15c/youtube-logo-laptop-4692.jpg?auto=webp&fit=crop&height=675&width=1200",
    },
  ];
  

export default LearningTools;
