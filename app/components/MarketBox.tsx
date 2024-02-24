import Image from 'next/image'
import React, { MouseEventHandler } from 'react'


type MarketProps = {
    ImageUrl: string;
    cost: string;
    desc: string;
    id: string;
    name:string;
    buy: (cost: number) => Promise<void>;
  };
  

function MarketBox(props:MarketProps) {
  return (
    <div className='flex flex-col justify-between items-center w-[290px] h-[400px]  border-black border-[1px] p-2 py-[1vw]  m-5 rounded-2xl'>
        <div className='w-[280px] h-[150px] overflow-hidden'>
        <Image alt="" width={1080} height={1080} src={props.ImageUrl} className='object-fit rounded-xl'/>
        </div>
        <div className='w-full p-3'>
        <h2 className='text-[1.0vw] text-black flex'>{props.cost} pdm</h2>
        <h1 className='text-[1.2vw] '>{props.name}</h1>
        <h3 className='text-[#2d2d2d9d]'>  {props.desc}</h3>
        <button onClick={()=> props.buy(Number(props.cost))} className='bg-black text-white px-4 py-2 rounded-lg mt-4'>Buy</button>

        </div>
      
    </div>
  )
}

export default MarketBox