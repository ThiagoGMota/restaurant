import React from 'react'
import Menu from '@/app/components/Menu'
import Link from 'next/link'
import { CartIcon } from './CartIcon';
import { PhoneCall } from 'lucide-react';

const Navbar = () => {
  const user = false;
  return (
    <div className='flex h-12 text-red-500 p-4 justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>

      <div className='hidden md:flex gap-4 flex-1'>
        <Link href={'/'}>Homepage</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

        {/* Logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
          <Link href={'/'}>MASSIMO</Link>
      </div>
      {/* mobile menu*/}
      <div className='md:hidden'>
          <Menu />
      </div>
      
      <div className='hidden md:flex gap-4 items-center flex-1 md:absolute top-3 right-2 lg:static justify-end'>
        <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-lg'>
          <PhoneCall size={20}/>
          <p>123 456 78</p>
        </div>
        {!user ? (
          <Link href={'/login'}>Loginpage</Link>
        ) : (
          <Link href={'/orders'}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar