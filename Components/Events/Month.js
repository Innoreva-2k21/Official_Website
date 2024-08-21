"use client";
import { useEffect, useState } from "react";
import "./Style.css";

export default function Month({
  month,
  dayNames,
  emptyPlaceholders,
  index,
  events,
  curYear,
}) {
  // console.log("month ",month);
  //   console.log(events);
  const [dateInMonth, setdateInMonth] = useState([]);

  useEffect(() => {
    if (events.length > 0 && events[0].year === curYear) {
      const marked = events[0].events.filter((ele) => {
        return ele.monthName.trim() === month.name;
      });
      if (marked.length > 0) {
        setdateInMonth(marked[0].eventPointers);
      }
    } else {
      setdateInMonth([]);
    }
  }, [events]);
  return (
    <>
      {dateInMonth.length > 0 ? (
        <>
          <div className="grid md:hidden place-content-center " key={index}>
            <div className="calendar-month">
              <h2>{month.name}</h2>
              <div className="calendar-days">
                {dayNames.map((day, dayIndex) => (
                  <div className="calendar-day" key={dayIndex}>
                    {day}
                  </div>
                ))}
                {emptyPlaceholders}
                {Array.from({ length: month.days }, (_, day) => (
                  <div
                    className={`calendar-day ${
                      dateInMonth.includes(day + 1) ? "markedDates" : ""
                    }`}
                    key={day + 1}
                  >
                    {day + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="md:grid place-content-center hidden" key={index}>
        <div className="calendar-month">
          {setdateInMonth.length > 0 ? (
            <>
              <h2>{month.name}</h2>
              <div className="calendar-days">
                {dayNames.map((day, dayIndex) => (
                  <div className="calendar-day" key={dayIndex}>
                    {day}
                  </div>
                ))}
                {emptyPlaceholders}
                {Array.from({ length: month.days }, (_, day) => (
                  <div
                    className={`calendar-day ${
                      dateInMonth.includes(day + 1) ? "markedDates" : ""
                    }`}
                    key={day + 1}
                  >
                    {day + 1}
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
