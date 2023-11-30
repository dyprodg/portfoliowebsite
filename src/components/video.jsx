import React from 'react';

const VideoPlayer = () => {
  const videoUrl = 'https://dennis-video-portfolio.s3.eu-central-1.amazonaws.com/bewerbungsvideo-final.mp4';

  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-6'>
    <div className='flex w-full justify-center items-center'>
      <video className='m-4 max-h-[600]' controls width="640" height="360">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  );
};

export default VideoPlayer;