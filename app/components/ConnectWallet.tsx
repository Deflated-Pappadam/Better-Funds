import Image from 'next/image'
import React from 'react'

interface ConnectWalletProps {
  click: () => void;
}
function ConnectWallet({ click }: ConnectWalletProps) {
  return (
    <div className='min-h-screen flex flex-col w-full justify-center items-center text-[#2d2d2d] poppins-regular'>

        <h1 className='text-[3.5vw]'>Sign in with your wallet</h1>
        <h2 className='w-[30%] text-center text-[1.2vw] text-[#2d2d2ddf]'>Connect your metamask wallet for the smoothe something of the data</h2>
        <button onClick={click} className='flex bg-[#0066ff] text-white text-[1.5vw] px-4 py-2 rounded-xl gap-4 items-center justify-between m-4 hover:scale-[110%] transition-all duration-200'><Image src="/metamask.png" alt="" width={1080} height={1080} className='w-10 h-10'/> METAMASK </button>
    </div>
  )
}

export default ConnectWallet