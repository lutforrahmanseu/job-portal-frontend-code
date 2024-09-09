import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

export default function CategoryCarousel() {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "React js Developer",
    "Node js Developer",
    "Mobile App Developer",
  ];
  return (
    <div >
      <Carousel className="w-full mx-auto max-w-xl my-20 ">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="w-full">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
      <CarouselNext/>
      </Carousel>
      
    </div>
  );
}
