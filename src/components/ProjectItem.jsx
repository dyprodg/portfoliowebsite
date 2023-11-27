const ProjectItem = ({ img, title , link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-white/60 hover:shadow-white  transition-shadow rounded-xl group hover:bg-gradient-to-r from-gray-200 to-black'>
     
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10 h-[300px] w-full object-cover'/>

      <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
  <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
    {title}
  </h3>
  <p className='pb-4 pt-2 text-white text-center'>Next.js 13</p>
  <a>
  <p onClick={() => window.open(link, '_blank')}
   className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg w-[150px] hover:scale-110 ease-in duration-150'>
  More Info
</p>
  </a>
</div>
    </div>
  );
};

export default ProjectItem;
