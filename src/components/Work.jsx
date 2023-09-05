import React from 'react'
import Workitem from './Workitem'


const data = [
    {
        year: 2023,
        title: 'Student',
        duration: 'expected end on April 2024 or earlier',
        details: `I'm enrolled in a comprehensive bootcamp covering cloud computing, DevOps, and software engineering while also pursuing self-directed programming learning.`
    },
    {
        year: 2022,
        title: 'Freelancer',
        duration: 'until April 2023',
        details: `Over the past year, I've explored freelance photography editing and shirt design as hobbies, fostering my creativity.`
    },
    {
        year: 2019,
        title: 'Audio Engineer',
        duration: 'still',
        details: `Since 2019, I've immersed myself in audio engineering, focusing on various music genres, refining my skills in my home studio.`
    },
    {
        year: 2018,
        title: 'Salesman',
        duration: 'until 2022',
        details: `From retail to IT, I've shifted my career path, leveraging my background in data management and leadership for success.`
    },
    {
        year: 2014,
        title: 'Content Creator',
        duration: 'still',
        details: `As a content creator, I combine music and video production skills using tools like DaVinci Resolve and After Effects to create engaging content that resonates with audiences.`
    },


];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-black'>Work</h1>
            {data.map((item, idx) => (
                <Workitem 
                key ={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
                />
            ))}       
    </div>
  )
}

export default Work