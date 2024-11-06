import React from "react";
import Link from "next/link";

const Apply = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="flex w-full items-center p-1 px-4 font-righteous text-lg font-bold text-cutie-magenta hover:opacity-75 md:text-3xl"
    >
      {text}
    </Link>
  );
};

export default Apply;
