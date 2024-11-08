import Title from "./title";
import Image from "next/image";
import { TRACKS } from "@/data/live/tracks";

const Tracks = () => {
  return (
    <div className="mt-[12vh] flex h-full flex-col items-center justify-center gap-0 bg-cutie-blue-300 py-10 font-righteous">
      <Title text="Tracks" subtext="" />
      <div className="flex w-9/12 flex-wrap justify-center gap-y-10">
        {TRACKS.map((track, index) => (
          <div
            key={index}
            className="relative flex w-1/2 flex-col items-center text-center text-white md:w-1/3 animate-jiggle-12s z-30"
          >
            <Image
              src={track.image}
              alt={track.title}
              className={`w-full scale-125 md:scale-100 ${track.className}`}
            />
            <div className={`absolute text-center ${track.text}`}>
              <h2 className="mt-4 w-full text-xs font-semibold md:w-3/5 md:text-xl">
                {track.title}
              </h2>
              <p className="mt-2 w-full px-0 text-[7px] md:w-3/5 md:text-sm">
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
