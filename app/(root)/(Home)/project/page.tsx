import GLobe from '@/components/Globe'
import Footer from '@/components/home/Footer';
import Projectcomp from '@/components/project/Project';

import ThemeSwitch from '@/components/ThemeSwitch'
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Project = () => {
  return (
    <section className='dark:bg-slate-900 bg-white  bg-grid-black/[0.05] dark:bg-grid-white/[0.02] '>
      <div className=' relative bg-grid-black/[0.05] dark:bg-grid-white/[0.02] dark:bg-slate-900 bg-white '>
        <div className="absolute top-28 right-[40%] md:top-20 md:right-20 flex gap-2 z-20">
          <ThemeSwitch/>
          <Link href="https://www.linkedin.com/in/bryan-gabriel-rubio-33b8a1255/">
              <FaLinkedin/>
          </Link>
          <Link href='https://github.com/Liergab/'>
              <FaGithubSquare />
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=100008970096684'>
              <FaFacebookSquare />
          </Link>
        </div>
        <div className='w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row dark:bg-slate-900  dark:bg-grid-white/[0.02] '>
            <div className='flex-1 flex flex-col w-full items-center justify-center h-60 md:h-screen mt-40 md:mt-0 px-4 '>
                <p className='text-4xl font-bold text-indigo'>Projects And Work Experiences</p>
                <p className="mt-4 text-lg max-w-[560px] leading-6 text-gray-600 dark:text-gray-400">
                    Below is a collection of my  projects and professional experiences, showcasing my abilities in full-stack development, Agile project management, and comprehensive testing.
                </p>
            </div>
            <div className='flex-1 mt-[-70px] md:mt-10'>
                <GLobe/>
            </div>
        </div>
    </div>
    <Projectcomp/>
    <Footer/>
  </section>
  )
}

export default Project