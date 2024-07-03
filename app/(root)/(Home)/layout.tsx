"use client"
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data/index'
import React from 'react'

const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='h-screen bg-slate-50 dark:bg-slate-900'>
       <FloatingNav navItems={navItems} />
        {children}
    </section>
  )
}

export default HomeLayout
