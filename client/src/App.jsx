import React from 'react'
import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'

export default function App() {
  return (
    <div className='min-h-screen min-w-screen font-nunito bg-[rgba(0,0,0,0.9)]'>
      <div className='h-12 w-full'>
        <Navbar />
      </div>
      <div className='w-full min-h-screen'>
        <SlideShow />
      </div>
    </div>
  )
}
