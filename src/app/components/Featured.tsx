import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* wrapper */}
      <div className='w-max flex '>
        {/* single Item */}
        {featuredProducts.map((item) => (
          <div key={item.id} className='w-screen h-[60vh] flex  flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]'>
          {/* Img container */}
          {item.img && (
            <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
            <Image 
              src={item.img} 
              alt={item.title} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              fill 
              className='object-contain'
              priority
            />
          </div>
          )}
          {/* text container */}
          <div className='flex-1 flex flex-col items-center text-center gap-4 justify-center'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
            <p className='2xl:p-8 p-4'>{item.desc}</p>
            <span className='text-xl font-bold'>${item.price}</span>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Featured