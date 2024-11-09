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
      <div className="absolute -top-20 h-full py-4 sm:w-[450px] sm:text-xs md:w-[600px] lg:w-[800px] lg:px-8 lg:text-lg">
        <div className="mx-auto grid grid-cols-6 items-center justify-between overflow-hidden rounded sm:text-xs lg:ml-3 lg:text-base">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`flex rounded p-2 text-white focus:outline-none sm:justify-between sm:text-xs md:text-base lg:justify-center lg:text-lg ${
                selectedDay === day ? "border-2" : "bg-transparent"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 h-full">
        <div className="lg:text-md grid grid-cols-4 items-center justify-center text-center font-semibold sm:w-[100px] sm:text-sm md:w-[600px] md:text-lg lg:w-[1000px]">
          <div className="col-span-2 md:col-span-1">Time</div>
          <div className="col-span-2 md:col-span-1">Activity</div>
          <div className="hidden md:block">Channel</div>
          <div className="hidden md:block">Location</div>
        </div>
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, location }, index) => (
            <div
              key={index}
              className="md:text-md grid grid-cols-4 items-center justify-center px-4 py-3 text-center font-semibold sm:w-[100px] sm:text-sm md:w-[600px] lg:w-[1000px] lg:text-lg"
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
