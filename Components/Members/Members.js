// "use client";

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

const Members = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "members"]').then((res) => {
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
      <div className="w-full h-full flex justify-center lg:justify-center md:justify-start items-center mt-8">
        <Carousel className="w-[90%] md:w-[70%] ">
          <CarouselContent className="w-full">
            {membersData &&
              membersData.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="md:basis-1/2 lg:basis-1/3 w-full h-full"
                >
                  <div className="w-full md:scale-[0.85] lg:scale-100">
                    <Card className="w-full bg-[#000016] h-[fit-content]">
                      <CardContent className="flex flex-col gap-2 md:4 aspect-[1/1.3] w-full items-center justify-start text-white">
                        <div className="w-full md:w-[80%] lg:w-[70%] aspect-square rounded-full overflow-hidden scale-100 mt-7 mb-5 border">
                          <img
                            src={urlFor(data.image).width(400).url()}
                            alt={data.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="font-semibold h-7 md:h-7 text-center  text-xl md:text-lg lg:text-xl text-slate-400 overflow-hidden">
                          {data.name}
                        </div>
                        <div className="w-full h-2 text-center text-md md:text-md lg:text-lg mb-4">
                          {data.por}
                        </div>
                        <a
                          href={data.linkedin}
                          className="border p-2 rounded-lg no-underline hover:bg-[#313030] mt-auto text-sm md:text-md lg:text-lg"
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

export default Members;

// import { client } from "@/Helper/context";
// import { builder } from "@/Helper/context";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/Components/ui/carousel";
// import { Card, CardContent } from "@/Components/ui/card";
// import { useEffect, useState } from "react";

// const Members = () => {
//   const [membersData, setmembersData] = useState([]);

//   useEffect(() => {
//     client.fetch('*[_type == "members"]').then((res) => {
//       const data = res;
//       data.sort((a, b) => a.id - b.id);
//       setmembersData(data);
//     });
//   }, []);

//   function urlFor(source) {
//     return builder.image(source);
//   }

//   return (
//     <>
//       <Carousel
//         className="self-center md:mt-auto md:mb-auto w-[85%] mt-8"
//         opts={{
//           align: "start",
//           duration: 25,
//         }}
//       >
//         <CarouselContent>
//           {membersData &&
//             membersData.map((data, idx) => (
//               <CarouselItem
//                 key={idx}
//                 className="md:basis-1/3 lg:basis-1/4 basis-1/2"
//               >
//                 <div className="p-1">
//                   <Card>
//                     <CardContent className="flex flex-col aspect-[1/1.7] items-center justify-start p-1">
//                       <div className="border w-full h-[70%] rounded-lg overflow-hidden">
//                         {membersData[`${data.id - 1}`].image && (
//                           <img
//                             src={urlFor(membersData[`${data.id - 1}`].image)
//                               .width(400)
//                               .url()}
//                             alt=""
//                             className="object-cover w-full h-full"
//                           />
//                         )}
//                       </div>
//                       <div className="font-bold text-[2.5vw] md:text-[1rem] text-nowrap overflow-hidden">
//                         {data.name}
//                       </div>
//                       <div className="font-bold text-[3vw] md:text-[1.3rem] text-slate-400 text-nowrap overflow-hidden">
//                         {data.por}
//                       </div>
//                       <a
//                         href={data.linkedin}
//                         className="text-[2vw] md:text-2xl border p-1 rounded-lg no-underline
//                         hover:scale-105 hover:bg-[#000016] hover:text-white text-nowrap overflow-hidden mt-auto mb-2 transition-transform duration-200 ease-in-out"
//                       >
//                         <div className="">Know More</div>
//                       </a>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </>
//   );
// };

// export default Members;

// // <div className="bg-white flex justify-center items-center rounded-t-xl">
// //   <img
// //     src={urlFor(membersData[`${data.id-1}`].image).width(400).url()}
// //     alt=""
// //     className="rounded-full object-cover flex items-center justify-center"
// //   />
// // </div>

// // <div className="flex flex-col items-center justify-center gap-[0.8vw]">
// //   <p className=" text-[1.25vw] [font-family:'Archivo-SemiBold',Helvetica]">
// //     {data.name}
// //   </p>
// //   <p className="text-center text-[1.08vw] [font-family:'Archivo-SemiBold',Helvetica] font-medium">
// //     {data.por}
// //   </p>
// //   <button className="bg-[#050816] text-[0.9vw] text-white px-[1.5vw] py-[0.5vw] rounded-xl">
// //     <a href={data.linkedin}>Know More</a>
// //   </button>
// // </div>
