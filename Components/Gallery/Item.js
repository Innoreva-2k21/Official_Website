"use client";
import "./gallery.css";
import GalleryCard from "./GalleryCard";
import { BsArrowLeft } from "react-icons/bs";
import CandidCard from "./CandidCard";

const Item = () => {
  return (
    <div className="dabba">
      <div
        className="md:flex hidden flex-col relative md:pb-0 pb-10 -mt-24 lg:-mt-0 "
        style={{ color: "white" }}
      >
        <div className="flex  w-0 font-[Archivo] sm:text-4xl text-lg font-extrabold [-webkit-text-stroke:2px_#ffffff80] text-transparent">
          <h1 className="rotate-90 absolute sm:top-[19vw] sm:-left-60 -left-32 top-[180px] tracking-[4px]">
            GALLERY
          </h1>
        </div>
        <div className="absolute top-[12vw] -left-8 lg:-left-0 flex rotate-90 justify-center ">
          <h5 className="font-[Archivo] font-medium sm:block hidden xl:tracking-[12px] lg:tracking-[10px] sm:tracking-[8px] tracking-[5px]">
            TEAM INNOREVA
          </h5>
        </div>
        {/* for large screen */}
        {/* <div className="absolute hidden md:block md:top-[8vw] lg:left-[15vw] left-16">
          <img src="/Innoreva Logo file.png" alt="innoreva logo" width="200px" height="200px" className=""></img>
        </div> */}
       
        <div className="absolute hidden md:block top-[28vw] lg:left-[10vw] left-12">
          <h5 className="xl:text-6xl sm:text-5xl text-4xl mb-1 cursive">Candids</h5>
          <div className="h-40 w-44">
            <CandidCard />
          </div>
          <div className="flex flex-col items-end -mt-16 ml-48">
            <h5 className="xl:text-6xl sm:text-5xl text-4xl cursive">Moments</h5>
            <h5 className="mr-4">TO BE RELIVED</h5>
          </div>
        </div>
        <p className="flex md:justify-evenly md:w-full w-40 md:pl-8 pt-6 md:ml-0  mt-5 mb-4 md:mt-0 md:mb-2 text-xs md:text-lg font-semibold">
          YOU CAN'T GO WITHOUT SEEING THESE !
        </p>
        <div className=" flex justify-end lg:mr-32 mr-24 ">
          <div className="w-[50vw] h-[40vw] ">
            <GalleryCard />
          </div>
        </div>
        <div className="drag absolute top-1/3 -right-2 text-sm  rotate-90">
            <p>DRAG FOR MORE</p>
            <div className=' absolute -rotate-90 right-8 top-6 text-sm '>
              <BsArrowLeft size={45} />
            </div>
          </div>
      </div>


      {/* mobile view */}
      <div
        className="flex  md:hidden flex-col relative md:pb-0 pb-10 -mt-24 lg:-mt-0 "
        style={{ color: "white" }}
      >
        {/* <div className="flex  w-0 font-[Archivo] sm:text-4xl text-lg font-extrabold [-webkit-text-stroke:2px_#ffffff80] text-transparent">
          <h1 className="rotate-90 absolute sm:top-[19vw] sm:-left-60 -left-32 top-[180px] tracking-[4px]">
            GALLERY
          </h1>
        </div> */}
        <div className=" flex items-center mt-28 justify-center pr-44">
        <div className=" flex -rotate-90 justify-center ">
          <h5 className="font-[Archivo] w-48 mt-44 mr-10 font-medium block  xl:tracking-[12px] lg:tracking-[10px] sm:tracking-[8px] tracking-[5px] text-sm md:text-base">
            TEAM INNOREVA
          </h5>
        </div>
        <div className="">
          <h5 className="xl:text-6xl sm:text-5xl text-4xl mb-1 cursive">Candids</h5>
          <div className="h-40 w-44">
            <CandidCard />
          </div>
          
       
          <div className="flex flex-col items-end -mt-16 ml-44 justify-center">
             {/* for small screen */}
          {/* <img className="absolute top-[vw] bottom-25 md:hidden" src="/Innoreva Logo file.png" alt="innoreva logo" width="130px" height="130px"></img> */}
            <h5 className="xl:text-6xl sm:text-5xl text-4xl cursive">Moments</h5>
            <h5 className="mr-4">TO BE RELIVED</h5>
          </div>
        </div>
        </div>
        <p className="flex justify-center items-center text-sm w-full mt-12 mb-3 font-semibold tracking-wider">
          YOU CAN'T GO WITHOUT SEEING THESE !
        </p>
        <div className=" flex justify-end  lg:mr-32  ">
          <div className="w-full md:h-[40vw] h-auto ">
            <GalleryCard />
          </div>
        </div>
        <div className="flex text-sm justify-center items-center">
            <p>DRAG FOR MORE</p>
            <div className=' text-sm ml-10'>
              <BsArrowLeft size={30} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Item;
