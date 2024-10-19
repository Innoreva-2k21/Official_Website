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
    <div className="w-full h-full flex flex-col items-center mt-8">
      <Carousel className="w-[70%] md:w-[70%]">
        <CarouselContent className="w-full">
          {membersData.map((data) => (
            <CarouselItem key={data.id} className="w-full h-full flex justify-center">
              <Card className="bg-[#000016] max-h-[75vh] w-80 flex flex-col justify-between mx-2">
                <CardContent className="flex flex-col w-full items-center justify-start text-white p-4">
                  <div className="font-semibold text-lg md:text-xl text-center mt-2">
                    {data.name}
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden m-2 border">
                    <img
                      src={urlFor(data.image).width(350).height(350).url()}
                      alt={data.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="font-semibold text-center text-md md:text-xl text-slate-400">
                    {data.occupation}
                  </div>
                  <div className="w-full text-center text-sm md:text-lg px-2 overflow-y-auto max-h-32">
                    "{data.testimonial}"
                  </div>
                  <a
                    href={data.linkedin}
                    className="mt-4 border p-2 rounded-lg no-underline hover:bg-[#8080808d] transition-all text-sm md:text-md"
                  >
                    Know More
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <button
        onClick={handleRoute}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore More
      </button>
    </div>
  );
};

export default Alumni;