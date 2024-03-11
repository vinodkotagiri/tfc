import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import slide3 from '../assets/slide-3.jpg'
import slide4 from '../assets/slide-4.jpg'
import slide5 from '../assets/slide-5.jpg'
export default function SlideShow() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
    const [slides,setSlides]=useState([slide1,slide2,slide3,slide4,slide5])
  return (
    <div className='w-full min-h-screen'>
        <Carousel className='w-full h-full'
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        >
            {slides.map(slide=>(<div key={slide} className='relative w-full h-[calc(100vh-48px)] flex items-center justify-center' >
                <img src={slide} alt={slide} className='w-auto h-auto'/>
                <div className='absolute w-full h-full bg-slate-900 opacity-75'/>
            </div>))}
            
        </Carousel>
    </div>
  )
}
