"use client";
import { useState, useEffect } from "react";
import data from "/src/data/Config";

const Digits = ({ value, unit }) => {
  return (
    <div className="flex flex-col items-center gap-4 last:hidden sm:last:flex">
      <div className="m-2 mb-0 flex gap-1 lg:!gap-0">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className="flex items-center justify-center text-lg font-bold text-white lg:min-w-11 lg:p-1 lg:text-4xl"
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div className="m-2 mt-0 text-base text-white">{unit}</div>
    </div>
  );
};
const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = data.date - new Date().getTime();
      if (timeLeft <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex-col mb-3 inline-block w-full rounded-lg text-center">
      <div className="m-2 mb-0 font-bold text-white"></div>
      <div className="inline-flex font-bold">
        {Object.entries(countdown).map(([unit, value], index) => (
          <Digits key={index} unit={unit} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
