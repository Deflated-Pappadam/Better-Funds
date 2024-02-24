import React from 'react'
import NavBar from '../components/NavBar'
import Explorecomp from '../components/Explorecomp'

function page() {
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <div className='px-[5%] pt-[3%] flex flex-col items-center'>
            <h1 className='font-bold text-4xl'>Explore projects</h1>
            <div className='flex justify-between flex-wrap gap-10 my-10'>
                <Explorecomp/>
                <Explorecomp/>
                <Explorecomp/>
                <Explorecomp/>
                <Explorecomp/>
                <Explorecomp/>
            </div>
        </div>
    </div>
  )
}

export default page