import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-card'

const Testimony = () => {
  return (
    <div id='testimonials' className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-slate-900 bg-grid-black/[0.06] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className='text-7xl font-bold mb-20 text-indigo'>Testimony</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default Testimony

const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      title: "Software Engineer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      title: "Software Engineer",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      title: "Software Engineer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      title: "Software Engineer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lorem Ipsum",
      title: "Software Engineer",
    },
  ];
