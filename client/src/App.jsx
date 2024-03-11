import React from 'react'
import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'

export default function App() {
  return (
    <div className='min-h-screen min-w-screen font-nunito relative'>
      <div className='h-12 w-full fixed z-[999]'>
        <Navbar />
      </div>
      <div className='w-full min-h-screen absolute top-0'>
        <SlideShow />
      </div>
    </div>
  )
}
