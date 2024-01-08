import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";

export function Testimonial() {
  return (
    <div className="flex  flex-col p-5">
      <h1 className="text-[#F9D46D] text-2xl font-bold tracking-wide">
        Testimonials
      </h1>
      <h1 className="text-gray-500 text-sm font-semibold  tracking-wide">
        Let's hear what clients have to say about my work 🧑‍💻
      </h1>
      <div className="flex items-center justify-center mt-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {testimonials.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="">
                    <CardHeader>
                      <CardTitle>{data.name}</CardTitle>
                      <CardDescription>{data.work}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{data.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
