import React from 'react'
import { FaTwitter , FaFacebookF , FaGithub , FaLinkedinIn } from  'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4'>
        <h1 className='py-4 text-4xl font-bold text-center text-black shadow-gray-500'>Contact</h1>
        <h1 className='py-10 text-2xl font-bold text-center text-black'>If you wish to get in touch with me, please feel free to reach out through the following social media platforms listed below.</h1>
     
        <div className='flex m-auto pl-10 md:pl-0 py-28 max-w-[1040px] justify-center w-full'>
            <FaTwitter
              onClick={() => window.open('https://twitter.com/dyprodg', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100}
            />
            <FaFacebookF
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100092567229614', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100}
            />
            <FaGithub
              onClick={() => window.open('https://github.com/dyprodg', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100}
            />
            <FaLinkedinIn
              onClick={() => window.open('https://www.linkedin.com/in/dennis-diepolder-2a5a98276/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100} />
        </div>
        <form className='pr-4' action="https://getform.io/f/73cdac2c-0a93-4079-9330-18a983ba2669" method='POST' encType='multipart/form-data'>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Name</label>
              <input className='border-2 rounded-lg p-3 flex border-gray-300 shadow-md hover:shadow-lg transition-shadow' type='text' name='name' placeholder='Name'required/>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Phone Number</label>
              <input className='border-2 rounded-lg p-3 flex border-gray-300 shadow-md hover:shadow-lg transition-shadow' type='text' name='phone' placeholder='optional'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' >Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 shadow-md hover:shadow-lg transition-shadow' type='email' name='email'placeholder='Email'required/>
          </div>
          <div className='flex flex-col'>
            <labe className='uppercase text-sm py-2'>Subject</labe>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 shadow-md hover:shadow-lg transition-shadow' type='text' name='subject' placeholder="Subject"/>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2' placeholder='Write me a message!'required>Message</label>
            <textarea className='border-2 rounded-lg p-3 flex border-gray-300 shadow-md hover:shadow-lg transition-shadow' rows='10' name='message'placeholder='Write me a message!'required/>
          </div>
          <button className='bg-black text-white mt-4 w-full p-4 rounded-lg shadow-lg hover:scale-105 ease-in duration-100'>
            Send Message
          </button>
        </form>

    </div>
  )
}

export default Contact