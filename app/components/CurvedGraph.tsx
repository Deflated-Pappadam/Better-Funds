"use client";
import React, { ClassAttributes, HTMLAttributes } from "react";
import { ResponsiveLine } from "@nivo/line";

export function CurvedlineChart(
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
              data: [
                {
                  x: 10,
                  y: 20,
                },
                {
                  x: 20,
                  y: 40,
                },
                {
                  x: 30,
                  y: 60,
                },
              ],
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
          colors={["#f147fb", "#e5ef55", "#f147fb"]}
          pointSize={6}
          useMesh={true}
          gridYValues={6}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "15px",
                textTransform: "capitalize",
                borderRadius: "6px",
                color: "#1d1d1d",
              },
            },
            grid: {
              line: {
                stroke: "#f3eeee",
              },
            },
          }}
          role="application"
        />
      </div>
    );
        }