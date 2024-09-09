import React from "react";
import LatestJobCards from "./LatestJobCards";

export default function LatestJobs() {
  const randoms = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full mx-auto max-w-7xl my-20">
      <h1 className="text-xl font-bold">
        <span className="text-[#6A38C2]">Latest Jobs & Top</span> Opening
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        {randoms.map((r) => (
          <LatestJobCards/>
        ))}
      </div>
    </div>
  );
}
