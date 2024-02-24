"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Explorecomp from "../components/Explorecomp";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

type docData = {
  id: string;
  value: DocumentData;
};

function Page() {
  const [data, setdata] = useState<docData[]>();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      setdata(
        snapshot.docs.map((doc) => {
          return { id: doc.id, value: doc.data() };
        })
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="flex flex-col items-center p-[2vw]">
        <h1 className="font-bold text-4xl">Explore projects</h1>
        <div className="flex justify-between flex-wrap gap-[2vw] my-10">
          {data?.map((doc) => {
            {
              console.log(doc.value.coverImage);
            }
            return (
              <Explorecomp
                key={doc.id}
                imgUrl={doc.value.coverImage}
                projectName={doc.value.name}
                desc={doc.value.desc}
                contributed={doc.value.contributors}
                raised={doc.value.totalContributed}
                goal={doc.value["milestone 3 cost"]}
                days={20}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
