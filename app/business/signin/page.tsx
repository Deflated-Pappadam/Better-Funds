"use client"

import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

function Page() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    connectWallet()  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  async function connectWallet() {
    if (!connected && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
    //   window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }
  return (
    <div className="bg-black">
      <div className="main">
        <div className="content">
          <button className="border border-white text-white font-bold p-2 rounded-lg w-[200px] backdrop-blur-md bg-white/30" onClick={connectWallet}>
            <p className="text-ellipsis truncate">{connected ? `${walletAddress}` : "Connect Wallet"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
