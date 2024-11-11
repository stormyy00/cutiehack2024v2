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
    <div className="flex-column relative flex items-center justify-center">
      <div className="absolute -top-20 py-4 sm:w-[100px] sm:gap-0 sm:text-xs md:w-[600px] lg:w-[800px] lg:gap-2 lg:px-8">
        <div className="flex items-center justify-center rounded sm:gap-0 sm:text-xs lg:ml-3 lg:text-base">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`flex rounded px-[2px] text-white hover:border-2 focus:outline-none sm:text-xs md:text-base lg:justify-center lg:px-4 lg:text-lg ${
                selectedDay === day ? "border-2" : "bg-transparent"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex h-full flex-col items-center justify-center">
        <div className="lg:text-md grid grid-cols-4 items-center justify-center text-center font-semibold sm:w-[100px] sm:text-sm md:w-[600px] md:text-lg lg:w-11/12">
          <div className="w-full">Time</div>
          <div className="w-full">Activity</div>
          <div className="w-full">Channel</div>
          <div className="w-full">Location</div>
        </div>
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, location }, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center justify-center border-t px-4 py-3 text-center font-semibold sm:w-[100px] sm:text-sm md:w-[600px] lg:w-11/12 lg:text-lg"
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
