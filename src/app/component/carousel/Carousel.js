import * as React from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CarouselSpacing() {
  const Arr = [
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
    { im: "/images/Frame7.png" },
  ];
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent className="-ml-1">
        {Arr.map((v, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={v.im}
                alt="Description of the image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
            <div className="p-1">
              <Image
                src={v.im}
                alt="Description of the image"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselSpacing;
