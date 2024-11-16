"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { items } from "@/data/live/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Link as Scroll } from "react-scroll";

const Navigation = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-cutie-blue-300 p-5 font-semibold text-white">
      {/* Desktop Nav */}
      <div className="hidden w-full justify-evenly md:flex">
        {items.map((item, index) => (
          <Scroll
            key={index}
            to={item.id}
            href={item.link}
            spy={true}
            smooth={true}
            offset={-100}
            className="cursor-pointer p-1 font-bold"
          >
            {item.name}
          </Scroll>
        ))}
        {/* <Link
          href={"/form/participant"}
          className="border-custom-white hover:drop-shadow-[0_10px_1px_rgba(255, 255, 255, 0.5)] border p-1 px-2 shadow-custom-white duration-200"
        >
          REGISTER
        </Link> */}
        {session ? (
          Object.keys(session.user.roles).includes("participants") && (
            <Link
              href={"/user"}
              className="border-custom-white hover:drop-shadow-[0_10px_1px_rgba(255, 255, 255, 0.5)] border p-1 px-2 shadow-custom-white duration-200"
            >
              HACKER PORTAL
            </Link>
          )
        ) : (
          <div
            onClick={() => signIn("google")}
            className="border-custom-white hover:drop-shadow-[0_10px_1px_rgba(255, 255, 255, 0.5)] cursor-pointer border p-1 px-2 shadow-custom-white duration-200"
          >
            LOGIN
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="flex w-full items-center justify-end md:hidden">
        <Menu
          className="cursor-pointer text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-16 flex w-full flex-col items-center bg-gradient-to-t from-cutie-blue-200 to-cutie-blue-300 pb-5 pt-2 shadow-2xl">
          {items.map((item, index) => (
            <Scroll
              key={index}
              to={item.id}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              className="w-full cursor-pointer py-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Scroll>
          ))}
          <Link
            href={"/form/participant"}
            className="border-custom-white mt-2 w-fit border p-1 px-2 text-center shadow-custom-white"
          >
            REGISTER
          </Link>
          {session ? (
            Object.keys(session.user.roles).includes("participants") && (
              <Link
                href={"/user"}
                className="border-custom-white mt-2 w-fit border p-1 px-2 text-center shadow-custom-white"
                onClick={() => setIsOpen(false)}
              >
                HACKER PORTAL
              </Link>
            )
          ) : (
            <div
              onClick={() => {
                signIn("google");
                setIsOpen(false);
              }}
              className="border-custom-white mt-2 w-fit border p-1 px-2 text-center shadow-custom-white"
            >
              LOGIN
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
