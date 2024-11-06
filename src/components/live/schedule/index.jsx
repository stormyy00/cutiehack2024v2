// import { api } from "@/utils/api";
// import Events from "./events";
import Title from "../title";
const Schedule = async () => {
  // const { items } = await api({
  //   url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
  //   method: "GET",
  // });

  // items.forEach((event) => {
  //   event.start = new Date(event.start.dateTime);
  //   event.end = new Date(event.end.dateTime);
  //   event.day = event.start.toLocaleString("en-US", {
  //     timeZone: "America/Los_Angeles",
  //     weekday: "long",
  //   });
  // });

  // const totalDays = items ? [...new Set(items.map(({ day }) => day))] : [];

  // return <Events events={items} totalDays={totalDays} />;
  return (
    <div
      id="schedule"
      className="-mt-1 flex h-screen flex-col items-center justify-center gap-10 bg-cutie-blue-300 py-10 font-righteous"
    >
      <Title text={"Schedule"} subtext={"Coming soon!"} />
    </div>
  );
};

export default Schedule;
