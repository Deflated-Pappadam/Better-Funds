"use client";
import React, { useEffect, useState } from "react";
import { CurvedlineChart } from "@/app/components/CurvedGraph";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NavBar from "@/app/components/NavBar";
import ConnectWallet from "@/app/components/ConnectWallet";
import { ethers } from "ethers";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";

type contributions = {
  project_id: string;
  value?: DocumentData;
  userContributed: DocumentData;
};

function Page() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [project, setProject] = useState<contributions[]>([]);
  const router = useRouter();

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!walletAddress) return;
    const contributorsRef = collection(
      db,
      "contributors",
      walletAddress,
      "contributions"
    );
    const projects: contributions[] = [];
    getDocs(contributorsRef).then((querySnap) => {
      querySnap.forEach((di) => {
        const docRef = doc(db, "projects", di.id);
        getDoc(doc(db, "projects", di.id)).then((d) => {
          projects.push({
            project_id: d.id,
            value: d.data(),
            userContributed: di.data(),
          });
          setProject(projects);
        });
      });
    });
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
    <div className="min-h-screen bg-[#fcfcfc]   px-[5%] poppins-regular text-[#2d2d2d]">
      {!connected ? (
        <ConnectWallet click={connectWallet} />
      ) : (
        <>
          <NavBar />
          <div className="w-full flex justify-between items-center mx-auto py-[1vw]">
            <div className="text-[1.5vw] poppins-semibold text-[#2d2d2d] ">
              Dashboard
            </div>
            <a
              href="/explore"
              className="text-[1vw] bg-[#2d2d2d]  text-white poppins-medium px-4 py-2 rounded-xl"
            >
              + Contribute
            </a>
          </div>
          <div className="flex flex-col w-full gap-10">
            <div className="flex md:flex-row flex-col w-full justify-between">
              <div className="md:w-[70%] h-[275px] border-[#38383848] border-2 rounded-xl p-5 m-2 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h1 className="text-lg m-2 text-[#2d2d2d] ">Contributions</h1>
                  <h1 className="text-md m-2 text-[#3b3b3b] ">Last 30 days</h1>
                </div>
                <CurvedlineChart
                  projectData={project}
                  className="w-full h-[200px]"
                />
              </div>
              <div className="flex flex-col md:w-[30%] h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2">
                Your Numbers
                <div className="grid grid-cols-2 p-3">
                  <div className="p-4">
                    <h1 className="text-2xl">
                      {Array.from(project.values()).reduce(
                        (acc, data) =>
                          acc + data.userContributed.totalContributed,
                        0
                      )}{" "}
                      $
                    </h1>
                    <h2 className="text-sm text-[#3d3d3dba]">
                      Total Contributed
                    </h2>
                  </div>
                  <div className="p-4">
                    <h2 className="text-sm text-[#3d3d3dba]">Wallet Address</h2>
                    <h1 className="text-sm text-ellipses truncate">
                      {walletAddress}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[70%] h-[400px] overflow-y-scroll border-[#38383848] border-2 rounded-xl p-5 m-2">
                <h1 className="text-[1.5vw]">Your Investments</h1>

                <Table className="my-2">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Business</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Contributed</TableHead>
                      <TableHead className="text-right">Goal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.map((p) => (
                      <TableRow
                        key={p.project_id}
                        onClick={() => router.push(`/project/${p.project_id}`)}
                      >
                        <TableCell className="font-medium">
                          {p.value?.name}
                        </TableCell>
                        <TableCell>{p.value?.desc}</TableCell>
                        <TableCell>
                          {p.userContributed.totalContributed}
                        </TableCell>
                        <TableCell className="text-right">
                          {p.value
                            ? `${p.value["milestone 3 cost"]}`
                            : `loading`}
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
