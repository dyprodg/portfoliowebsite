import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2022,
        title: 'Freelancer',
        duration: 'still',
        details: 'Over the past year, I have embraced the world of freelance photography editing and shirt print designing as a passionate hobbyist. Without the constraints of client demands, I have enjoyed the freedom to explore and refine my skills in these creative pursuits. Through self-directed projects, I have had the opportunity to enhance and manipulate photos, bringing out their full potential. Additionally, I have immersed myself in the art of shirt print design, creating unique and eye-catching designs that reflect my personal style. This year of freelancing as a hobbyist has been an exhilarating journey, fueling my artistic growth and allowing me to express my creativity in new and exciting ways.'
    },
    {
        year: 2019,
        title: 'Audio Engineer',
        duration: 'still',
        details: 'Since 2019, I have been immersing myself in the world of audio engineering in my home studio. With a strong focus on producing music across various genres like rock, metal, punk, and hip-hop, I have enjoyed the freedom to explore and experiment with different soundscapes. This hobby has allowed me to refine my skills in recording, mixing, and mastering, and to bring out the unique characteristics of each genre. Through my home studio setup, I have been able to indulge in my passion for music production, creating immersive and captivating sound experiences in my spare time.'
    },
    {
        year: 2018,
        title: 'Salesman',
        duration: 'until 2022',
        details: 'As a retail salesman, I initially focused on back-office operations and leadership, including database work. However, my growing passion for the IT field led me to shift my focus and pursue a career aligned with my interests. With a strong background in back-office tasks and effective leadership skills, I now seek to contribute to the dynamic world of technology, leveraging my experience in data management to drive innovation and success in the IT sector.'
    },
    {
        year: 2014,
        title: 'Content Creator',
        duration: 'still',
        details: 'In my journey as a content creator, I have passionately combined my love for music, singing, and playing guitar with my skills in video production. Through creating videos with music, I have found an outlet to express my creativity and showcase my talent. Using tools like DaVinci Resolve and After Effects, I have honed my skills in filming and editing, bringing my musical performances to life with captivating visuals. This journey has ignited a deep passion within me, driving me to continue pushing the boundaries of my craft and creating engaging content that resonates with audiences.'
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