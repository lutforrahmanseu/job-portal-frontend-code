import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function JobDescription() {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Frontend Developer</h1>
          <div className="flex items-center gap-2 my-4">
            <Badge
              className={"bg-[#6A38C2] text-white font-bold"}
              variant="ghost"
            >
              12 Positions
            </Badge>
            <Badge
              className={"bg-[#F83032] text-white font-bold"}
              variant="ghost"
            >
              Part Time
            </Badge>
            <Badge
              className={"bg-[#5c3f8d] text-white font-bold"}
              variant="ghost"
            >
              10k
            </Badge>
          </div>
        </div>
        <Button
        disabled={isApplied}
          variant="outline"
          className={`${isApplied ? "bg-[#6A38C2] hover:bg-[#8348eb] text-white hover:text-white cursor-not-allowed" : "bg-[#6A38C2] hover:bg-[#8348eb] text-white hover:text-white"} rounded-lg`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="text-xl font-bold border-b-2 border-gray-200">Job Description</h1>
      <div className="my-5">
        <h1 className="text-lg font-bold my-1">Role: <span className="pl-4 text-gray-600 font-normal"> Frontend Developer</span></h1>
        <h1 className="text-lg font-bold my-1">Location: <span className="pl-4 text-gray-600 font-normal"> Dhaka</span></h1>
        <h1 className="text-lg font-bold my-1">Description: <span className="pl-4 text-gray-600 font-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium possimus eaque porro architecto. </span></h1>
        <h1 className="text-lg font-bold my-1">Experience: <span className="pl-4 text-gray-600 font-normal"> 2 Year</span></h1>
        <h1 className="text-lg font-bold my-1">Salary: <span className="pl-4 text-gray-600 font-normal"> 20k - 30k</span></h1>
        <h1 className="text-lg font-bold my-1">Post Date: <span className="pl-4 text-gray-600 font-normal"> 2-03-2023</span></h1>
      </div>
    </div>
  );
}
