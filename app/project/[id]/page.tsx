import NavBar from '@/app/components/NavBar'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='w-screen h-screen bg-[#fcfcfc] '>
        <NavBar/>
        <div className='px-[5%] flex flex-col items-center text-black'>
        <h1 className='mt-10 font-semibold text-[2.5em]'>some font name</h1>
        <p className='text-[1.4rem] max-w-[900px] text-center'>
            Some random description about the project
            Some random description about the project
            Some random description about the project.
        </p>
        <div className='mt-12 flex w-full justify-around h-[650px]'>
            <div className='w-[70%]'>
                <Image src={'/field-8172968_1280.jpg'} alt={''} width={1280} height={817} className='max-h-[650px]'/>
            </div>
            <div className='w-[27%] flex flex-col gap-9 mt-6'>
                <div className='w-full h-[20px] bg-gradient-to-r from-green-500 from-0 via-slate-200 via-50% to-slate-200 to-100% rounded-md relative my-[5px]'/>
                <div className='w-[30px] h-[30px] rounded-full bg-black absolute ml-[0%]'/>
                <div>
                    <h1 className='font-semibold text-4xl'>100</h1>
                    <p className='text-lg'>contributed</p>
                </div>
                <div>
                    <h1 className='font-semibold text-4xl'>50</h1>
                    <p className='text-lg'>days left to go</p>
                </div>
                <button className='bg-black rounded-md  m-2 p-4 text-white '>Contribute</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default page