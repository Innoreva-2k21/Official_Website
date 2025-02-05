"use client";
import { client } from "@/Helper/context";
import { useRouter } from "next/navigation";
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
  const [membersData, setMembersData] = useState([]);
  const router = useRouter();

  const handleRoute = () => {
    router.push('AluminiPage');
  };

  useEffect(() => {
    client.fetch('*[_type == "alumni"]').then((res) => {
      const data = res;
      data.sort((a, b) => a.id - b.id);
      setMembersData(data);
    });
  }, []);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
   <> 
   <div className="w-full h-full flex flex-col items-center mt-8">
  <Carousel className="w-[70%] md:w-[70%]">
    <CarouselContent className="w-full">
      {membersData &&
        membersData.map((data) => (
          <CarouselItem
            key={data.id}
            className="md:basis-1/2 lg:basis-1/3 w-full h-full"
          >
            <div className="w-full scale-[0.95] md:scale-[0.85] lg:scale-100">
              <Card className="w-full bg-[#000016] h-auto min-h-[57vh] md:min-h-[70vh] lg:h-[75vh] flex flex-col justify-between overflow-hidden">
                <CardContent className="flex flex-col gap-2 md:gap-5 lg-gap-7 w-full items-center justify-start text-white">
                  <div className="font-semibold text-lg md:text-xl text-center mt-6">
                    {data.name}
                  </div>
                  <div className="w-[50%] sm:w-[70%] md:w-[70%] aspect-square rounded-full overflow-hidden m-2 border">
                    <img
                      src={urlFor(data.image).width(350).height(350).url()}
                      alt={data.name}
                      className="object-cover w-full h-full max-h-7vw md:max-h-10vw"
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
                    className="mt-2 border p-2 rounded-lg no-underline hover:bg-[#8080808d] transition-all text-sm md:text-md"
                  >
                    Know More
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

  {/* Explore More Button Centered Below */}
  <div className="w-full flex justify-center mt-6">
    <button
      onClick={handleRoute}
      className="border p-2 rounded-lg no-underline hover:bg-[#8080808d] transition-all text-sm md:text-md"
    >
      Explore More
    </button>
  </div>
</div>

    </>
  );
};

export default Alumni;
