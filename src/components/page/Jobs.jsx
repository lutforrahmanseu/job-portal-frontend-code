import React from "react";
import Navbar from "../shared/Navbar";
import FilterCard from "../FilterCard";
import JobCard from "../JobCard";

export default function Jobs() {
  const jobs = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl mt-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full px-4 md:w-[20%]">
            {/* filter card */}
            <FilterCard />
          </div>

          {/* job card */}
          {jobs.length <= 0 ? (
            <span className="text-xl font-bold text-center text-red-2000">
              Job Not Found
            </span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 px-4">
              <div className="grid grid-cols-3  gap-5">
                {jobs.map((job, index) => (
                  <JobCard key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
