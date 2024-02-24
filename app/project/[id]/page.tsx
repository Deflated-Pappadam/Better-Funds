"use client";

import NavBar from "@/app/components/NavBar";
import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import betterFunds from "@/abi/BetterFunds.json";
import { UpdateIcon } from "@radix-ui/react-icons";

function Page({ params }: { params: { id: string } }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setAmount(value);
  };

  const contributeProject = async () => {
    const contractAddress = "0x20C29A7883356eF364F57224C04C524ffA546525";
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(
        contractAddress,
        betterFunds.abi,
        signer
      );
      try {
        let amt = 0;
        if (amount) amt = amount;
        let len = amt.toString().length;
        let cost = "0." + "0".repeat(10 - len!) + amt.toString();
        console.log(cost);
        setIsProcessing(true);
        const response = await contract.contribute(
          BigInt(`${params.id}`),
          {
            value: ethers.parseUnits("0.11","gwei")
          }
        );
        await response.wait();
        setIsProcessing(false);
        console.log("response:", response);
      } catch (err) {
        setIsProcessing(false);
        console.log("error:", err);
      }
    }
  };
  let progress = "60%";
  return (
    <div className=" h-screen bg-[#fcfcfc]">
      <NavBar />
      <div className="px-[5%] flex flex-col items-center text-black">
        <h1 className="mt-5 font-semibold text-[2.5em]">some font name</h1>
        <p className="text-[1.4rem] max-w-[900px] text-center">
          Some random description about the project Some random description
          about the project Some random description about the project.
        </p>
        <div className="mt-12 flex w-full justify-around h-[650px]">
          <div className="w-[70%]">
            <Image
              src={"/field-8172968_1280.jpg"}
              alt={""}
              width={1280}
              height={817}
              className="max-h-[650px] rounded-sm"
            />
          </div>
          <div className="w-[27%] flex flex-col gap-9 mt-6">
            {/* <div className={`w-full h-[20px] bg-gradient-to-r from-green-300 from-0 via-slate-200 via-50% to-slate-200 to-100% rounded-md relative my-[5px]`}/> */}
            <div
              className={`w-full h-[20px] bg-slate-200 rounded-md relative my-[5px]`}
            >
              <div
                className={`w-[${progress}] h-full bg-gradient-to-r from-green-400 to-green-300 rounded-md`}
              />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[5%]" />
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[15%]" />
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[23%]" />
            <div>
              <h1 className="font-semibold text-4xl">100</h1>
              <p className="text-lg">contributed</p>
            </div>
            <div>
              <h1 className="font-semibold text-4xl">50</h1>
              <p className="text-lg">days left to go</p>
            </div>
            <div className="text-black rounded-lg p-5">
              <h2 className="font-semibold">Currency</h2>
              <div className="flex gap-1 bg-slate-100 p-1 rounded-md">
                <Image alt="matic" src={"/matic.svg"} height={15} width={15} />
                <p>Matic &#40;MATIC&#41;</p>
              </div>
              <h2 className="font-semibold">Amount</h2>
              <div
                onClick={() => {
                  inputRef.current?.focus();
                }}
                className="flex text-md flex-col bg-slate-100 p-1 rounded-md"
              >
                <div className="flex justify-end bg-slate-100 p-1 rounded-md">
                  <input
                    ref={inputRef}
                    className="appearance-none w-full px-2 start-0 text-right text-sm font-semibold border-0 bg-transparent focus:outline-none"
                    type="number"
                    onChange={onAmountChange}
                    min={100}
                    value={amount ?? ""}
                    name=""
                    id=""
                  />
                  <p className="w-[50px] text-md font-semibold">INR</p>
                </div>
                <div className="flex text-right text-sm font-medium justify-end w-full bg-slate-100 p-1 rounded-md">
                  <p dir="rtl" className="w-full px-2 start-0">
                    {typeof amount == "number" ? amount * 0.012 : "0"}
                  </p>
                  <p className="w-[50px]">MATIC*</p>
                </div>
              </div>
              <Button disabled={isProcessing} onClick={contributeProject}>
                {isProcessing ? (
                  <div className="flex items-center space-x-3">
                    <p>Processing</p>
                    <UpdateIcon className="h-4 w-4 animate-spin" />
                  </div>
                ) : (
                  `Contribute`
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
