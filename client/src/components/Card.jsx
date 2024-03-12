import React from 'react'

export default function Card({image,content}) {
    return (
        <div className='relative max-w-screen gap-1 w-[300px] h-[190px] rounded-md overflow-hidden shadow-sm shadow-primaryOrange flex flex-col hover:scale-105 duration-300 ease-in-out cursor-pointer'>
            <img src={image} alt='img' className='h-3/4' />
            <div className='px-3 h-1/4 text-justify text-xs font-semibold text-white'>{content}</div>
        </div>
    )
}
