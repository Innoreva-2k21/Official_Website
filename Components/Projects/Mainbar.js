"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import { useRouter } from "next/navigation";


const Mainbar = () => {
  const [project, setProject] = useState([]);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const [showFullDescription, setShowFullDescription] = useState(false); // New state to track description toggle

  function urlFor(source) {
    return builder.image(source);
  }
  const handleNav =()=>{
      router.push(`ProjectPage?id=${project[page].id}`);
  }
  useEffect(() => {
    if (project.length !== 0) {
      const left = document.querySelector("#leftClick");

      const handleLeftClick = () => {
        if (page > 0) {
          setPage(page - 1);
          setShowFullDescription(false); // Reset description toggle on page change
        }
      };

      left.addEventListener("click", handleLeftClick);

      return () => {
        left.removeEventListener("click", handleLeftClick);
      };
    }
  }, [page, project]);

  useEffect(() => {
    client.fetch('*[_type == "newProjects"]').then((data) => {
      const projects = data;
      projects.sort((a, b) => a.id - b.id);
      setProject(projects);
    });
  }, []);

  useEffect(() => {
    if (project.length !== 0) {
      const right = document.querySelector("#rightClick");
      const handleRightClick = () => {
        if (page < project.length - 1) {
          setPage(page + 1);
          setShowFullDescription(false); // Reset description toggle on page change
        }
      };

      right.addEventListener("click", handleRightClick);

      return () => {
        right.removeEventListener("click", handleRightClick);
      };
    }
  }, [page, project]);

  return (
    <div className="w-full flex flex-col items-center justify-start text-white gap-2">
      {project.length !== 0 && (
        <>
          <div className="w-[94%] text-center uppercase font-[Archivo] font-bold text-2xl mt-4">
            {project[page].title}
          </div>
          <div className="w-[90%] md:w-[43%] mt-3 border-[1px] border-gray-500 rounded-lg">
            <div className="w-full h-auto flex flex-col p-2">
              <div className="">
                <img
                  src={urlFor(project[page].image).width(800).url()}
                  alt={project[page].title}
                  className="h-full w-full object-center object-cover rounded-lg border-gray-400"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`${
                    showFullDescription ? "line-clamp-none" : "line-clamp-4"
                  } overflow-hidden mt-2 px-2`}
                >
                  {project[page].description}
                </div>
               
                <div onClick={handleNav}
                  className="w-[40%] md:w-[30%] text-white px-4 py-2 rounded-xl text-center border hover:bg-[#8080808d] mt-2 block"
                  
                >
                  Know More
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between rounded-xl mt-4">
            <div className="text-4xl font-bold justify-items-start ml-5">
              {page + 1}/{project.length}
            </div>
            <div className="w-[75%] border-2 rounded-md"></div>
            <div className="flex mr-5">
              <img src="/Left.svg" alt="" id="leftClick" className="w-20" />
              <img src="/Right.svg" alt="" id="rightClick" className="w-20" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mainbar;
