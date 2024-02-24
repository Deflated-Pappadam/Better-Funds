import React from 'react'

function NavBar() {
  return (
    <nav className='flex w-[95%] mx-auto text-[#2d2d2d] justify-between items-center my-5'>
      <a href="/" className='poppins-semibold min-w-[200px]  text-lg tracking-none leading-none'>
        <div>
Better
        </div>
        <div>
          Funds
          </div>
      </a>
      <div className='flex gap-6 text-xl'>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>About</div>
        <div className='cursor-pointer'>Smthn</div>
        <div className='cursor-pointer'>Contact</div>
      </div>
      <div className='min-w-[200px]'>
      <button className='bg-[#2d2d2d] text-white rounded-md px-4 py-2  ' >Download Abstract</button>
      </div>
      

    </nav>
  )
}

export default NavBar