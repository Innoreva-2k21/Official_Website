"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";

const Mainbar = () => {
  const [project, setProject] = useState([]);
  const [page, setPage] = useState(0);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    if (project.length !== 0) {
      const left = document.querySelector("#leftClick");

      const handleLeftClick = () => {
        if (page > 0) {
          setPage(page - 1);
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
        }
      };

      right.addEventListener("click", handleRightClick);

      return () => {
        right.removeEventListener("click", handleRightClick);
      };
    }
  }, [page, project]);

  return (
    <div className="md:min-h-dvh md:h-screen w-full flex flex-col items-center justify-start text-white gap-2">
      {project.length !== 0 && (
        <>
          <div className="w-full h-fit text-center uppercase font-[Archivo] font-bold text-2xl mt-4">
            {project[page].title}
          </div>
          <div className="w-3/5 h-4/5 relative overflow-hidden mt-3">
            <div
              className="relative top-0 w-full h-full flex border-[2px] border-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={urlFor(project[page].image).width(800).url()}
                alt={project[page].title}
                className="h-full w-full object-center object-cover"
              />
              <div className="h-full w-[20%] absolute right-0 bg-gradient-to-l from-black to-transparent"></div>
            </div>
            <div className="absolute top-[50%] right-[2%] animate-bounceLeftToRight">
              {/* Read More Button */}
              <a
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                href={`/ProjectPage?id=${project[page].id}`}
              >
                Read More
              </a>
            </div>
            {/* Optional: description div for hover effect */}
            {/* <div
              className={`absolute top-0 right-0 md:px-12 px-4 sm:py-4 md:flex md:items-center text-justify md:overflow-hidden overflow-scroll bg-[#000000d1] text-sm w-full h-full transition-transform duration-500 ease-in-out ${
                isHovered ? "transform translate-x-0" : "transform translate-x-full"
              }`}
            >
              {project[page].description}
            </div> */}
          </div>
          <div className="w-full flex items-center justify-between rounded-xl mt-auto mb-8">
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
