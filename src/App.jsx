import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Images from './components/Images'
import Spread from './components/Spread'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {


const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full overflow-auto bg-black min-h-screen'>
      <Navbar/>
      <Landing/>
      <Work/>
      <Playreel/>
      <Images/>
      <Spread/>
    </div>
  )
}

export default App