import React, { useState } from "react"
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  BsPerson,
  GrProjects,
  AiOutlineAppstore,
} from "react-icons/all"

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#work'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineAppstore size={20} />
            <span className='pl-4'>Work</span>
          </a>
          <a
            onClick={handleNav}
            href='#projects'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <BsPerson size={20} />
            <span className='pl-4'>Resume</span>
          </a>
          <a
            onClick={handleNav}
            href='#contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className='md:block hidden fixed top-[25%] z-10 '>
        <div className='flex flex-col'>
          <a
            href='#main'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <AiOutlineHome
              size={20}
              className='group-hover:scale-150 ease-in duration-300'
            />
          </a>
          <a
            href='#work'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <AiOutlineAppstore
              size={20}
              className='group-hover:scale-150 ease-in duration-300'
            />
          </a>
          <a
            href='#projects'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <AiOutlineProject
              size={20}
              className='group-hover:scale-150 ease-in duration-300'
            />
          </a>
          <a
            href='#main'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <BsPerson
              size={20}
              className='group-hover:scale-150 ease-in duration-300'
            />
          </a>
          <a
            href='#contact'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <AiOutlineMail
              size={20}
              className='group-hover:scale-150 ease-in duration-300'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
