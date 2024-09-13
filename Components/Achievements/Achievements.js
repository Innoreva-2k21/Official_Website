import React, { useState, useEffect } from "react";
import { client } from "@/Helper/context";

const Achievements = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default to large screen

  // Function to calculate items per page based on screen width
  const calculateItemsPerPage = () => (window.innerWidth < 768 ? 5 : 6);

  useEffect(() => {
    // Fetch achievements data
    client.fetch('*[_type == "achievements"]').then((res) => {
      const achievements = res.sort((a, b) => a.id - b.id);
      setData(achievements);
    });

    // Set initial items per page based on screen size
    setItemsPerPage(calculateItemsPerPage());

    // Handle window resizing
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
      setPage(0); // Reset to first page when screen size changes
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeft = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleRight = () => {
    const maxPage = Math.ceil(data.length / itemsPerPage) - 1;
    if (page < maxPage) setPage(page + 1);
  };

  const getSliceIndexes = () => {
    const startIndex = page * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    return [startIndex, endIndex];
  };

  const [startIndex, endIndex] = getSliceIndexes();

  return (
    <div className="w-full mt-8 md:mt-0 md:min-h-dvh flex flex-col px-6 text-white justify-start">
      {data.slice(startIndex, endIndex).map((ele) => (
        <React.Fragment key={ele.id}>
          <div className="flex items-start justify-start gap-3">
            <div className="text-6xl md:text-8xl">{ele.id}</div>
            <div className="pt-2 md:pt-4 text-md md:text-xl">{ele.achievement}</div>
          </div>
          <div className="w-[95%] border my-3 rounded-md"></div>
        </React.Fragment>
      ))}

      {/* Navigation */}
      <div className="flex w-[97%] items-center justify-between mt-8">
        <div className="md:w-fit font-bold text-md md:text-2xl text-white">We have some more</div>
        <div className="w-[60%] border-2 rounded-md mx-4"></div>
        <button onClick={handleLeft} disabled={page === 0}>
          <img src="/Left.svg" alt="Left" className="w-12 md:w-24" />
        </button>
        <button onClick={handleRight} disabled={page === Math.ceil(data.length / itemsPerPage) - 1}>
          <img src="/Right.svg" alt="Right" className="w-12 md:w-24" />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
