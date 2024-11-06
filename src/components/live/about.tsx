import Image from "next/image";
import Bubble from "@/public/assets/rocketbubble.svg";
import { FLEX } from "@/data/live/stats";
import SVGS from "./SVGS";
import Stars from "./stars";

const About = () => {
  return (
    <div className="relative -mt-3 flex items-center justify-center bg-cutie-blue-300 font-righteous">
      <Image
        src={Bubble}
        alt="Rocket Bubble"
        className="inset-0 z-0 min-w-full"
      />
      <Stars length={200} />
      <div className="absolute z-10 w-8/12 rounded-xl border-8 border-cutie-blue-200 bg-cutie-violet p-4 text-center shadow md:w-4/12 md:p-8">
        <div
          id="about"
          className="text-base font-semibold text-cutie-yellow md:text-3xl"
        >
          What is CutieHack?
        </div>
        <p className="mt-2 text-xs font-medium text-cutie-blue-200 md:text-lg">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </p>
      </div>
      <div className="absolute bottom-[-30%] z-0 flex w-2/3 animate-jiggle-12s flex-wrap justify-center gap-5 md:bottom-[25%] md:w-1/2">
        {FLEX.map((item, index) => (
          <div
            key={index}
            className="w-1/4 text-center text-xl font-bold text-white md:text-4xl"
          >
            {item.number}
            <p className="text-base font-medium text-cutie-gray/90 md:text-2xl">
              {item.type}
            </p>
          </div>
        ))}
      </div>
      <SVGS />
    </div>
  );
};

export default About;
