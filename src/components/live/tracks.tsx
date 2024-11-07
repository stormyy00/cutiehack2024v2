import Title from "./title";
import Image from "next/image";
import { TRACKS } from "@/data/live/tracks";

const Tracks = () => {
  return (
    <div className="-mt-1 flex h-screen flex-col items-center justify-center gap-10 bg-cutie-blue-300 py-10 font-righteous">
      <Title text="Tracks" subtext="" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {TRACKS.map((track, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white"
          >
            <Image
              src={track.image}
              alt={track.title}
              className="h-[200px] w-[100px]"
            />
            <h2 className="mt-4 text-xl font-semibold">{track.title}</h2>
            <p className="mt-2 px-4">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
