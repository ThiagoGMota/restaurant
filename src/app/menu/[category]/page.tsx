import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex text-red-500 flex-wrap '>
      {pizzas.map(item => (
        <Link
          key={item.id} 
          href={`/product/${item.id}`}
          className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 p-4 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-fuchsia-50'
        >
          {/* img container */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt=''fill className='object-contain'/>
            </div>
          )}
          {/* text container */}
          <div className='flex items-center justify-between font-bold '>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white rounded-md p-2'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage