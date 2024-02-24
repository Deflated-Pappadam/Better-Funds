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
import { useRouter } from "next/navigation";

type docData = {
  id: string;
  value: DocumentData;
};

function Page() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [data, setdata] = useState<docData[]>();
  const router = useRouter()

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
                <h1 className="text-[4vw]">Shibu RP</h1>
                <h2 className="text-[2vw] my-5">Entrepreneur</h2>
                <a href="/project/create" className="my-10 bg-[#2d2d2d] text-white px-4 py-2 rounded-xl">Ideate</a>
              </div>
              <div className="flex flex-col md:w-[30%] h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2">
                My Numbers
                <div className="grid grid-cols-2 p-3">
                  <div className="p-4">
                    <h1 className="text-2xl">
                      {data
                        ? Array.from(data.values()).reduce(
                            (acc, data) => acc + data.value.totalContributed,
                            0
                          )
                        : "loading"}{" "}
                      $
                    </h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Total</h2>
                  </div>
                  <div className="p-4">
                    <h1 className="text-2xl">10%</h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Growth</h2>
                  </div>
                  <div className="p-4">
                    <h1
                      title={walletAddress ? walletAddress : "loading"}
                      className="text-2xl text-ellipsis truncate"
                    >
                      {walletAddress ? walletAddress : "loading"}
                    </h1>
                    <h2 className="text-sm text-[#3d3d3dba]">Wallet</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full h-[400px] overflow-y-scroll border-[#38383848] border-2 rounded-xl p-5 ">
                <h1 className="text-[1.5vw]">My Ventures</h1>
                <Table className="my-2">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Project</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Achieved</TableHead>
                      <TableHead className="text-right">Goal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((doc) => (
                    
                      <TableRow key={doc.id} onClick={() => router.push(`/project/${doc.id}`)}>
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
