import React, { useState, useEffect, useContext } from "react";
import { client } from "@/Helper/context";

const Achievements = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    client.fetch('*[_type == "achievements"]').then((res) => {
      const achievements = res;
      achievements.sort((a, b) => a.id - b.id);
      // console.log(achievements);
      setData(achievements);
    });
  }, []);
  const handleLeft = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleRight = () => {
    const maxPage = Math.ceil(data.length / 6) - 1;
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="w-full  md:min-h-dvh flex flex-col px-6 text-white justify-start">
        {data &&
          data
            .slice(6 * page, Math.min(6 * page + 6, data.length))
            .map((ele, index) => {
              return (
                <React.Fragment key={ele.id}>
                  <div className="flex items-start justify-start gap-3">
                    <div className=" text-8xl ">{ele.id}</div>
                    <div className="pt-3">{ele.achievement}</div>
                  </div>
                  <div className="w-full border md:border-[0.2px] my-3 rounded-md"></div>
                </React.Fragment>
              );
            })}
        <div className="hidden md:flex w-full items-center justify-between mt-auto ">
          <div className="w-fit text-nowrap font-bold text-2xl text-white pl-2">
            We have some more
          </div>
          <div className="w-full border-2 rounded-md mx-4"></div>
          <button className="">
            <img src="/Left.svg" alt="" className="w-24" onClick={handleLeft} />
          </button>
          <button className="">
            <img
              src="/Right.svg"
              alt=""
              className="w-24"
              onClick={handleRight}
            />
          </button>
        </div>
      </div>
      <div className="md:hidden w-full flex items-center justify-between mt-auto mb-6 px-2">
        <div className="w-fit text-nowrap font-bold text-white pl-2">
          We have some more
        </div>
        <div className="w-full border rounded-md mx-4"></div>
        <button className="">
          <img src="/Left.svg" alt="" className="w-24" onClick={handleLeft} />
        </button>
        <button className="">
          <img src="/Right.svg" alt="" className="w-24" onClick={handleRight} />
        </button>
      </div>
    </>
  );
};

export default Achievements;

// {displayedSentences.map((sentence, index) => (
//   <div key={index} className="w-fit p-3">
//     <div className="mb-8 mt-6 flex items-start">
//       <div className="number font-bold text-white text-7xl mr-8">{`${String(
//         index + 1
//       ).padStart(2, "0")}`}</div>
//       <div className="w-full font-family-Archivo text-white text-lg md:text-xl lg:text-1xl leading-6 md:leading-5 lg:leading-7 text-justify relative">
//         {`${sentence.achievement}`}
//       </div>
//     </div>
//     <div className="w-full h-2px border-t border-b-0 border-x-0 border-white mt-2"></div>
//   </div>
// ))}
// {/* {achievedata.length > displayedSentences.length && ( */}
// <div className="mt-12 flex justify-start space-x-4">
//   <div className="font-family-Archivo ml-5 text-white">
//     <p>WE HAVE SOME MORE</p>
//   </div>
//   <div className="w-2/3 h-2px border-t border-b-0 border-x-0 border-white mt-2"></div>
//   <button onClick={handleLeftButtonClick} className="text-white">
//     <img className="w-[30px]" src="/left-arrow.svg" alt="" />
//   </button>
//   <button onClick={handleRightButtonClick} className="text-white">
//     <img className="w-[30px]" src="/right-arrow.svg" alt="" />
//   </button>
// </div>
