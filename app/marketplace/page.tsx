"use client";

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
import betterFunds from "@/abi/BetterFunds.json";
import { ethers } from "ethers";
import ConnectWallet from "../components/ConnectWallet";
import { toast, useToast } from "@/components/ui/use-toast";
import Image from "next/image";

function Page() {
  const [connected, setConnected] = useState(false);
  const [transacting, setIsTransacting] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contractAddress = "0x20C29A7883356eF364F57224C04C524ffA546525";
  async function connectWallet() {
    if (!connected && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
      const contract = new ethers.Contract(
        contractAddress,
        betterFunds.abi,
        signer
      );
      let tokens = await contract.balanceOf(_walletAddress);
      console.log(tokens);
      
      setTokens(Number(tokens / BigInt(10 ** 18)));
    } else {
      //   window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }

  async function buyProduct(cost: number) {
    if (!window.ethereum) return;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const _walletAddress = await signer.getAddress();
    setConnected(true);
    setWalletAddress(_walletAddress);
    const contract = new ethers.Contract(
      contractAddress,
      betterFunds.abi,
      signer
    );
    try {
      setIsTransacting(true);
      let response = await contract.buyProduct(BigInt(cost));
      await response.wait();
      console.log(response);
      let tokens = await contract.balanceOf(_walletAddress);
      setTokens(Number(tokens / BigInt(10 ** 18)));
      toast({
        title: "Your Order Has Been Placed",
      });
      setIsTransacting(false);
    } catch (error) {
      setIsTransacting(false);
    }
  }
  return (
    <div className="min-h-screen w-full h-full flex flex-col justify-between poppins-regular relative">
      {transacting && (
        <div className="absolute h-full overflow-hidden w-full backdrop-blur-md flex items-center justify-center">
          <h1 className="text-5xl text-black font-bold">
            Your Transaction is being processed!
          </h1>
        </div>
      )}
      {!connected ? (
        <ConnectWallet click={connectWallet} />
      ) : (
        <>
          <NavBar />
          <div className="flex w-full">
            <div className="flex flex-col  md:w-[45%] p-10 justify-start items-start h-full ">
              <div className="flex flex-col h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2 ">
                Your Wallet
                <div className="grid grid-cols-1 p-3">
                  <div className="p-4">
                    <h1 className="text-2xl">{tokens} pdm</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Total Credits</h2>
                  </div>

                  <div className="p-4">
                    <h1 className="text-sm">{walletAddress}</h1>
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

            <div className="flex flex-wrap w-full  h-fit">
              <MarketBox
              buy={buyProduct}
                ImageUrl="/item_plushie.png"
                cost="1"
                name="Mushrrom Plushie"
                desc="A cool looking plushie that is actually cool"
                id=""
              />
              <MarketBox

               buy={buyProduct}
                ImageUrl="/item_figure.png"
                cost="1"
                name="Anya Action Figure"
                desc="A cool action figure of Anya Forger from the forger family "
                id=""
              />
              <MarketBox
               buy={buyProduct}
                ImageUrl="/item_choco.png"
                cost="1"
                name="Rich Chocolate"
                desc=" Indulge in the rich and creamy delight of our artisanal chocolate bars"
                id=""
              />
              <MarketBox
               buy={buyProduct}
             
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit a fugiat "
                id=""
              />

              <MarketBox
                buy={buyProduct}
                ImageUrl="/carrot.png"
                cost="1"
                name="Carrot"
                desc="Some natural carrots fresh from rhon's farm , buy it and eat it"
                id=""
              />
              <MarketBox
               buy={buyProduct}
                ImageUrl="/item_ball.png"
                cost="1"
                name="Football"
                desc="
                Experience the thrill of the game with our premium-quality football. "
                id=""
              />
              <MarketBox
               buy={buyProduct}
                ImageUrl="/item_hoodie.png"
                cost="1"
                name="Hoodie"
                desc="L
                Wrap yourself in comfort and style with our cozy hoodie, designed to keep you warm and fashionable "
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
