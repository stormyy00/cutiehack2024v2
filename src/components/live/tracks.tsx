import Title from "./title";
import Image from "next/image";
import { TRACKS } from "@/data/live/tracks";

const Tracks = () => {
  return (
    <div
      id="tracks"
      className="mt-[12vh] flex flex-col items-center justify-center gap-0 overflow-hidden bg-cutie-blue-300 py-10 font-righteous md:overflow-visible"
    >
      <Title text="Tracks" subtext="" />
      <div className="ml-8 flex w-9/12 flex-wrap justify-center gap-y-10 md:ml-24">
        {TRACKS.map((track, index) => (
          <div
            key={index}
            className="relative z-20 flex w-1/2 animate-jiggle-12s flex-col items-center text-center text-white md:w-1/3"
          >
            <Image
              src={track.image}
              alt={track.title}
              className={`w-full scale-125 overflow-clip md:scale-100 md:overflow-visible ${track.className}`}
            />
            <div className={`absolute text-center ${track.text}`}>
              <h2 className="mt-4 w-full text-xs font-semibold md:w-3/5 md:text-xl lg:text-xl 2xl:text-2xl">
                {track.title}
              </h2>
              <p className="mt-2 w-full px-0 text-[7px] md:w-3/5 md:text-sm lg:text-sm 2xl:text-lg">
                {track.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
