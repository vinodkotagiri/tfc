import Navbar from './components/Navbar'
import SlideShow from './components/SlideShow'
import dummyImg from './assets/slide-1.jpg'

import CategoryItems from './components/CategoryItems'
import React from 'react'
export default function App() {
const [navBg,setNavBg]=React.useState('')

function handleScroll(e){
  if(e.target.scrollTop>400){
    setNavBg('rgba(0,0,0,0.95)')
  }else{
    setNavBg('transparent')
  }
}



  const items = [
    { id: 1, image: dummyImg, content: 'This is dummy content...' },
    { id: 2, image: dummyImg, content: 'This is dummy content...' },
    { id: 3, image: dummyImg, content: 'This is dummy content...' },
    { id: 4, image: dummyImg, content: 'This is dummy content...' }
  ]

  return (
    <div className='min-h-screen min-w-screen font-nunito relative overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-primaryOrange' onScroll={handleScroll}>
      <div className='h-12 w-full fixed z-[999]' style={{backgroundColor:navBg}}>
        <Navbar />
      </div>
      <div className='w-full min-h-screen absolute top-0  '>
        <SlideShow />
        <div className='w-full bg-black  h-content text-slate-200 absolute top-[58%] '>
          <div className='flex w-full flex-col gap-3 mt-3'>
            <CategoryItems category={'latest'} items={items} />
            <CategoryItems category={'top'} items={items} />
            <CategoryItems category={'domestic'} items={items} />
            <CategoryItems category={'international'} items={items} />
          </div>
        </div>
      </div>


    </div>
  )
}



