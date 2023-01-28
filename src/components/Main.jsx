import React from 'react'
import photo from '../assets/image/photo.jpg'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]'
           src={photo} alt=""/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div>
          <h1>I'm Gregory Berezin</h1>
          <h2>I'm a

          </h2>
        </div>
      </div>
    </div>

  )
}

export default Main



