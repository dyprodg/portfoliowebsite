import React from 'react';

const VideoPlayer = () => {
  const videoUrl = 's3://dennis-video-portfolio/bewerbungsvideo-final.mp4';

  return (
    <div className='flex w-full justify-center items-center'>
      <video className='m-4 max-h-[600]' controls width="640" height="360">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
