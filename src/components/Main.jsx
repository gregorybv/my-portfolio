import React from "react"
import TextSpan from "./TextSpan"
import photo from "../assets/image/photo.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/all"
import { WinkingFace } from "fluent-emoji"

const Main = () => {
  const one = "I'm".split("")
  const two = "Gregory".split("")
  const three = "web".split("")
  const four = "developer".split("")

  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={photo}
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <div
            className='sm:text-8xl text-5xl flex flex-col font-bold text-gray-800'
            data-aos='fade-down'
            data-aos-duration='1300'
          >
            <div className='flex'>
              {one.map((letter, index) => {
                return (
                  <TextSpan className='p-5' key={index}>
                    {letter}
                  </TextSpan>
                )
              })}
            </div>
            <div className='flex'>
              {two.map((letter, index) => {
                return (
                  <TextSpan className='flex' key={index}>
                    {letter}
                  </TextSpan>
                )
              })}
            </div>
            <div className='flex gap-5'>
              <div className='flex'>
                {three.map((letter, index) => {
                  return (
                    <TextSpan className='p-5' key={index}>
                      {letter}
                    </TextSpan>
                  )
                })}
              </div>
              <div className='flex'>
                {four.map((letter, index) => {
                  return (
                    <TextSpan className='p-5' key={index}>
                      {letter}
                    </TextSpan>
                  )
                })}
              </div>
            </div>
          </div>
          {/* <h1
            className='sm:text-8xl text-5xl font-bold text-gray-800'
            data-aos='fade-down'
            data-aos-duration='1300'
          >
            I am Grigory Berezin
          </h1> */}
          <h2
            className='flex items-center sm:text-4xl text-2xl pt-4 text-gray-800'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Technical enthusiast",
                2000,
                "And just a good man",
                2000,
              ]}
              wrapper='div'
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
            <WinkingFace className='w-[55px] pl-3' />
          </h2>
          <div
            className='flex justify-between pt-6 max-w-[200px] w-full'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <a href='https://t.me/MrGregoryv' target='_blank'>
              <FaTelegram className='cursor-pointer' size={30} />
            </a>
            <a href='https://github.com/gregorybv' target='_blank'>
              <FaGithub className='cursor-pointer' size={30} />
            </a>
            <a
              href='https://www.linkedin.com/in/gregory-berezin-58444a23a/'
              target='_blank'
            >
              <FaLinkedin className='cursor-pointer' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
