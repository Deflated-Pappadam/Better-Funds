import Image from 'next/image'
import React from 'react'

function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image src="/404.png" width={1080} height={1080} alt="" className='w-[180px]'/>
        <h1 className='text-[#2d2d2d] text-4xl poppins-regular p-2'>Page Not Found</h1>
        <h2 className='text-[#2d2d2d] text-2xl poppins-regular p-2'>The page you are looking for doesn&apos;t exist or has been moved</h2>
        <a href="/"className='text-[#2d2d2d] text-lg poppins-regular underline hover:text-blue-600 transition-all'> Head Home</a>
    </div>
  )
}

export default NotFound