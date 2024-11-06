import Image from "next/image";
import Rocket from "@/public/assets/rocketship.svg";
import Star from "@/public/assets/star.svg";
import UFO from "@/public/assets/ufo.svg";
import Satellite from "@/public/assets/satellite.svg";
import Galaxy from "@/public/assets/galaxy.svg";
import Edge from "@/public/assets/edgebubble.svg";

const SVGS = () => {
  return (
    <div className="w-2/5">
      <Image
        src={Rocket}
        alt="RocketShip"
        className="absolute -top-[2%] left-[1%] z-10 w-[30%]"
      />
      <Image
        src={Star}
        alt="Star"
        className="absolute right-[12%] top-[15%] z-10 w-[12%] md:right-[29%] md:top-[34%] md:w-[9%]"
      />
      <Image
        src={UFO}
        alt="UFO"
        className="absolute bottom-[24%] left-[20%] z-10 hidden w-[11%] rotate-[24deg] md:block"
      />
      <Image
        src={Galaxy}
        alt="Galaxy"
        className="absolute left-[10%] top-[36%] z-10 hidden w-fit animate-spin-10s md:block"
      />
      <Image
        src={Satellite}
        alt="Satellite"
        className="absolute right-[0%] top-[20%] z-10 hidden w-[20%] rotate-180 md:block"
      />
      <Image
        src={Edge}
        alt="Rocket Bubble"
        className="absolute -bottom-[10%] right-[0%] -z-20 w-full"
      />
      <div className="absolute right-[14%] top-[38%] z-10 hidden rotate-[30deg] flex-col items-center gap-5 md:flex">
        <p className="w-6 animate-pulse bg-cutie-gray py-0.5 text-3xl" />
        <p className="w-10 animate-pulse bg-cutie-gray py-0.5 text-3xl" />
        <p className="w-14 animate-pulse bg-cutie-gray py-0.5 text-3xl" />
      </div>
    </div>
  );
};

export default SVGS;
