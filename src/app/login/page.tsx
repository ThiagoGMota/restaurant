import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* box */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full xl:w-[60%] 2xl:w-1/2'>
        {/* img container */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src={'/loginBg.png'} alt='' fill className='object-cover'/>
        </div>
        {/* form container */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src={'/google.png'} alt='google icon' width={20} height={20} className='object-contain'/>
            <p>Sign in with Google</p>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src={'/facebook.png'} alt='google icon' width={20} height={20} className='object-contain'/>
            <p>Sign in with Facebook</p>
          </button>
          <p className='text-sm'>Have a problem? <Link href={''} className='text-blue-600 underline'> Contact us</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage