import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'

const App = () => {
  return (
    <div className='w-full overflow-auto min-h-screen'>
      <Navbar/>
      <Landing/>
      <Work/>
    </div>
  )
}

export default App