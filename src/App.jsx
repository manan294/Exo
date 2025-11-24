import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Images from './components/Images'
import Spread from './components/Spread'

const App = () => {
  return (
    <div className='w-full overflow-auto min-h-screen'>
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