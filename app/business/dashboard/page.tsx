"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NavBar from "@/app/components/NavBar";
import { ethers } from "ethers";
import ConnectWallet from "@/app/components/ConnectWallet";
import {
  DocumentData,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { Button } from "@/components/ui/button";

const Businesses = [
  {
    name: "Business 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor tellus. Donec vitae ultricies nibh. Duis fermentum orci lectus, ut fermentum libero malesuada non. Quisque accumsan blandit molestie. Cras faucibus, mi nec suscipit posuere, mi mi bibendum libero, ut pellentesque lacus tortor nec quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dapibus neque. Maecenas blandit hendrerit metus, a sollicitudin urna venenatis ut.",
    investedAmount: "$250.00",
    goalAmount: "$1000.00",
  },
  {
    name: "Business 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor tellus. Donec vitae ultricies nibh. Duis fermentum orci lectus, ut fermentum libero malesuada non. Quisque accumsan blandit molestie. Cras faucibus, mi nec suscipit posuere, mi mi bibendum libero, ut pellentesque lacus tortor nec quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dapibus neque. Maecenas blandit hendrerit metus, a sollicitudin urna venenatis ut.",
    investedAmount: "$250.00",
    goalAmount: "$1000.00",
  },
  {
    name: "Business 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor tellus. Donec vitae ultricies nibh. Duis fermentum orci lectus, ut fermentum libero malesuada non. Quisque accumsan blandit molestie. Cras faucibus, mi nec suscipit posuere, mi mi bibendum libero, ut pellentesque lacus tortor nec quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dapibus neque. Maecenas blandit hendrerit metus, a sollicitudin urna venenatis ut.",
    investedAmount: "$250.00",
    goalAmount: "$1000.00",
  },
];

type docData = {
  id: string;
  value: DocumentData;
};

function Page() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [data, setdata] = useState<docData[]>();

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!walletAddress) return;
    const q = query(
      collection(db, "projects"),
      where("owner", "==", walletAddress)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setdata(
        snapshot.docs.map((doc) => {
          console.log(doc);
          return { id: doc.id, value: doc.data() };
        })
      );
    });
    return unsubscribe;
  }, [walletAddress]);

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
    <div className="min-h-screen bg-[#fcfcfc]  py-[1vw] px-[5%] poppins-regular text-[#2d2d2d]">
      {!connected ? (
        <ConnectWallet click={connectWallet} />
      ) : (
        <>
          <NavBar />
          <div className="flex flex-col w-full gap-10 py-5">
            <div className="flex md:flex-row flex-col w-full justify-between">
              <div>
                <h1 className="text-[4vw]">Rhon S George</h1>
                <h2 className="text-[2vw]">Entrepreneur</h2>
                <Button className="mt-5" >Ideate</Button>
              </div>
              <div className="flex flex-col md:w-[30%] h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2">
                My Numbers
                <div className="grid grid-cols-2 p-3">
                  <div className="p-4">
                    <h1 className="text-2xl">{data ? Array.from(data.values()).reduce((acc, data) => acc + data.value.totalContributed, 0) : 'loading'} $</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Total</h2>
                  </div>
                  <div className="p-4">
                    <h1 className="text-2xl">10%</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Growth</h2>
                  </div>
                  <div className="p-4">
                    <h1 title={walletAddress ? walletAddress : 'loading'} className="text-2xl text-ellipsis truncate">{walletAddress ? walletAddress : 'loading'}</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Wallet</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full h-[400px] overflow-y-scroll border-[#38383848] border-2 rounded-xl p-5 ">
                <h1 className="text-[1.5vw]">My Products</h1>
                <Table className="my-2">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Business</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Invested</TableHead>
                      <TableHead className="text-right">Goal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">
                          {doc.value.name}
                        </TableCell>
                        <TableCell>{doc.value.desc}</TableCell>
                        <TableCell>{doc.value.totalContributed}</TableCell>
                        <TableCell className="text-right">
                          {doc.value["milestone 3 cost"]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
