// Contact component
import React from "react"

const Contact = () => {
  return (
    <div id='contact' className='max-w-[900px] m-auto md:pl-20 px-4 py-16'>
      <h2 className='h2'>
        Contact me
      </h2>
      {/* add the form from getform.io */}
      <form
        action='https://getform.io/f/da699e76-08d8-4b86-8287-fb489777d6b9'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          {/* name */}
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          {/* phone */}
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300 '
              type='text'
              name='phone'
            />
          </div>
        </div>
        {/* email */}
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='name'
          />
        </div>
        {/* subject */}
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300 '
            type='text'
            name='subject'
          />
        </div>
        {/* message */}
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='5'
            name='message'
          ></textarea>
        </div>
        {/* button */}
        <button className='bg-[#001b5e] mt-4 w-full p-4 rounded-lg shadow-lg shadow-[#4c85e6] group'>
          <p className='text-gray-100 text-xl group-hover:scale-110 ease-in duration-200'>
            Send Message
          </p>
        </button>
      </form>
    </div>
  )
}

export default Contact
