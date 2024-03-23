"use client";

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

import { useSession } from "next-auth/react";


const Navbar = () => {
  const currentPath = usePathname();

  const { status, data: session } = useSession();

  const links = [
    { label: "Dasboard", href: "/dashboard" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <div className="border-b mb-5 px-5 py-3 h-15">
      <Container>
      <Flex justify="between" >
        <Flex align="center" gap="3">
        <AiFillBug className="text-4xl" />
        <Link href={"/"}>Home</Link>

        <ul className="flex flex-row space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`{ ${
                  currentPath === link.href ? "text-zinc-800" : "text-zinc-500"
                }  hover:text-zinc-800 transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        </Flex>
        <Box>
        <Box className="">
        {status === "authenticated" && (
          // <Link href="api/auth/signout">Sign Out</Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>

            <Avatar src={session?.user!.image!} fallback="?" 
            size="2" className="cursor-pointer" 
            radius="full" 
            />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text size="2" color="violet">
                
              {session?.user!.name!}
              <Link href="api/auth/signout">Sign Out</Link>
              </Text>
            </DropdownMenu.Content>

          </DropdownMenu.Root>
        )}
        {status === "unauthenticated" && (
          <Link href="api/auth/signin">Sign In</Link>
        )}


      </Box>
        </Box>
      </Flex>
      </Container>
       
      </div>

      

  );
};

export default Navbar;
