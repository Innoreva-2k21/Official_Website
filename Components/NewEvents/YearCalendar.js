"use client";
import { useEffect, useState } from "react";
import { client } from "@/Helper/context";
import Month from "./Month";

import "./Style.css";
import { set } from "date-fns";

const YearCalendar2 = () => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [curYear, setCurYear] = useState((new Date().getFullYear()-1));
  const months = [
    { name: "January", days: 31 },
    { name: "February", days: (curYear % 4 === 0)?29:28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];
  const [EventsContext, setEventsContext] = useState([]);
  useEffect(() => {
    client.fetch('*[_type == "newEvents"]').then((res) => {
      // console.log("array ",res);
      const events = res;
      setEventsContext(events);
    });
  }, [])

  const [markedDates, setMarkedDates] = useState([]);
  useEffect(() => {
    if (curYear % 4 === 0) {
      months[1].days = 29;
    }
  }, [curYear]);

  const getFirstDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  const handleLeft = () => {
    if (curYear > 2023) {
      setCurYear(curYear - 1);
    }
  };

  const handleRight = () => {
    const currentYear = new Date().getFullYear();
    if (curYear < currentYear) {
      setCurYear(curYear + 1);
    }
  };


  // useEffect(() => {
  //   const dummy=EventsContext.filter((event) => {
  //     return event.year === curYear})
  //   console.log(EventsContext,"dummy",EventsContext.filter((event) => {
  //     return event.year === curYear}));
  // }, [EventsContext])
  
  return (
    <div className="newdiv flex flex-col items-center justify-center  ">
      <div className="flex  mt-2 items-center justify-center  ">
        <button className="">
          <img src="/Left.svg" alt="" className="w-24" onClick={handleLeft} />
        </button>
        <div className="w-fit  h-12 text-white text-center text-3xl font-bold">
          {curYear}
        </div>
        <button className=" ">
          <img src="/Right.svg" alt="" className="w-24" onClick={handleRight} />
        </button>
      </div>
      <div className="calendar-grid ">
        {months.map((month, index) => {
          const firstDayOfWeek = getFirstDayOfWeek(Number(curYear), index); // Assuming the year is 2024
          const emptyPlaceholders = Array.from(
            { length: firstDayOfWeek },
            (_, i) => <div className="calendar-day empty" key={`empty-${i}`} />
          );

          return (
            <Month
              key={index}
              curYear={curYear}
              index={index}
              month={month}
              dayNames={dayNames}
              emptyPlaceholders={emptyPlaceholders}
              markedDates={markedDates}
              setMarkedDates={setMarkedDates}
              events={EventsContext.filter((event) => {
                // console.log(event," yearcal", curYear);
                return event.year === curYear})}
            />
            // <div className="parent-calendar-month" key={index}>
            //   <div className="calendar-month">
            //     <h2>{month.name}</h2>
            //     <div className="calendar-days">
            //       {dayNames.map((day, dayIndex) => (
            //         <div className="calendar-day" key={dayIndex}>
            //           {day}
            //         </div>
            //       ))}
            //       {emptyPlaceholders}
            //       {Array.from({ length: month.days }, (_, day) => (
            //         <div
            //           className={`calendar-day ${
            //             markedDates.includes(day + 1) ? "marked" : ""
            //           }`}
            //           key={day + 1}
            //         >
            //           {day + 1}
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearCalendar2;
