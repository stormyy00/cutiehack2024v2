import React from "react";

const Header = ({ title }: { title: string }) => {
  return <div className="font-medium text-cutie-tan md:text-3xl">{title}</div>;
};

export default Header;
