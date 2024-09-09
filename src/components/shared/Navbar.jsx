import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = false;
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
          {!user ? (
            <div className="flex gap-4 items-center">
              <Link to="/login">
                <Button variant="outline" className="px-4 py-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="px-4 py-2 bg-[#6A38C2] hover:bg-[#6A38C2]/90">
                  Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-50 mt-2 ">
                <div>
                  <div className="flex space-y-2 gap-4">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <h1 className="text-lg font-medium">Lutfor Rahman</h1>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2  cursor-pointer">
                      <User2 />
                      <Button variant="link" className="">
                        View Profile
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link" className="">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}
