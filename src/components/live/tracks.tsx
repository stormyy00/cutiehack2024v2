import Title from "./title";
import Image from "next/image";
import { TRACKS } from "@/data/live/tracks";

const Tracks = () => {
  return (
    <div className="mt-[12vh] flex h-full flex-col items-center justify-center gap-0 bg-cutie-blue-300 py-10 font-righteous">
      <Title text="Tracks" subtext="" />
      <div className="grid w-10/12 grid-cols-1 gap-0 overflow-auto md:grid-cols-3">
        {TRACKS.map((track, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center text-white"
          >
            <Image
              src={track.image}
              alt={track.title}
              className={`w-5/12 md:w-full ${track.className}`}
            />
            <div className={`absolute text-center ${track.text}`}>
              <h2 className="mt-4 w-full text-base font-semibold md:w-3/5 md:text-2xl">
                {track.title}
              </h2>
              <p className="mt-2 w-full px-4 text-xs md:w-3/5 md:text-sm">
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
