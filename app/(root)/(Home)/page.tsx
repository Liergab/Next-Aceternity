import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import LearningTools from "@/components/home/LearningTools";
import Techstack from "@/components/home/Techstack";
import AboutMe from "@/components/home/AboutMe";
import ThemeSwitch from "@/components/ThemeSwitch";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Testimony from "@/components/home/Testimony";
import Footer from "@/components/home/Footer";
const Home = () => {
  return (
    <section className="relative">
    <div id='home' className="h-screen w-full rounded-md flex md:items-center md:justify-center dark:bg-slate-900 antialiased bg-grid-black/[0.05] dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute top-28 right-[40%] md:top-20 md:right-20 flex gap-2 z-20">
       <ThemeSwitch/>
       <FaLinkedin/>
       <FaGithubSquare />
       <FaFacebookSquare />
       
      </div>
        <div className='glow absolute top-[70%] right-auto z-10'></div>
        <div className='glow1 absolute top-[40%] left-0 z-10'></div>
        
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-20  md:mt-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white text-center ">
            FRONT END 
            <br /> <span className="text-indigo text-4xl">& BACKEND DEVELOPER</span>
          </h1>
          <p className="mt-4 font-bold text-5xl md:text-7xl text-slate-900 dark:text-neutral-300  text-center mx-auto">
          Step Into The World Of Mine
          </p>
          <p className="mt-4 font-normal text-base text-slate-900 dark:text-neutral-300 max-w-lg text-center mx-auto">
            Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-8 gap-4">
            <p>BRYAN GABRIEL RUBIO 👨🏻‍💻</p>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-700"
            >
                Download CV
            </Button>
          </div>
      </div>
    </div>
  
    <div className='glow2 absolute top-[25%] right-20 z-10'></div>
    <LearningTools/>
    <div className='glow1 absolute top-[50%] left-1/2 z-10'></div>
    <div className='glow2 absolute top-[55%] left-1 z-10'></div>
    <div className='glow3 absolute top-[65%] right-1 z-10'></div>
    <Techstack/>
    <AboutMe/>
    <Testimony/>
    <Footer/>
    </section>
  );
}

export default Home
