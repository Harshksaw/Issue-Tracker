"use client";

import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

import { useSession } from "next-auth/react";
import { Skeleton } from "../app/components";

const Navbar = () => {
  return (
    <div className="border-b mb-5 px-5 py-3 h-15">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
          
            <Link href={"/"}>  <AiFillBug className="text-4xl" /></Link>
            <NavLink />
          </Flex>
          <Flex>
            <AuthStatus />
          </Flex>

        </Flex>
      </Container>
    </div>
  );
};

const AuthStatus = () => {

  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="3rem"/>;

  if (status === "unauthenticated")
    return <Link href="api/auth/signin" className="classnames">Sign In</Link>;

  return (
    <Box className="">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user!.image!}
            fallback="?"
            size="2"
            className="cursor-pointer"
            radius="full"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Text size="2" color="violet">
            {session?.user!.name!}
            <Link href="api/auth/signout">Sign Out</Link>
          </Text>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLink = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dasboard", href: "/dashboard" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <ul className="flex flex-row space-x-6">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={
              classnames({
                "nav-link": true,
                "!text-zinc-900" : link.href === currentPath,
              })
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Navbar;
