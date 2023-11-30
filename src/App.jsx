
import BackgroundPic from './components/BackgroundPic'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import Projects from './components/Projects'
import Impressum from './components/Impressum'
import PreLoader from './components/PreLoader'
import Contact from './components/Contact'
import VideoPlayer from './components/video'



function App() {
  return (
    
    <div className='bg-gradient-to-r from-neutral-700 via-neutral-700 to-neutral-900 text-white'>
      <PreLoader />
      <Sidenav />
      <BackgroundPic />
      <VideoPlayer />
      <Work />
      <Projects />
      <Contact />
      <Impressum />

    </div>
  )
}

export default App