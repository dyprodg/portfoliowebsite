import React from 'react'
import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from  'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-black shadow-gray-500'>Contact</h1>
        <h1 className='py-10 text-5xl font-bold text-center text-black'>If you wish to get in touch with me, please feel free to reach out through the following social media platforms listed below.</h1>
        <div className='flex m-auto pl-10 md:pl-0 py-28 max-w-[1040px] justify-center w-full pb-96'>
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
            <FaInstagram
              onClick={() => window.open('https://www.instagram.com/dyprod/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100}
            />
            <FaLinkedinIn
              onClick={() => window.open('https://www.linkedin.com/in/dennis-diepolder-2a5a98276/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
              size={100} />
            </div>
    </div>
  )
}

export default Contact