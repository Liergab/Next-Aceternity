import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div id='contact' className='h-full py-10  dark:bg-slate-950 w-full flex justify-center items-center'>
        <div className='flex flex-col px-4 md:px-0 md:flex-row items-center justify-center w-full max-w-7xl gap-4 md:gap-0'>
            <div className='flex-1 flex '>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <Image src="/logo.svg" alt='logo' width={20} height={20} className='w-32'/>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex items-center text-sm md:text-base justify-center space-x-2 md:space-x-6 lg:space-x-10 text-slate-500'>
                            <Link href="#home">
                            <h1 className='cursor-pointer'>HOME</h1>
                            </Link>
                            <Link href="#skills">
                            <h1 className='cursor-pointer'>SKILLS</h1>
                            </Link>
                           
                            <h1 className='cursor-pointer'>PROJECTS</h1>
                        </div>
                        <div>
                            <h1 className='text-slate-500 text-xs md:text-base'>@ 2024 Philippines. All right Reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-row-reverse '>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <div className='flex  items-center justify-center space-x-4 md:space-x-8 '>
                        <Link href='https://github.com/Liergab/'>
                           <FaGithub className='test-base md:text-2xl text-slate-500 cursor-pointer'/>
                        </Link>
                        <Link href='https://www.facebook.com/profile.php?id=100008970096684'>
                            <FaFacebook className='test-base md:text-2xl text-slate-500 cursor-pointer'/>
                        </Link>
                        <FaTwitter className='test-base md:text-2xl text-slate-500 cursor-pointer'/>
                        <Link href="https://www.linkedin.com/in/bryan-gabriel-rubio-33b8a1255/">
                             <FaLinkedin className='test-base md:text-2xl text-slate-500 cursor-pointer'/>
                        </Link>
                        <Link href="mailto:bryangabrielberja25@gmail.com">
                            <MdOutlineEmail className='test-base md:text-3xl text-slate-500 cursor-pointer'/>
                        </Link>

                    </div>
                    <div>
                            <h1 className='text-indigo text-xm md:text-base'>Thankyou for Visiting my Portfolio!</h1>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer