import { useContext } from "react";
import Unsplash from "../assets/unsplash.jpg"
import Robot from "../assets/Robot.svg"

import { Events } from "../context/context";


const EventDetail = () => {
    const index=0;
    const occ = useContext(Events);
    console.log(occ[index].events)

   return (
    <div className="w-full h-fit">
        <div className="flex h-full ">
            <div className="w-[63%] h-fit flex flex-col m-24 mr-16 justify-center gap-4 text-left">
                <div className=" font-[Archivo] font-light text-[#9B9B9B]">{occ[index].events['0'].eventFrom}
                 {(occ[index].events['0'].eventTo)?`- ${occ[index].events['0'].eventTo}`:""}
                </div>
                <div className=" font-[Antonio] font-extrabold text-8xl leading-[7rem]">{occ[index].events['0'].eventTitle}</div>
                <div className=" font-[Anybody] text-2xl mb-6">{(occ[index].events['0'].collaborationWith)?`IN COLLABORATION WITH ${occ[index].events['0'].collaborationWith}`:"" }</div>
                <div className=" flex flex-col gap-4  items-stretch font-[Archivo] font-[600]">
                    <div className="w-full h-fit">Highlights of the sessions:</div>
                    <div className="w-full h-fit">Day 1 : Introduction to IoT, Introduction to Arduino/Sensors, Basic Arduino coding, Practical Projects, and Communication Protocols .</div>
                    <div className="w-full h-fit">Day 2 : Hands-On Experience with Arduino Uno (Hardware) and Arduino IDE(Coding); Live demonstration of ongoing/completed projects. </div>
                </div>
            </div>
            <div className=" my-2  border-2 h-auto "></div>
            <div className=" w-[33%] h-auto mr-24 my-auto ml-5 flex flex-col justify-center gap-4">
                <div className=" w-full h-[40%]   flex justify-center items-center">
                    <img src={Unsplash} alt="" className=" object-contain h-auto w-64 object-center  " />
                </div>
                <div className=" w-full h-fit text-center px-4">It was fun explaining Arduino . amazing experience and a great time .</div>
                <div className=" w-full h-[40%]   flex justify-center items-center">
                    <img src={Robot} alt="" className=" object-contain h-auto w-64 object-center  " />
                </div>
                <div className=" w-full h-fit text-center  px-4">It was fun explaining Arduino . amazing experience and a great time .</div>
            </div>
        </div>
        
    </div>

  );
};

export default EventDetail;
