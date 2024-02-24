'use client'
import React, { useEffect,useState } from 'react'
import NavBar from '../components/NavBar'
import Explorecomp from '../components/Explorecomp'
import { DocumentData, collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'

type docData = {
  id: string
  value: DocumentData
}

function Page() {
  const [data, setdata] = useState<docData[]>()
  useEffect(() => {
    const unsubscribe = onSnapshot(collection( db, 'projects'),(snapshot) => {
      setdata( snapshot.docs.map((doc) => {
        return { id: doc.id, value: doc.data()}
      }))
    })
  })
  return (
    <div className='w-full h-full'>
        <NavBar/>
        <div className='flex flex-col items-center p-[2vw]'>
            <h1 className='font-bold text-4xl'>Explore projects</h1>
            <div className='flex justify-between flex-wrap gap-[2vw] my-10'>
              {data?.map((doc) => {
                return <Explorecomp key={doc.id} imgUrl={doc.value.coverImage} projectName={doc.value.name} desc={doc.value.desc} contributed={doc.value.contributed} raised={doc.value.totalInvestment} goal={doc.value['milestone 3 cost']} days={20}/>
              })}
                <Explorecomp imgUrl='' projectName='' desc='' contributed={0}  raised={0} goal={0} days={0}/> 
            </div>
        </div>
    </div>
  )
}

export default Page