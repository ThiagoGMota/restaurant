'use client'

import React, { useState } from 'react'
import { Menu as MenuIcon, X }  from 'lucide-react';
import Link from 'next/link';
import { CartIcon } from './CartIcon';

interface Links {
  id:     number
  url:    string
  title:  string
}
const links:Links[] = [
  { id: 1, title: "Homepage",       url: "/" },
  { id: 2, title: "Menu",           url: "/menu" },
  { id: 3, title: "Working Hours",  url: "/" },
  { id: 4, title: "Contact",        url: "/" },
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  const user = false

  return (
    <div className='cursor-pointer'>
        {!open ?(
          <MenuIcon height={20} width={20} onClick={() => setOpen(true)}/>
        ) : (
          <X height={20} width={20} onClick={() => setOpen(false)}/>
        )}
          {open && (
            <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center flex-col justify-center text-3xl gap-8 z-10'>
            {links.map(item => (
              <Link 
                key={item.id}
                href={item.url}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {!user ? (
              <Link href={"/login"} onClick={() => setOpen(false)}>Login</Link>
            ) : (
              <Link href={"/orders"} onClick={() => setOpen(false)}>Orders</Link>
            )}
            <CartIcon/>
          </div>
        )}
        
    </div>
  )
}

export default Menu