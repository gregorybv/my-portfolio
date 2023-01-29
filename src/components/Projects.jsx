import React from 'react';
import ProjectItem from "./ProjectItem.jsx";
import img1 from "../assets/image/1.png"
import img2 from "../assets/image/2.png"
import img3 from "../assets/image/3.png"
import img4 from "../assets/image/4.png"

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 pl-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 text-2xl'>Examples of my recent pet projects implemented using various technologies
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={img1} title='Crypto App' href='https://gregorybv.github.io/gym-website-react/'/>
        <ProjectItem img={img2} title='Property App' href='https://gregorybv.github.io/kraftex-app/'/>
        <ProjectItem img={img3} title='Netflix App' href='https://gregorybv.github.io/antools-app-react/'/>
        <ProjectItem img={img4} title='Twitch App' href='https://gregorybv.github.io/music-app/'/>
      </div>
    </div>
  )
}

export default Projects



