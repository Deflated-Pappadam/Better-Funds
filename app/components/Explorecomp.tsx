import React from 'react'
import Image from 'next/image'

function Explorecomp() {
  return (
    <div className='w-[500px] h-[550px] border-2 shadow-md rounded-md'>
        <Image src={'/field-8172968_1280.jpg'} alt={''} width={1280} height={817} className='max-w-[500] max-h-[150px] object-cover rounded-t-sm'/>
        <div className='px-4 pt-5 flex flex-col gap-5'>
            <h1 className='font-bold text-2xl'>Project Name</h1>
            <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima aspernatur distinctio repudiandae. Dicta magnam, tempore unde at repellat</p>
            <div>
                <h1 className='font-semibold text-lg'>100</h1>
                <p>contributed</p>
            </div>
            <div>
                <h1 className='font-semibold text-lg'>20</h1>
                <p>Days left to go</p>
            </div>
            <div>
                <h1 className='font-semibold text-lg'>10000 <span className='font-normal texl-md'>out of</span> 20000</h1>
            </div>
        </div>
    </div>
  )
}

export default Explorecomp