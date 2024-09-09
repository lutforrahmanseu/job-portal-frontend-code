import React from "react";
import { Badge } from "./ui/badge";

export default function LatestJobCards() {
  return (
    <div>
      <div className="w-full bg-white rounded-md p-5 border border-gray-100 shadow-xl cursor-pointer">
        <div>
          <h1 className="text-lg font-bold my-2">Company Name</h1>
          <p className="text-sm text-gray-500">Bangladesh</p>
        </div>

        <div>
          <p className="text-lg font-bold my-2">Job Title</p>
          <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta asperiores exercitationem officiis aliquid voluptatem tempora itaque earum, numquam debitis saepe.</p>
          
        </div>
        <div className="flex items-center gap-2 my-4">
            <Badge className={"bg-[#6A38C2] text-white font-bold"} variant="ghost">12 Positions</Badge>
            <Badge className={"bg-[#F83032] text-white font-bold"} variant="ghost">Part Time</Badge>
            <Badge className={"bg-[#5c3f8d] text-white font-bold"} variant="ghost">10k</Badge>
        </div>
      </div>
    </div>
  );
}
