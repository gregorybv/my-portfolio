import React from 'react';
import WorkItem from "./WorkItem.jsx";

const data = [
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 Years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid asperiores culpa.'
  },
  {
    year: 2017,
    title: 'Google',
    duration: '3 Years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid asperiores culpa.'
  },
  {
    year: 2015,
    title: 'Amazon',
    duration: '2 Years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid asperiores culpa.'
  },
  {
    year: 2014,
    title: 'Facebook',
    duration: '3 Years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid asperiores culpa.'
  },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040] m-auto md:pl-20 pt-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}/>
      ))}
    </div>
  )
}

export default Work



