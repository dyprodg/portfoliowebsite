import React from 'react';
import ProjectItem from './ProjectItem';
import FIRST from '../assets/FIRST.jpeg';
import THIRD from '../assets/THIRD.jpeg';
import FOURTH from '../assets/FOURTH.jpeg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center'>Projekte</h1>
        <p className='text-center py-8'>
        Willkommen in der Präsentation meiner Leidenschaft für die Gestaltung digitaler Erlebnisse. Hier finden Sie eine sorgfältig ausgewählte Auswahl meiner Webentwicklungsprojekte, die alle akribisch gestaltet und entwickelt wurden, um die Grenzen dessen zu erweitern, was mit JavaScript möglich ist. Von interaktiven Websites bis hin zu anspruchsvollen Single-Page-Anwendungen ist mein Portfolio ein Zeugnis meiner Hingabe zu Innovation, Benutzerfreundlichkeit und sauberem Code. Tauchen Sie ein und sehen Sie, wie meine Mischung aus Kreativität und technischer Expertise Ideen auf dem Bildschirm zum Leben erweckt.
</p>        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={FOURTH} title='AIOrchard (AI Text/Code/Images)' link='https://genai-six.vercel.app/'/>
            <ProjectItem img={FIRST} title='Tattoo Landingpage' link='https://tattoolanding.vercel.app'/>
            
            <ProjectItem img={THIRD} title='Promptopia (Post Your Prompt Ideas)' link='https://promptopia-five-beta.vercel.app'/>
            
        </div>
    </div>
  );
};

export default Projects;