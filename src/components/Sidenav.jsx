import React, { useState } from "react"
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  BsPerson,
  GrProjects,
  AiOutlineAppstore,
  AiOutlineArrowUp,
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
        className='fixed top-5 right-5 z-[99] md:hidden'
        size={30}
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-[#e3f6e0] flex flex-col justify-center items-center z-20'>
          <a
            onClick={handleNav}
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            onClick={handleNav}
            href='#work'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineAppstore size={20} />
            <span className='pl-4'>Work</span>
          </a>
          <a
            onClick={handleNav}
            href='#projects'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200'
          >
            <AiOutlineProject size={20} />
            <span className='pl-4'>Projects</span>
          </a>
          <a
            onClick={handleNav}
            href='#contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-2 cursor-pointer hover:scale-105 ease-in duration-200'
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
          <a
            href='#main'
            className='group rounded-full shadow-lg bg-gray-100 shadow-[#4c85e6] m-2 p-4 cursor-pointer'
            data-aos='flip-left'
            data-aos-duration='1300'
          >
            <AiOutlineArrowUp
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
