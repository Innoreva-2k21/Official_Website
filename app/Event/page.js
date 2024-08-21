// "use client";
// import { useEffect, useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import { builder, client } from "@/Helper/context";
// import { Suspense } from "react";

// const Event = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [curevent, setCurevent] = useState({});

//   function urlFor(source) {
//     return builder.image(source);
//   }

//   useEffect(() => {
//     const yearN = Number(searchParams.get("year"));
//     const monthN = searchParams.get("month");
//     const dateN = Number(searchParams.get("date"));
//     console.log(yearN, monthN, dateN);
//     client.fetch(`*[_type == "newEvents"][year == ${yearN}]`).then((res) => {
//       // [months.name == "January"]
//       const event = res[0].months
//         .filter((ele) => {
//           return ele.name == monthN;
//         })[0]
//         .events.filter((ele) => {
//           return ele.date == dateN;
//         });
//       // .filter((ele) => {return ele.events[0].date == 1});
//       console.log("event", event);
//       setCurevent(event[0]);
//       // setCurevent(res[0].filter((ele) => {ele.months.name == "January"}))
//       // console.log(res[0].months[0]);
//     });
//   }, [pathname, searchParams]);

//   useEffect(() => {
//     // console.log("curevent ", typeof curevent);
//     if (Object.keys(curevent).length) console.log("curevent ", curevent);
//     if (Object.keys(curevent).length) console.log("images ");
//   }, [curevent]);

//   return (
//     <>
//       {Object.keys(curevent).length && (
//         <div className="w-full md:h-screen bg-[#000016] text-white">
//           <div className="flex h-full w-full">
//             <div className="w-[63%] h-fit flex flex-col m-24 mr-16 justify-center gap-4 text-left">
//               <div className=" font-[Archivo] font-light text-[#9B9B9B]">
//                 {curevent.eventFrom}
//                 {curevent.eventTo ? `- ${curevent.eventTo}` : ""}
//               </div>
//               <div className=" font-[Antonio] font-extrabold text-8xl leading-[7rem] ">
//                 {curevent.eventName}
//               </div>
//               <div className=" font-[Anybody] text-2xl mb-6">
//                 {curevent.collaborationWith
//                   ? `IN COLLABORATION WITH ${curevent.collaborationWith}`
//                   : ""}
//               </div>
//               <div className=" flex flex-col gap-4  items-stretch font-[Archivo] font-[600]">
//                 <div className=" whitespace-pre-line">
//                   {curevent.highlights}
//                 </div>
//               </div>
//             </div>
//             <div className=" my-2  border-2 h-auto "></div>
//             <div className=" w-[33%] h-auto mr-24 my-auto ml-5 flex flex-col justify-center gap-4 ">
//               {curevent.images && (
//                 <>
//                   <div className=" w-full h-[40%] flex justify-center items-center">
//                     <img
//                       src={`${urlFor(curevent.images[0].image)
//                         .width(500)
//                         .url()}`}
//                       alt=""
//                       className=" object-contain h-auto w-64 object-center  "
//                     />
//                   </div>
//                   <div className=" w-full h-fit text-center px-auto">
//                     {curevent.images[0].imageCaption}
//                   </div>
//                   <div className=" w-full h-[40%]   flex justify-center items-center">
//                     <img
//                       src={`${urlFor(curevent.images[1].image)
//                         .width(500)
//                         .url()}`}
//                       alt=""
//                       className=" object-contain h-auto w-64 object-center  "
//                     />
//                   </div>
//                   <div className=" w-full h-fit text-center  px-4">
//                     {curevent.images[1].imageCaption}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // export default page;

// const EventPage = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Event />
//     </Suspense>
//   );
// };

// export default EventPage;


"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { builder, client } from "@/Helper/context";
import { Suspense } from "react";

const Event = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [curevent, setCurevent] = useState(null); // Use null to signify no data

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const yearN = Number(searchParams.get("year"));
    const monthN = searchParams.get("month");
    const dateN = Number(searchParams.get("date"));
    console.log(yearN, monthN, dateN);
    client.fetch(`*[_type == "newEvents"][year == ${yearN}]`).then((res) => {
      const event = res[0].months
        .filter((ele) => ele.name === monthN)[0]
        .events.filter((ele) => ele.date === dateN);
      console.log("event", event);
      setCurevent(event[0]);
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    if (curevent) {
      console.log("curevent ", curevent);
      console.log("images ");
    }
  }, [curevent]);

  if (!curevent) {
    return <div>Loading event data...</div>;
  }

  return (
    <div className="w-full md:h-screen bg-[#000016] text-white">
      <div className="flex h-full w-full">
        <div className="w-[63%] h-fit flex flex-col m-24 mr-16 justify-center gap-4 text-left">
          <div className="font-[Archivo] font-light text-[#9B9B9B]">
            {curevent.eventFrom}
            {curevent.eventTo ? `- ${curevent.eventTo}` : ""}
          </div>
          <div className="font-[Antonio] font-extrabold text-8xl leading-[7rem]">
            {curevent.eventName}
          </div>
          <div className="font-[Anybody] text-2xl mb-6">
            {curevent.collaborationWith
              ? `IN COLLABORATION WITH ${curevent.collaborationWith}`
              : ""}
          </div>
          <div className="flex flex-col gap-4 items-stretch font-[Archivo] font-[600]">
            <div className="whitespace-pre-line">{curevent.highlights}</div>
          </div>
        </div>
        <div className="my-2 border-2 h-auto"></div>
        <div className="w-[33%] h-auto mr-24 my-auto ml-5 flex flex-col justify-center gap-4">
          {curevent.images && (
            <>
              <div className="w-full h-[40%] flex justify-center items-center">
                <img
                  src={urlFor(curevent.images[0].image).width(500).url()}
                  alt=""
                  className="object-contain h-auto w-64 object-center"
                />
              </div>
              <div className="w-full h-fit text-center px-auto">
                {curevent.images[0].imageCaption}
              </div>
              <div className="w-full h-[40%] flex justify-center items-center">
                <img
                  src={urlFor(curevent.images[1].image).width(500).url()}
                  alt=""
                  className="object-contain h-auto w-64 object-center"
                />
              </div>
              <div className="w-full h-fit text-center px-4">
                {curevent.images[1].imageCaption}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  return (
    <Suspense fallback={<div>Loading event page...</div>}>
      <Event />
    </Suspense>
  );
};

export default EventPage;
