import React, { useRef, useEffect } from 'react';

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          videoRef.current.play();
        } else {

          videoRef.current.pause();
        }
      });
    }, options);

    observer.observe(videoRef.current);


    return () => observer.disconnect();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <video
        ref={videoRef}
        controls
        width="640"
        height="360"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
