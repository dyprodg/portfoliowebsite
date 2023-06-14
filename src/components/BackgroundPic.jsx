import React from 'react';
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion';
import picture from '../assets/dennis.jpeg';
import { FaTwitter , FaFacebookF , FaInstagram , FaLinkedinIn } from  'react-icons/fa'

const BackgroundPic = () => {
  return (
    <motion.div
      id='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}

    >
      <img className='w-full h-screen object-cover object-top' src={picture} alt='Dennis'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] md:max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi! My Name Is Dennis</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm
          <TypeAnimation
            sequence={[
            'a Musician',
            1000,
            'a Tech Enthusiast',
            1000,
            'a Audio Engineer',
            1000,
            'a Photographer',
            1000,
            'a Junior Web Developer',
            1000
            ]}
            wrapper="span"
            speed={60}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter
              onClick={() => window.open('https://twitter.com/dyprodg', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200'
              size={20}
            />
            <FaFacebookF
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100092567229614', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200'
              size={20}
            />
            <FaInstagram
              onClick={() => window.open('https://www.instagram.com/dyprod/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200'
              size={20}
            />
            <FaLinkedinIn
              onClick={() => window.open('https://www.linkedin.com/in/dennis-diepolder-2a5a98276/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200'
              size={20}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundPic;
