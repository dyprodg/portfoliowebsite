import { useState } from 'react'
import BackgroundPic from './components/BackgroundPic'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Projects from './components/Projects'
import Impressum from './components/Impressum'
import { Link, animateScroll as scroll } from 'react-scroll'
import PreLoader from './components/PreLoader'
import Contact from './components/Contact'



function App() {
  return (
    
    <div className='bg-gradient-to-r from-neutral-700 via-neutral-700 to-neutral-900 text-white'>
      <PreLoader />
      <Sidenav />
      <BackgroundPic />
      <Work />
      <Projects />
      <Contact />
      <Impressum />
      
    </div>
  )
}

export default App