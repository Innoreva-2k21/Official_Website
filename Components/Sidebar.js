"use client";

import { set } from "date-fns";
import { LucideBarChartHorizontalBig } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar({ word }) {
  
  return (
    <>
      <div className="flex md:hidden font-[Archivo] text-[9vw] mt-5 [-webkit-text-stroke:2px_#ffffff80] text-transparent">
          <h1 className="tracking-[4px] uppercase whitespace-pre">
            {word}
          </h1>
        </div>
      <div
        className="hidden md:block side  uppercase font-[Archivo] text-3xl sm:text-[7vw] md:text-8xl font-extrabold [-webkit-text-stroke:2px_#ffffff80] text-transparent m-1 mt-10 md:mt-0 tracking-wide whitespace-pre"
        style={{ writingMode: "vertical-lr" }}
        >
        {word}
      </div>
    </>
  );
}


// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// const [windowHeight, setWindowHeight] = useState(window.innerHeight);
// useEffect(() => {
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//     setWindowHeight(window.innerHeight);
//     console.log(windowWidth, windowHeight);
//   };
//   window.addEventListener('resize', handleResize);
//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);
// useEffect(() => {
//   // console.log(windowWidth, windowHeight);
//   const sidebarDivs = document.querySelectorAll('.side');
//   // console.log(word, " ", sidebarDivs);
//   sidebarDivs.forEach(sidebarDiv => {
//     if (windowWidth < windowHeight && sidebarDiv) {
//       sidebarDiv.style.writingMode = "horizontal-tb";
//       // console.log("horizontal");
//     } else {
//       sidebarDiv.style.writingMode = "vertical-lr";
//       // console.log("vertical");
//     }
//   })
// }, []);
// useEffect(() => {
//   // console.log(windowWidth, windowHeight);

//   const sidebarDivs = document.querySelectorAll('.side');
//   // console.log(word, " ", sidebarDivs);
//   sidebarDivs.forEach(sidebarDiv => {
//     if (windowWidth < windowHeight && sidebarDiv) {
//       sidebarDiv.style.writingMode = "horizontal-tb";
//       // console.log("horizontal");
//     } else {
//       sidebarDiv.style.writingMode = "vertical-lr";
//       // console.log("vertical");
//     }
//   })
// }, [windowWidth, windowHeight]);
