import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export default function FilterCard() {
  const filterData = [
    {
      filterType: "Location",
      filterValue: [
        "Dhaka",
        "Chittagong",
        "Sylhet",
        "Khulna",
        "Rajshahi",
        "Barishal",
        "Rangpur",
        "Mymensingh",
      ],
    },
    {
      filterType: "Industry",
      filterValue: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "React js Developer",
        "Node js Developer",
        "Mobile App Developer",
      ],
    },
    {
      filterType: "Salary",
      filterValue: [
        "40k - 50k",
        "50k - 60k",
        "60k - 70k",
        "70k - 80k",
        "80k - 90k",
        "90k - 100k",
      ],
    },
  ];
  return (
    <div className="rounded-md border border-gray-200 p-3 w-full bg-white shadow-md">
      <h1 className="text-xl font-bold text-[#6A38C2]">Filter Jobs</h1>
      <hr className="my-3" />
      <div>
        <RadioGroup className="space-y-2">
          {filterData.map((data, index) => (
            <div key={index}>
              <h1 className="text-lg font-bold">{data.filterType}</h1>
              {data.filterValue.map((item, index) => {
                return (
                  <div key={index} className="flex items-center space-x-3 my-2">
                    <RadioGroupItem value={item} />
                    <Label>{item}</Label>
                  </div>
                );
              })}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
