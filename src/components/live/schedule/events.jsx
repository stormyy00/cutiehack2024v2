"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events.start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Tuesday",
  );

  return (
    <div className="flex-column relative flex items-center justify-center">
      <div className="absolute -top-20 py-4 sm:w-[100px] sm:gap-0 sm:text-xs md:w-[600px] lg:w-[800px] lg:gap-2 lg:px-8">
        <div className="flex items-center justify-center gap-1 rounded sm:text-xs md:gap-4 lg:ml-3 lg:text-base">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`flex rounded px-[2px] text-white focus:outline-none sm:text-xs md:text-base lg:justify-center lg:px-4 lg:text-lg ${
                selectedDay === day
                  ? "border-2"
                  : "sticky bg-transparent hover:border-2"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      {selectedDay != "Monday" ? (
        <div className="mt-6 flex h-full flex-col items-center justify-center">
          <div className="lg:text-md flex w-full justify-between text-center font-semibold sm:text-sm md:w-11/12 md:text-lg lg:w-11/12">
            <div className="w-full">Time</div>
            <div className="w-full">Event</div>
            <div className="w-full">Type</div>
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
                  {description.replace("#", "").split(" ")[0]}
                </p>
                <p className="flex justify-center">{location}</p>
              </div>
            ))}
        </div>
      ) : (
        <div className="w-full p-4 text-center text-xl font-semibold">
          No Events today
          <p className="text-cutie-gray/80">
            Please seleect another day to view an event
          </p>
        </div>
      )}
    </div>
  );
};

export default Events;
