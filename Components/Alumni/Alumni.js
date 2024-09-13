"use client";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { useEffect, useState } from "react";

const Alumni = () => {
  const [membersData, setmembersData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "alumni"]').then((res) => {
      const data = res;
      data.sort((a, b) => a.id - b.id);
      // console.log("response ", data);
      setmembersData(data);
    });
  }, []);

  // console.log("sortedData ", membersData);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <div className="w-full h-full flex justify-center lg:justify-center md:justify-start items-center mt-8">
        <Carousel className="w-[70%] md:w-[70%] ">
          <CarouselContent className="w-full">
            {membersData &&
              membersData.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="md:basis-1/2 lg:basis-1/3 w-full h-full"
                >
                 
                  <div className="w-full scale-[0.95] md:scale-[0.85] lg:scale-100">
                    <Card className="w-full bg-[#000016] h-auto min-h-[57vh] md:min-h-[70vh] lg:h-[75vh] flex flex-col justify-between">
                      <CardContent className="flex flex-col md:gap-5 w-full items-center justify-start text-white ">
                        <div className="font-semibold text-lg md:text-xl text-center mt-6">
                          {data.name}
                        </div>
                        <div className="w-[50%] sm:w-[70%] md:w-[70%] aspect-square rounded-full overflow-hidden m-2 border">
                          {/* <img
                            src={urlFor(membersData[${data.id - 1}].image)
                              .width(400)
                              .url()}
                            alt=""
                            className="object-contain w-full"
                          /> */}
                          <img
                            src={urlFor(data.image).width(350).height(350).url()}
                            alt={data.name}
                            className="object-cover w-full h-full max-h-7vw md:max-h-10vw "
                          />
                        </div>
                        <div className="font-semibold text-center text-md md:text-xl text-slate-400">
                          {data.occupation}
                        </div>
                        <div className="w-full text-center text-sm md:text-lg px-2 md:px-4">
                          "{data.testimonial}"
                        </div>
                        <a
                          href={data.linkedin}
                          className="absolute bottom-6 border p-2 rounded-lg no-underline hover:bg-[#8080808d] ] transition-all text-sm md:text-md"
                        >
                          <div className="">Know More</div>
                        </a>
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
    </>
  );
};

export default Alumni;
