"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dasboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <AiFillBug className="text-4xl" />
      <Link href={"/"}>Home</Link>
      <ul className="flex flex-row space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`{ ${currentPath === link.href ? "text-zinc-800" : "text-zinc-500"}  hover:text-zinc-800 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
