'use client'
import React, { ClassAttributes, HTMLAttributes } from 'react'
import { ResponsiveLine } from '@nivo/line'

function page() {
  return (
    <div className='max-w-screen bg-[#1c1c1c] min-h-screen pt-[5%] px-[5%]'>
      <h1 className='font-bold text-[2.5em] mb-4'>Dashboard</h1>
      <div className='flex flex-col w-full gap-10'>
        <div className='flex w-full justify-between'>
          <div className='w-[65%] h-[275px] border-slate-50/20 border-2 rounded-xl p-5 flex flex-col justify-between'>
            <h1 className='text-lg m-2 '>Audience</h1>
            <CurvedlineChart className='w-full h-[200px]'/>
          </div>
          <div className='w-[30%] h-[275px] border-slate-50/20 border-2 rounded-xl p-5'>

          </div>
        </div>
        <div className='flex justify-between'>
        <div className='w-[30%] h-[275px] border-slate-50/20 border-2 rounded-xl p-5'>
            cdrsgfgsjf
          </div>
          <div className='w-[30%] h-[275px] border-slate-50/20 border-2 rounded-xl p-5'>
          </div>
          <div className='w-[30%] h-[275px] border-slate-50/20 border-2 rounded-xl p-5'>
          </div>
        </div> 
      </div>
    </div>
  )
}

function CurvedlineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Contributions",
            // data: investments.map((d) => ({
            //   x: d.data.Name,
            //   y: d.data.totalInvested,
            // })),
            data:[
              {
                x:10,
                y:20
              },
              {
                x:20,
                y:40
              },
              {
                x:30,
                y:60
              }
            ]
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#ffffff", "#ffffff"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
      }

export default page