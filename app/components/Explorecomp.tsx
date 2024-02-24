import React from 'react'
import Image from 'next/image'

type Exploreprops={
    imgUrl:string;
    projectName:string;
    desc:string;
    contributed:number;
    raised:number;
    goal:number;
    days:number


}

function Explorecomp(props:Exploreprops) {
  return (
    <div className='w-[500px] h-fit p-[2vw] border-2 shadow-md rounded-md'>
        <Image src={props.imgUrl} alt={''} width={1280} height={817} className='max-w-[500] max-h-[200px] object-cover rounded-t-sm'/>
        <div className='px-4 pt-5 flex flex-col gap-5'>
            <h1 className='font-bold text-2xl'>{props.projectName}</h1>
            <div>
            Raised<h1 className='font-semibold text-lg'> {props.raised} <span className='font-normal texl-md'>out of</span>{props.goal}</h1>
            </div>
            <p className='text-lg'>{props.desc}</p>
           <div className='flex w-full justify-between px-10'>
           <div>
                <h1 className='font-semibold text-lg'>{props.contributed}</h1>
                <p>contributed</p>
            </div>
            <div>
                <h1 className='font-semibold text-lg'>{props.days}</h1>
                <p>Days left to go</p>
            </div>
           </div>
           
        </div>
    </div>
  )
}

export default Explorecomp