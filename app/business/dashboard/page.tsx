"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NavBar from "@/app/components/NavBar";

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


function page() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]  py-[1vw] px-[5%] poppins-regular text-[#2d2d2d]">
      <NavBar/>
      <div className="flex flex-col w-full gap-10 py-5">
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div>
            <h1 className="text-[4vw]">Rhon S George</h1>
            <h2 className="text-[2vw]">Entrepreneur</h2>
          </div>
          <div className="flex flex-col md:w-[30%] h-[275px]  justify-center border-[#38383848] border-2 rounded-xl  poppins-medium text-xl p-5 m-2">
            My Numbers
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
                {Businesses.map((Business) => (
                  <TableRow key={Business.name}>
                    <TableCell className="font-medium">
                      {Business.name}
                    </TableCell>
                    <TableCell>{Business.description}</TableCell>
                    <TableCell>{Business.investedAmount}</TableCell>
                    <TableCell className="text-right">
                      {Business.goalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
         
        </div>
      </div>
    </div>
  );
}



export default page;
