import React from "react";
import Navbar from "../shared/Navbar";
import JobCard from "../JobCard";

export default function Browser() {
  const random =[1,2,3,4,5,6]
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl my-10">
      <h1 className="text-xl font-bold  my-10 text-[#6A38C2]">Search Result {random.length}</h1>
      <div className="grid grid-cols-3 gap-5">
      {
        random.map((item,index)=>(
          <div key={index}>
            <JobCard/>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  );
}
