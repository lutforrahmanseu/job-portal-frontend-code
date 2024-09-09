import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col my-10 gap-5">
          <span className="text-lg font-bold rounded-2xl px-4 py-2 text-[#6A38C2] bg-orange-100 mx-auto ">
            No: 1 Job Portal
          </span>
          <h1 className="text-2xl font-bold ">
            Search, Apply & <br /> Get Your{" "}
            <span className="text-[#6A38C2]">Dream Job</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            aut.
          </p>
        </div>
        <div className="flex w-[40%] pl-3 border border-gray-300 gap-4 shadow-lg rounded-full mx-auto items-center ">
          <input
            placeholder="Find Your Dream Job"
            className="w-full border-none outline-none bg-transparent"
          />
          <Button className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 text-white rounded-r-full">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
