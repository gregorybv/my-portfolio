import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import img1 from "../assets/image/1.png"
import img2 from "../assets/image/2.png"
import img3 from "../assets/image/3.png"
import img4 from "../assets/image/4.png"
import { SmilingFace } from "fluent-emoji"

const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-[1240px] m-auto md:pl-20 pl-4 pr-4 py-16'
    >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='flex items-center justify-center gap-3 text-center py-8 text-2xl'>
        Examples of my recent projects implemented using various technologies 
        <SmilingFace className='w-[40px]' />
      </p>
      <div className='grid sm:grid-cols-3 gap-6'>
        <ProjectItem
          img={img1}
          title='Sports'
          href='https://gregorybv.github.io/gym-website-react/'
        />
        <ProjectItem
          img={img2}
          title='Kripto'
          href='https://gregorybv.github.io/kraftex-app/'
        />
        <ProjectItem
          img={img3}
          title='Awesome'
          href='https://gregorybv.github.io/antools-app-react/'
        />
        <ProjectItem
          img={img4}
          title='Music'
          href='https://gregorybv.github.io/music-app/'
        />
         <ProjectItem
          img={img4}
          title='Music'
          href='https://gregorybv.github.io/music-app/'
        />
         <ProjectItem
          img={img4}
          title='Music'
          href='https://gregorybv.github.io/music-app/'
        />
      </div>
    </div>
  )
}

export default Projects
