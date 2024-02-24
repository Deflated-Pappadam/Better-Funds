import React from 'react'

function NavBar() {
  return (
    <nav className='flex w-[80%] mx-auto text-[#2d2d2d] justify-between items-center'>
      <div className='poppins-semibold min-w-[200px]'>projectNAME</div>
      <div className='flex gap-6'>
        <div className='cursor-pointer'>Smthn</div>
        <div className='cursor-pointer'>Smthn</div>
        <div className='cursor-pointer'>Smthn</div>
        <div className='cursor-pointer'>Smthn</div>
      </div>
      <div className='min-w-[200px]'>
      <button className='bg-[#2d2d2d] text-white rounded-md px-4 py-2  ' >SOme Function</button>
      </div>
      

    </nav>
  )
}

export default NavBar