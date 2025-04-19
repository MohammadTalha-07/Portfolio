import React from 'react'

function Contact() {
  return (
    <div className="contactContainer bg-gradient-to-r from-slate-900 to-gray-400 p-6 sm:p-12" id="contact">
      <form action="">
        <div className="formContainer flex flex-col justify-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2 m-auto rounded-2xl text-white gap-4 border-2 p-6 bg-gradient-to-r from-[#030712] to-gray-800">
          <h1 className='text-2xl sm:text-3xl text-center p-2 text-white font-bold'>Contact Me</h1>

          <label htmlFor="Name" className='text-left ml-2'>Name:</label>
          <input type="text" id="Name" className='bg-white text-black p-2 rounded w-full outline-teal-400' />

          <label htmlFor="Email" className='text-left ml-2'>Email:</label>
          <input type="email" id="Email" className='bg-white text-black p-2 rounded w-full outline-teal-400' />

          <label htmlFor="Message" className='text-left ml-2'>Message:</label>
          <textarea id="Message" placeholder='Enter your message' className='bg-white text-black p-2 rounded w-full min-h-[120px] outline-teal-400'></textarea>

          <button className="bg-teal-600 w-full sm:w-1/2 md:w-1/3 mx-auto text-white p-3 rounded-4xl hover:bg-teal-800 transition duration-200 ease-in-out mt-4 hover:cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
