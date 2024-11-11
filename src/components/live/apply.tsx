import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/assets/arrow.svg";
const Apply = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="flex w-full items-center p-0.5 font-righteous font-bold text-cutie-magenta underline hover:opacity-75 sm:text-xs md:text-3xl"
    >
      {text}
      <Image src={Arrow} alt="Arrow" className="" />
    </Link>
  );
};

export default Apply;
