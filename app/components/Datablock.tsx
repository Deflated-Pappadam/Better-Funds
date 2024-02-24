import { PaperPlaneIcon } from '@radix-ui/react-icons'
import React from 'react'

type Dataprops={
heading:string;
desc:string;
}


function Datablock(props:Dataprops) {
  return (
    <div className='flex flex-col w-[500px] h-[200px] bg-[#e8e8e8] p-[2vw] rounded-[1.5rem] justify-center '>
      <div className='flex text-[1.5vw] poppins-medium gap-2 items-center '>
        <PaperPlaneIcon className='size-[30px]'/>
     
        {props.heading}
      </div>
      <h2 className='text-[#2d2d2dfd] text-[1.1vw] text-start'>
      {props.desc}
      </h2>
    
    </div>
    
  )
}

export default Datablock