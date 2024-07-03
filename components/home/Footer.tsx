import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='h-full py-10  dark:bg-slate-950 w-full flex justify-center items-center'>
        <div className='flex flex-col px-4 md:px-0 md:flex-row items-center justify-center w-full max-w-7xl gap-4 md:gap-0'>
            <div className='flex-1 flex '>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <h1>Logo</h1>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex items-center text-sm md:text-base justify-center space-x-2 md:space-x-6 lg:space-x-10 text-slate-500'>
                            <h1 className='cursor-pointer'>HOME</h1>
                            <h1 className='cursor-pointer'>SKILLS</h1>
                            <h1 className='cursor-pointer'>PROJECTS</h1>
                        </div>
                        <div>
                            <h1 className='text-slate-500 text-sm md:text-base'>@ 2024 Philippines. All right Reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-row-reverse '>
                <div className='flex flex-col gap-4'>
                    <div className='flex  items-center justify-center space-x-8 '>
                        <FaGithub className='text-2xl text-slate-500'/>
                        <FaFacebook className='text-2xl text-slate-500'/>
                        <FaTwitter className='text-2xl text-slate-500'/>
                        <FaLinkedin className='text-2xl text-slate-500'/>
                        <MdOutlineEmail className='text-3xl text-slate-500'/>

                    </div>
                    <div>
                            <h1 className='text-indigo'>Thankyou for Visiting my Portfolio!</h1>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer