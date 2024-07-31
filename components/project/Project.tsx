"use client"
import { SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJsonwebtokens, SiLaravel, SiMaterialdesign, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPrisma, SiReact, SiReactquery, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si'

import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'


const Projectcomp = () => {
    const Projects = [
        {
            title:'OJT-CONNECT',
            tech:[SiReact,SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiMui],
            link:'https://ojtconnect.com/',
            cover:'/ojt-connect.png',
            background:'bg-slate-900'
        },
        {
            title:'Old Portfolio 2023',
            tech:[SiNextdotjs, SiShadcnui, SiTailwindcss],
            link:'https://brygab.vercel.app/',
            cover:'/oldportfolio.png',
            background:'bg-slate-900'
        },
        {
            title:'Social Media App',
            tech:[SiNextdotjs, SiShadcnui, SiTailwindcss, SiFirebase],
            link:'https://next-x-twitter.vercel.app/',
            cover:'/twitterclone.jpg',
            background:'bg-slate-900'
        },
        {
            title:'Movie-Rating-App',
            tech:[SiReact,SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiMui],
            link:'https://review-movie-app.netlify.app',
            cover:'/movie-rating-app.png',
            background:'bg-slate-900'
        },
        {
            title:'BMIS (crud & authentication)',
            tech:[SiReact, SiReactquery, SiTailwindcss, SiLaravel, SiJsonwebtokens, SiMysql],
            link:'https://bmis-rl.netlify.app/',
            cover:'/bmis.png',
            background:'bg-slate-900'
        },
        {
            title:'NextJs OJT Connect CLone',
            tech:[SiNextdotjs, SiTailwindcss, SiShadcnui,],
            link:'https://github.com/Liergab/NextJs-Ojtconnect-Clone',
            cover:'/ojtconnect-clone.png',
            background:'bg-slate-900'
        },
         {
            title:'Mern Blog (crud & authentication)',
            tech:[SiReact, SiReactquery,SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiNodedotjs, SiPrisma],
            link:'https://bryanblog.netlify.app/login',
            cover:'/mern-blog.png',
            background:'bg-slate-900'
        },
        {
            title:'Github- Rest API and Other Frontend',
            tech:[SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb,SiExpress,SiLaravel,SiTypescript,SiVuedotjs ],
            link:'https://github.com/Liergab',
            cover:'/github.png',
            background:'bg-slate-900'
        },
        {
            title:'Laravel Vue Ecommerce',
            tech:[SiLaravel, SiVuedotjs, SiTailwindcss],
            link:'https://github.com/Liergab/Laravel-vue-ecommerce',
            cover:'/ecom.png',
            background:'bg-slate-900'
        },
      
       
    ]
  return (
    <div className='max-w-6xl mx-auto py-10 p-5 sm:p-0 mt-6 lg:mt-20 mb-10'>
          <div  className=' group w-full flex items-center '>
             <h1 className='text-indigo text-3xl md:text-5xl font-bold mx-auto'>Project List</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 lg:px-44 gap-5 '>
                {Projects.map((project, index) => {
                    return(
                        <Link href={project.link} key={index}>
                            <div className={`rounded-[6px]  ${project.background}`}>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full rounded-[4px] space-y-5 cursor-pointer'>
                                    <h1 className='text-xl font-bold'>{project.title}</h1>
                                    <div className='flex gap-2 items-center'>
                                        {project.tech.map((Icon, index) => {
                                            
                                            return <Icon key={index} className='w-8 h-8' />
                                        })}
                                    </div>
                                </DirectionAwareHover>

                            </div>
                        </Link>
                        
                    )
                })}
          </div>
    </div>
  )
}

export default Projectcomp