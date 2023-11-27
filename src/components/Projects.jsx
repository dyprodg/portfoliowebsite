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
         These projects highlight my versatility as a content creator and my ability to adapt to different styles and genres. I take pride in delivering high-quality work that not only meets my clients' objectives but also resonates with their target audience. 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={FOURTH} title='AIOrchard (AI Text/Code/Images)' link='https://genai-six.vercel.app/'/>
            <ProjectItem img={FIRST} title='Tattoo Landingpage' link='https://tattoolanding.vercel.app'/>
            
            <ProjectItem img={THIRD} title='Promptopia (Post Your Prompt Ideas)' link='https://promptopia-five-beta.vercel.app'/>
            
        </div>
    </div>
  );
};

export default Projects;