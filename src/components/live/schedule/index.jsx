"use client";
import { api } from "@/utils/api";
import Events from "./events";
import Title from "../title";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { items } = await api({
        url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
        method: "GET",
      });

      items.forEach((event) => {
        event.start = new Date(event.start.dateTime);
        event.end = new Date(event.end.dateTime);
        event.day = event.start.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        });
      });

      setEvents(items);
    };

    getEvents();
  }, []);

  const totalDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 pb-24 text-sm text-white lg:text-base">
      <div className="mb-40 flex justify-center">
        <Title text={"Schedule"} />
      </div>
      <div className="text-md divide-y-2 rounded-3xl border-8 border-[#9E0C7A] bg-[#61114D] font-righteous text-white md:w-9/12">
        <Events events={events} totalDays={totalDays} />
      </div>
    </div>
  );
};
export default Schedule;
