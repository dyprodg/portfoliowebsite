import React from 'react';
import ProjectItem from './ProjectItem';
import FIRST from '../assets/FIRST.jpeg';
import THIRD from '../assets/THIRD.jpeg';
import FOURTH from '../assets/FOURTH.jpeg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center'>Projects</h1>
        <p className='text-center py-8'>
        Welcome to the showcase of my passion for crafting digital experiences. Here, you'll discover a curated selection of my web development projects, each meticulously designed and engineered to push the boundaries of what's possible with JavaScript. From interactive websites to sophisticated single-page applications, my portfolio is a testament to my commitment to innovation, usability, and clean code. Dive in to see how my blend of creativity and technical expertise brings ideas to life on the screen.        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={FOURTH} title='AIOrchard (AI Text/Code/Images)' link='https://genai-six.vercel.app/'/>
            <ProjectItem img={FIRST} title='Tattoo Landingpage' link='https://tattoolanding.vercel.app'/>
            
            <ProjectItem img={THIRD} title='Promptopia (Post Your Prompt Ideas)' link='https://promptopia-five-beta.vercel.app'/>
            
        </div>
    </div>
  );
};

export default Projects;