import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Junior </span>
            <span>Fullstack-Developer </span>
            <span>DevOps</span>

        </div>
    </div>
  )
}

export default PreLoader