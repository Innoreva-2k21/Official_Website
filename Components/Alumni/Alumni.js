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
      <div className="w-full h-full flex justify-center lg:justify-center lg:pl-0 md:justify-start md:pl-24 items-center mt-6 md:mt-0 ">
        <Carousel className=" w-[70%]  ">
          <CarouselContent className="w-full ">
            {membersData &&
              membersData.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="md:basis-1/2 lg:basis-1/3 w-full"
                >
                  <div className="w-full md:scal e-[0.65] lg:scale-100">
                    <Card className="w-full bg-[#000016]">
                      <CardContent className="flex flex-col aspect-[1/1.3] w-full items-center justify-start text-white">
                        <div className="font-bold text-[3.1vw] md:text-[1rem] text-nowrap overflow-hidden mt-2 mb-1">
                          {data.name}
                        </div>
                        <div className=" w-[90%] aspect-square rounded-full overflow-hidden scale-100 ">
                          <img
                            src={urlFor(membersData[`${data.id - 1}`].image)
                              .width(400)
                              .url()}
                            alt=""
                            className="object-contain w-full"
                          />
                        </div>
                        <div className=" font-bold text-center h-[4vh] mt-1 text-[2.1vw] md:h-[9vh] lg:h-[11vh] lg:text-[1rem] text-slate-400 text-wrap overflow-hidden">
                          {data.occupation}
                        </div>
                        <div className="text-[1.8vw] md:text-[0.6rem] font-bold h-[10vh] md:h-[13vh] overflow-hidden w-full text-center mt-1">
                          "{data.testimonial}"
                        </div>
                        <a
                          href={data.linkedin}
                          className=" text-[1.6vw] md:text-[0.9rem] border p-1 rounded-lg no-underline
                      hover:scale-[1.2] text-nowrap overflow-hidden mt-auto "
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
