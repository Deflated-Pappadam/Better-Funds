"use client";
import React, { ClassAttributes, HTMLAttributes } from "react";
import { ResponsiveLine } from "@nivo/line";
import { CurvedlineChart } from "@/app/components/CurvedGraph";

function page() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]  pt-[5%] px-[5%] poppins-regular text-[#2d2d2d]">
      <div className="w-full flex justify-between items-center mx-auto py-[1vw]">
        <div className="text-[1.5vw] poppins-semibold text-[#2d2d2d] ">
          Dashboard
        </div>
        <button className="text-[1vw] bg-[#2d2d2d]  text-white poppins-medium px-4 py-2 rounded-xl">
          + something
        </button>
      </div>
      <div className="flex flex-col w-full gap-10">
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="md:w-[65%] h-[275px] border-[#38383848] border-2 rounded-xl p-5 m-2 flex flex-col justify-between">
            <div className="flex justify-between">
              <h1 className="text-lg m-2 text-[#2d2d2d] ">Investments</h1>
              <h1 className="text-md m-2 text-[#3b3b3b] ">Last 30 days</h1>
            </div>
            <CurvedlineChart className="w-full h-[200px]" />
          </div>
          <div className="flex flex-col md:w-[30%] h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2">
            Your Numbers
            <div className="grid grid-cols-2 p-3">
            <div className="p-4">
              <h1 className="text-2xl">0 $</h1>
              <h2 className="text-sm text-[#3d3d3dba]">Total</h2>
            </div>
            <div className="p-4">
              <h1 className="text-2xl">0%</h1>
              <h2 className="text-sm text-[#3d3d3dba]">Growth</h2>
            </div>
            <div className="p-4">
              <h1 className="text-2xl">0 $</h1>
              <h2 className="text-sm text-[#3d3d3dba]">Added today</h2>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[30%] h-[275px] border-[#38383848] border-2 rounded-xl p-5 ">
            cdrsgfgsjf
          </div>
          <div className="w-[30%] h-[275px] border-[#38383848] border-2 rounded-xl p-5">
            gjd
          </div>
          <div className="w-[30%] h-[275px] border-[#38383848] border-2 rounded-xl p-5"></div>
        </div>
      </div>
    </div>
  );
}



export default page;
