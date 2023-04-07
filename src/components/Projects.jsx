import React from "react"
import ProjectItem from "./ProjectItem.jsx"
import img1 from "../assets/image/1.png"
import img2 from "../assets/image/2.png"
import img3 from "../assets/image/3.png"
import img4 from "../assets/image/4.png"
import img5 from "../assets/image/5.png"
import img6 from "../assets/image/6.png"
import img7 from "../assets/image/7.png"
import img8 from "../assets/image/8.png"
import img9 from "../assets/image/9.png"
import { SmilingFace } from "fluent-emoji"

const Projects = () => {
  return (
    <div
      id='projects'
      className='max-w-[1240px] m-auto md:pl-20 pl-4 pr-4 py-10'
    >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='flex items-center justify-center gap-3 text-center py-8 text-2xl'>
        Examples of my recent projects implemented using various technologies
        <SmilingFace className='w-[40px]' />
      </p>
      <div className='grid sm:grid-cols-3 gap-6 mt-5'>
        <ProjectItem
          img={img1}
          title='Sports site'
          stack='react css'
          href='https://gregorybv.github.io/gym-website-react/'
        />
        <ProjectItem
          img={img2}
          title='Your tour'
          stack='react hooks css aos '
          href='https://gregorybv.github.io/tour-app-react/'
        />
        <ProjectItem
          img={img3}
          title='Weekaway site' 
          stack='react tailwindcss'
          href='https://gregorybv.github.io/weekaway-website/'
        />
        <ProjectItem
          img={img4}
          title='Music app'
          stack='react rrd tailwindcss'
          href='https://gregorybv.github.io/music-app/'
        />
        <ProjectItem
          img={img5}
          title='Grow with data'
          stack='react tailwindcss'
          href='https://gregorybv.github.io/grow-with-data/'
        />
        <ProjectItem
          img={img6}
          title='Drive site'
          stack='react css hooks'
          href='https://gregorybv.github.io/drive-website/'
        />
        <ProjectItem
          img={img7}
          title='Your travel'
          stack='react tailwind hooks'
          href='https://gregorybv.github.io/travel-app/'
        />
        <ProjectItem
          img={img8}
          title='Trading Protocol'
          stack='react tailwind hooks'
          href='https://gregorybv.github.io/trading-protocol/'
        />
        <ProjectItem
          img={img9}
          title='Kraftex site'
          stack='react css hooks'
          href='https://gregorybv.github.io/kraftex-app/'
        />
      </div>
    </div>
  )
}

export default Projects
