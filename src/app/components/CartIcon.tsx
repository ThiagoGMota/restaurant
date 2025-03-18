import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CartIcon = () => {
  return (
    <Link href={"/cart"} className='flex items-center justify-center gap-1'>
        <div className='relative w-8 h-8 flex items-center justify-center md:w-5 md:h-5'>
            <ShoppingBag />
        </div>
        <span>Cart (3)</span>
        
    </Link>
  )
}
