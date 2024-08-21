"use client";
import { useEffect, useState } from "react";
import "./Style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Month({
  month,
  dayNames,
  emptyPlaceholders,
  index,
  events,
  curYear,
}) {
  const router = useRouter();
  // console.log("month ",month);
  // console.log(events);
  const [dateInMonth, setdateInMonth] = useState([]);

  useEffect(() => {
    // console.log("month",events);
    if (events.length > 0 && events[0].year === curYear) {
      const marked = events[0].months.filter((ele) => {
        return ele.name.trim() === month.name;
      });
      // console.log("marked",marked);
      if (marked.length > 0) {
        const dates = marked[0].events.map((event) => event.date);
        setdateInMonth(dates);
        // console.log("marked", dates);
      }
    } else {
      setdateInMonth([]);
    }
  }, [events]);
  const [address, setAddress] = useState("");

  const goToEvent = (e) => {
    router.push(
      `/Event?date=${
        e.target.innerText
      }&month=${e.target.parentNode.parentNode.parentNode.firstChild.innerText.trim()}&year=${curYear}`
    );
  };
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
                    // onClick={handleLinkClick}
                  >
                    <span
                      onClick={goToEvent}
                      // href={address}
                      // {`/Event?date=${e.target.innerText}&month=${e.target.parentNode.parentNode.firstChild.innerText.trim()}&year=${curYear}`}
                    >
                      {day + 1}
                    </span>
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
