'use client'
import React from 'react'
import { HoverEffect } from '../ui/cart-hover-effect'
import { FaLaravel, FaVuejs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiGit, SiHtml5, SiJavascript, SiMaterialdesign, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPostman, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
const Techstack = () => {
  return (
    <div id='skills' className="h-full min-h-screen w-full px-8 md:px-4 dark:bg-slate-900 bg-white  dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="w-full max-w-7xl mx-auto z-10 mt-20">
      <h1 className="dark:text-indigo text-slate-950 text-3xl md:text-5xl font-bold">Technical Skills</h1>
      <p className="text-slate-950 dark:text-white mt-4 test-sm md:text-xl">
          Below are the technologies I have utilized in my projects, as well as some I am familiar with and plan to use in the future.
      </p>
      <HoverEffect items={skills} />
    </div>
  </div>
    
  )
}
const skills=[
  {
      text:'ReactJs',
      Icon: SiReact
  },
  {
    text:'VueJs',
    Icon: FaVuejs
  },
  {
    text:'NextJs',
    Icon: RiNextjsLine
  },
  {
      text:'Node',
      Icon: SiNodedotjs
  }, 
  {
      text:'Tailwind',
      Icon: SiTailwindcss
  },
  {
      text:'MUI',
      Icon:SiMaterialdesign,
  },
  {
    text:'Express',
    Icon: SiExpress
  },
  {
    text:'Laravel',
    Icon:FaLaravel,
},
  {
      text:'MongoDB',
      Icon:SiMongodb,
  },
  {
      text:'MySQL',
      Icon:SiMysql,
  }, 
  {
    text:'PHP',
    Icon:SiPhp,
  },
  {
      text:'Javascript',
      Icon:SiJavascript,
  },
  {
    text:'Typescript',
    Icon:SiTypescript,
},
  {
      text:'Postman',
      Icon:SiPostman,
  },
   {
      text:'Git',
      Icon:SiGit,
  },
  {
      text:'Html',
      Icon:SiHtml5
  },

]
export default Techstack
