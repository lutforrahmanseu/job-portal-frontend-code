import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function Navbar() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16 p-4">
        <div>
          <h1 className="text-3xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div
          className="flex items-center
        gap-12"
        >
          <ul className=" hidden md:flex gap-4 items-center font-medium">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browser</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-50 mt-2 ">
              <div className="flex items-center gap-4">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <h1 className="text-lg font-medium">Lutfor Rahman</h1>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
