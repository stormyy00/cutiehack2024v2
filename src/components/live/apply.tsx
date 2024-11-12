import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Apply = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="flex w-full items-center justify-center p-1 px-0 font-righteous text-lg font-bold text-cutie-magenta hover:opacity-75 md:text-3xl"
    >
      {text}
      <ArrowUpRight className="h-7 w-fit" />
    </Link>
  );
};

export default Apply;
