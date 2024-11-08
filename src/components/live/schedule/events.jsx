"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="absolute mx-auto -mt-[90px] ml-[100px] grid grid-cols-6 items-center justify-between rounded border-2 text-base">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`flex justify-center rounded p-2 text-white focus:outline-none ${
                selectedDay === day ? "bg-[#941173]" : "bg-transparent"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-full">
        <div className="grid grid-cols-4 content-center items-center px-4">
          <div className="col-span-2 md:col-span-1">Time</div>
          <div className="col-span-2 md:col-span-1">Activity</div>
          <div className="col-span-2 md:col-span-1">Channel</div>
          <div className="col-span-2 md:col-span-1">Location</div>
        </div>
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, location }, index) => (
            <div
              key={index}
              className="grid w-full grid-cols-4 items-center justify-center px-4 py-3 text-lg font-semibold"
            >
              <p>
                {new Date(start).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "America/Los_Angeles",
                })}
              </p>
              <p className="flex w-full justify-center">{summary}</p>
              <p className="flex justify-center">
                {description.split("\n")[0].substr(1)}
              </p>
              <p className="flex justify-center">{location}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
