"use client"

import React, { useEffect, useState } from "react";
import MarketBox from "../components/MarketBox";
import {
  BookIcon,
  CarFrontIcon,
  CarrotIcon,
  ComputerIcon,
  ShirtIcon,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { ethers } from "ethers";
import ConnectWallet from "../components/ConnectWallet";

function Page() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="min-h-screen w-full h-full flex flex-col justify-between poppins-regular">
      {!connected ? (
        <ConnectWallet click={connectWallet} />
      ) : (
        <>
          <NavBar />
          <div className="flex w-full">
            <div className="flex flex-col  md:w-[45%] p-10 justify-start items-start h-full ">
              <div className="flex flex-col h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2 ">
                Your Wallet
                <div className="grid grid-cols-2 p-3">
                  <div className="p-4">
                    <h1 className="text-2xl">0 pdm</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Total Credits</h2>
                  </div>
                  <div className="p-4">
                    <h1 className="text-2xl">0 $</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Value</h2>
                  </div>
                  <div className="p-4">
                    <h1 className="text-sm">
                      0x020E160544A4ef69b8A21704CC04D8042138cc47
                    </h1>
                    <h2 className="text-sm text-[#3d3d3dba]">wallet Address</h2>
                  </div>
                </div>
              </div>
              <div className="p-10 my-2">
                <h1 className="text-[2vw]">Categories</h1>
                <div className="text-[1.5vw] flex items-center gap-2 text-[#2d2d2dcd]  my-2">
                  <CarFrontIcon /> Vehicles
                </div>
                <div className="text-[1.5vw] flex items-center gap-2 text-[#2d2d2dcd] my-2">
                  <CarrotIcon /> Food
                </div>
                <div className="text-[1.5vw] flex items-center gap-2 text-[#2d2d2dcd] my-2">
                  <ComputerIcon /> Electronics
                </div>
                <div className="text-[1.5vw] flex items-center gap-2 text-[#2d2d2dcd] my-2">
                  <BookIcon /> Book
                </div>
                <div className="text-[1.5vw] flex items-center gap-2 text-[#2d2d2dcd] my-2">
                  <ShirtIcon /> Clothes
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-full gap-2 h-fit">
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
              <MarketBox
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
