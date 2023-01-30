import React from 'react';
import WorkItem from "./WorkItem.jsx";

const data = [
  {
    year: 2022,
    title: 'Salt&Pepper Agency',
    duration: '1 Year',
    details: 'UI design.\n' +
      'Implementation of new functionality.\n' +
      'Adaptive and cross-browser layout using HTML, CSS and JavaScript.\n' +
      'Developing web applications using React.js, project support from the beginning of development to putting them into production.\n' +
      'Support of completed web projects.\n' +
      'Interaction with backend developers.'
  },
  {
    year: 2021,
    title: 'Web Developer Freelance',
    duration: '1 Year',
    details: 'Web site layout of various complexity (adaptive, cross-browser, rubber) and other digital projects. Client-side application development using HTML, SCSS, JavaScript. Web application development using React.js. Development of web interface components. Redesign of all sections of the site, design and development of new functionality. Finding the causes of errors on the sites and fixing them'
  },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040] m-auto md:pl-20 pt-12 py-16'>
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



