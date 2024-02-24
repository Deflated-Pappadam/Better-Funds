import React, { useState } from 'react'

function Page() {
    const [isConnected, setIsConnected] = useState(false);
    const [ethBalance, setEthBalance] = useState("");
    
    // const detectCurrentProvider = () => {
    //   let provider;
    //   if (window.ethereum) {
    //     provider = window.ethereum;
    //   } else if (window.web3) {
    //     provider = window.web3.currentProvider;
    //   } else {
    //     console.log("Non-ethereum browser detected. You should install Metamask");
    //   }
    //   return provider;
    // };
  
  return (
    <div>
        <button>CONNECT WALLET</button>
    </div>
  )
}

export default Page