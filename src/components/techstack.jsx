import React from 'react';
import { IconContext } from 'react-icons';
import { SiNextdotjs, SiJavascript,SiPython, SiDocker, SiAwslambda, SiKubernetes,SiVite, SiMysql, SiHtml5, SiMongodb, SiAmazondynamodb, SiStripe, SiOpenai, SiTailwindcss, SiVercel, SiPrisma, SiCss3, SiGithub  } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";


const YourComponent = () => {
  const icons = [
    SiNextdotjs,
    FaReact,
    SiJavascript,
    SiPython,
    SiDocker,
    FaAws,
    SiAwslambda,
    SiKubernetes,
    SiVite,
    SiMysql,
    SiHtml5,
    SiMongodb,
    SiAmazondynamodb,
    SiStripe,
    SiOpenai,
    SiTailwindcss,
    SiVercel,
    SiPrisma,
    SiCss3,
    SiGithub,
    
  ];

  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
        <div className="w-full max-w-screen-xl mx-auto">
          <div className='flex w-full justify-center items-center'>
            <h1 className='text-4xl font-bold text-center mb-4'>Techstack</h1>
          </div>
          <div className="icon-grid text-5xl grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
            {icons.map((Icon, index) => (
              <div key={index} className="flex justify-center items-center py-2">
                <div className="rounded-full p-3 shadow-md shadow-black">
                  <Icon className="text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default YourComponent;