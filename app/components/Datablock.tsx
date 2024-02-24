import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types';
import React from 'react'

type Dataprops={
heading:string;
desc:string;
Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}


function Datablock(props:Dataprops) {
  return (
    <div className='flex flex-col w-[470px] h-[200px] bg-[#e8e8e8] p-[2vw] rounded-[1.5rem] justify-center '>
      <div className='flex text-[1.5vw] poppins-medium gap-2 items-center '>
        <props.Icon className='size-[30px]'/>
     
        {props.heading}
      </div>
      <h2 className='text-[#2d2d2dfd] text-[1.1vw] text-start'>
      {props.desc}
      </h2>
    
    </div>
    
  )
}

export default Datablock