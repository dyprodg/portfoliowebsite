import React from 'react';
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion';
import picture from '../assets/dennis.jpeg';
import { FaTwitter , FaFacebookF , FaGithub , FaLinkedinIn } from  'react-icons/fa'

const BackgroundPic = () => {
  return (
    <motion.div
      id='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}

    >
      <img className='w-full h-screen object-cover object-top' src={picture} alt='Dennis'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-black/70'>
        <div className='max-w-[700px] md:max-w-[800px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-white'>Hi! Mein Name ist Dennis</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>Ich bin
          <TypeAnimation
            sequence={[
            'ein Junior Software Engineer',
            1000,
            'ein Tech Enthusiast',
            1000,
            'ein DevOps',
            1000,
            'ein Junior Web Developer',
            1000
            ]}
            wrapper="span"
            speed={60}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
            repeat={Infinity}
            className=''
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter
              onClick={() => window.open('https://twitter.com/dyprodg', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 text-white'
              size={20}
            />
            <FaFacebookF
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100092567229614', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 text-white'
              size={20}
            />
            <FaGithub
              onClick={() => window.open('https://github.com/dyprodg', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 text-white'
              size={20}
            />
            <FaLinkedinIn
              onClick={() => window.open('https://www.linkedin.com/in/dennis-diepolder-2a5a98276/', '_blank')}
              className='cursor-pointer hover:scale-110 ease-in duration-200 text-white'
              size={20}
            />
          </div>
          <motion.div 
          initial={{ opacity: 0, x: 500}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.5, delay: 6 }}
          className='max-w-[700px] mt-20 text-xl py-5 text-gray-800'>
            <h1 className='font-bold text-2xl text-white'>Was sind meine Ziele?</h1>
            <p className='text-white'>Mein langfristiges Ziel ist es, eine Vielzahl von Fähigkeiten in der IT-Branche zu erwerben, um mich zu einem Full-Stack-Entwickler mit zunehmender Erfahrung zu entwickeln. Mein Hauptaugenmerk liegt etwas mehr auf dem Frontend, da ich schon eine Weile im Bereich Design und UI/UX tätig bin. Allerdings bin ich ebenso daran interessiert, meine Horizonte im Backend und bei Infrastructure as Code (IaC) zu erweitern.</p>

          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default BackgroundPic;
