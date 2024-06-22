import React from 'react'

type marqueprop ={
               text:String[]
               dist:Number
}

const Marquee = ({text , dist}:marqueprop) => {
               // console.log(dist)
  return (
    <div className={`w-full flex gap-8 items-center f3 text-[65px] leading-none  -translate-x-[${dist}%]`}>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[0]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[1]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[2]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[3]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[0]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
               <div className='flex items-center gap-8  px-2'>
                              <h1>{text[1]}</h1>
                              <div className='w-12 h-12 bg-red-400 rounded-full'></div>
               </div>
              
    </div>
  )
}

export default Marquee