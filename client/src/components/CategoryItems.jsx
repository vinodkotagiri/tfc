import React from 'react'
import Card from './Card'

export default function CategoryItems({category, items}) {
  return (
    <div className='h-content '>
            <div className='flex w-full  justify-between  opacity-70 items-center px-4 '>
            <div className='text-xl text-white font-semibold capitalize'>{category}</div>
            <div className='text-sm italic text-slate-200 cursor-pointer'>More</div>
            </div>
            <div className='flex gap-3 mt-3 w-full items-center justify-between flex-wrap p-3'>
              {items.map(item=>(<Card key={item.id} image={item.image} content={item.content}/>))}
            </div>

          </div>
  )
}
