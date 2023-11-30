import React from 'react'
import Workitem from './Workitem'


const data = [
    {
        year: 2023,
        title: 'Student',
        duration: 'voraussichtliches Ende im April 2024 oder früher',
        details: `Ich nehme an einer Weiterbildung zum DevOps- und Webentwickler teil, die Themen wie Cloud Computing, DevOps und Softwareentwicklung abdeckt. Gleichzeitig vertiefe ich meine Kenntnisse im selbstgesteuerten Programmieren.`
    },
    {
        year: 2022,
        title: 'Freelancer',
        duration: 'bis April 2023',
        details: `Im Laufe des letzten Jahres habe ich mich mit freiberuflicher Fotobearbeitung und T-Shirt-Design als Hobbys beschäftigt und meine Kreativität gefördert.`
    },
    {
        year: 2019,
        title: 'Audioingenieur',
        duration: 'bis 2023',
        details: `Seit 2019 vertiefe ich mich in die Audiotechnik und konzentriere mich auf verschiedene Musikgenres, um meine Fähigkeiten in meinem Heimstudio zu verfeinern.`
    },
    {
        year: 2018,
        title: 'Verkäufer',
        duration: 'bis 2022',
        details: `Vom Einzelhandel zur IT habe ich meine Karriere umgestellt und meine Erfahrung im Datenmanagement und in der Führung für meinen Erfolg genutzt.`
    },
    {
        year: 2014,
        title: 'Content Creator',
        duration: 'bis 2023',
        details: `Als Content Creator kombiniere ich Musik- und Videoproduktionsfähigkeiten unter Verwendung von Tools wie DaVinci Resolve und After Effects, um ansprechende Inhalte zu erstellen, die bei meinem Publikum Anklang finden.`
    },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center mb-4'>Work</h1>
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