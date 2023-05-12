// Projects component
import React from "react"
import ProjectItem from "./ProjectItem"
import { project } from "../data"
import { SmilingFace } from "fluent-emoji"

const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-[1240px] m-auto md:pl-20 pl-4 pr-4 py-10'
    >
      <h2 className='text-5xl font-bold text-center text-[#001b5e]'>
        Projects
      </h2>
      <p className='flex items-center justify-center gap-3 text-center py-8 text-2xl'>
        Examples of my recent projects implemented using various technologies
        <SmilingFace className='w-[40px]' />
      </p>
      <div className='grid sm:grid-cols-3 gap-6 mt-5'>
        {project.map((item, id) => {
          const { img, title, stack, href } = item
          return (
            <ProjectItem key={id} img={img} title={title} stack={stack} href={href} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
