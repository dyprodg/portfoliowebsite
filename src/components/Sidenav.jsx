import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (elementId) => {
    const sectionElement = document.getElementById(elementId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', duration: 1000 });
    }
  };


  return (
    <div className='relative text-black'>
      <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] text-white md:hidden' />
      <AnimatePresence> 
      {nav && (
      <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className='fixed md:hidden top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50'
            style={{ backdropFilter: 'blur(4px)', backgroundColor: 'transparent' }}
          
      >
        <div className='fixed w-full h-screen bg-transparent backdrop-blur flex flex-col justify-center items-center z-10'>
        <Link to="main" smooth={true} duration={1000} onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
  <AiOutlineHome size={20} />
  <span className='pl-4'>Home</span>
</Link>

<Link to="work" smooth={true} duration={1000} onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
  <AiOutlineUser size={20} />
  <span className='pl-4'>Work</span>
</Link>

<Link to="projects" smooth={true} duration={1000} onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
  <AiOutlineProject size={20} />
  <span className='pl-4'>Projects</span>
</Link>

<Link to="contact" smooth={true} duration={1000} onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
  <AiOutlineMail size={20} />
  <span className='pl-4'>Contact</span>
</Link>

        </div>
      </motion.div>
      )}
      </AnimatePresence>
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('main')}
      >
        <AiOutlineHome size={20} />
      </motion.a>

      <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('work')}
      >
        <AiOutlineUser size={20} />
      </motion.a>

      <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('projects')}
      >
        <AiOutlineProject size={20} />
      </motion.a>

      <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection('contact')}
      >
        <AiOutlineMail size={20} />
      </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
