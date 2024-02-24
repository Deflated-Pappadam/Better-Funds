"use client";

import NavBar from "@/app/components/NavBar";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ethers, id } from "ethers";
import betterFunds from "@/abi/BetterFunds.json";
import { UpdateIcon } from "@radix-ui/react-icons";
import RelativeTime from "@yaireo/relative-time";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  getDoc,
  increment,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
const relativeTime = new RelativeTime();
function Page({ params }: { params: { id: string } }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankyouMsg, setShowThankyouMsg] = useState(false);
  const [projectData, setProjectData] = useState<DocumentData>();
  const [progressPercent, setProgressPercent] = useState(0);
  const [date, setDate] = useState<Date>(new Date());
  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setAmount(value);
  };

  useEffect(() => {
    const docRef = doc(db, "projects", params.id);
    console.log(docRef);

    const unsub = onSnapshot(doc(db, "projects", params.id), (doc) => {
      console.log(doc.data());

      setProjectData(doc.data());
    });
    return () => unsub();
  }, [params.id]);

  const contributeProject = async () => {
    const contractAddress = "0x20C29A7883356eF364F57224C04C524ffA546525";
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setWalletAddress(_walletAddress);
      const contract = new ethers.Contract(
        contractAddress,
        betterFunds.abi,
        signer
      );
      console.log(contract);

      try {
        let amt = 0;
        if (amount) amt = amount;
        setIsProcessing(true);
        const idea = await contract.ideas(BigInt(`${params.id}`));

        console.log(idea);
        const response = await contract.contribute(BigInt(`${params.id}`), {
          value: ethers.parseUnits(amt.toString(), "gwei"),
        });
        console.log(response);

        await response.wait();
        console.log("response:", response);

        await updateDoc(doc(db, "projects", `${params.id}`), {
          contributors: increment(1),
          totalContributed: increment(amount ?? 0),
        });
        const contributorRef = doc(
          db,
          "contributors",
          `${_walletAddress}`,
          "contributions",
          params.id
        );
        const contributorDoc = await getDoc(contributorRef);
        if (!contributorDoc.exists()) {
          await setDoc(contributorRef, {
            totalContributed: amount,
          });
        } else {
          await updateDoc(contributorRef, {
            totalContributed: increment(amount ?? 0),
          });
        }
        setIsProcessing(false);
        setShowThankyouMsg(true);
      } catch (err) {
        setIsProcessing(false);
        console.log("error:", err);
      }
    }
  };
  useEffect(() => {
    if (!projectData) return;
    console.log(projectData);
    // var date = new Date(); // Now
    // date.setDate(date.getDate() + 30);
    if (!projectData.endTime) {
      projectData.endTime = date.getMilliseconds();
    }
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(projectData.endTime);
    setDate(d);

    setProgressPercent(
      (projectData?.totalContributed / projectData["milestone 3 cost"]) * 100
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectData]);

  return (
    <div className="relative h-screen bg-[#fcfcfc]">
      <NavBar />
      <div className="px-[5%] flex flex-col items-center text-black">
        {showThankyouMsg && (
          <div className="absolute h-full w-full flex items-center justify-center">
            <div className="bg-white drop-shadow-md w-4/12 mt-[10%] text-black rounded-lg p-5">
              <h2 className="font-bold text-5xl mb-4 text-[#2d2d2d]">
                Thank You! 🎉
              </h2>
              <p>Thank you for contributing to this cause.</p>
              <p>
                You will be awarded ${Math.floor(amount! / 100)} PDM tokens once the project concludes.{" "}
                Head over to <a className="text-[#2d2d2d] underline font-bold" href="/marketplace">our marketplace</a> to see what is in store.
              </p>
              <button
                onClick={() => setShowThankyouMsg(false)}
                className="p-1 px-4 mt-5 border-4 rounded-lg font-semibold text-[#2d2d2d] border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white"
              >
                Back
              </button>
            </div>
          </div>
        )}
        <h1 className="mt-5 font-semibold text-[2.5em]">
          {projectData ? projectData.name : "loading"}
        </h1>
        <p className="text-[1.4rem] max-w-[900px] text-center">
          {projectData ? projectData.desc : "loading"}
        </p>
        <div className="mt-12 flex w-full justify-around h-[650px]">
          <div className="w-[70%]">
            <Image
              src={projectData?.coverImage ?? ""}
              alt={""}
              width={1280}
              height={817}
              className="max-h-[650px] rounded-sm object-contain"
            />
          </div>
          <div className="w-[27%] flex flex-col gap-9 mt-6">
            {/* <div className={`w-full h-[20px] bg-gradient-to-r from-green-300 from-0 via-slate-200 via-50% to-slate-200 to-100% rounded-md relative my-[5px]`}/> */}
            <div
              className={`w-full h-[20px] bg-slate-200 rounded-md relative my-[5px]`}
            >
              <div style={{width: `${progressPercent}%`}}
                className={`h-full bg-gradient-to-r from-green-400 to-green-300 rounded-md max-w-[100%]`}
              />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[5%]" />
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[15%]" />
            <div className="w-[30px] h-[30px] rounded-full bg-green-400 absolute ml-[23%]" />
            <div>
              <h1 className="font-semibold text-4xl">{projectData?.totalContributed}$ / {projectData?.["milestone 3 cost"]}$</h1>
              {projectData?.totalContributed>projectData?.["milestone 3 cost"]? <p className="text-lg">Goal Reached</p>: <p className="text-lg">contributed.</p>}
             
            </div>
            <div>
              {projectData?.endTime && (
                <p className="font-semibold text-4xl">
                  {relativeTime.from(date, new Date())}
                </p>
              )}
              <p className="text-lg">ends</p>
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
                  <p className="w-[50px] text-md font-semibold">USD</p>
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
