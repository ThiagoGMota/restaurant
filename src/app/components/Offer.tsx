'use client'

import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'


const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* Text container */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white font-bold text-5xl xl:text-6xl'>Delicious Burguer & French Fry</h1>
        <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers process-centric methods of empowerment. Quickly pontificate paralell.</p>
        <div>
          <CountDown />
        </div>
        
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>  
      {/* Img container */}
      <div className='relative w-full flex-1 md:h-full'>
        <Image 
          src={'/offerProduct.png'} 
          fill 
          alt='offer' 
          className='object-contain'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
      </div>  
    </div>
  )
}

export default Offer