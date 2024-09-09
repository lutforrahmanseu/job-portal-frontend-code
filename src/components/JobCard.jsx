import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export default function JobCard() {
  return (
    <div className="p-5  shadow-xl border border-gray-200 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-sm text-gray-600">2 days ago</h1>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center my-5 gap-2">
        <Button variant="outline" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9UCBtO1xeRnNJ6hhcIE0dXGEszNg_vDwQQ&s" />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Lutfor Rahman BD LTD. </h1>
          <p className="text-sm text-gray-500">Bangladesh</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          asperiores exercitationem officiis aliquid voluptatem tempora itaque
          earum, numquam debitis saepe.
        </p>
      </div>
      <div className="flex items-center gap-2 my-4">
            <Badge className={"bg-[#6A38C2] text-white font-bold"} variant="ghost">12 Positions</Badge>
            <Badge className={"bg-[#F83032] text-white font-bold"} variant="ghost">Part Time</Badge>
            <Badge className={"bg-[#5c3f8d] text-white font-bold"} variant="ghost">10k</Badge>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline">Details</Button>
          <Button variant="outline" className="bg-[#6A38C2] hover:bg-[#8348eb] text-white hover:text-white">Save for later</Button>
        </div>
    </div>
  );
}
