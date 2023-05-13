// Contact component
import React from "react"
import ContactForm from "./UI/ContactForm"

const Contact = () => {
  return (
    <div id='contact' className='max-w-[900px] m-auto md:pl-20 px-4 py-16'>
      <h2 className='h2'>Contact me</h2>
      {/* add form */}
      <ContactForm />
    </div>
  )
}

export default Contact
