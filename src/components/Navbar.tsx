"use client";
import Image from "next/image";
import logo from "../../public/image.png";
import Link from "next/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Navbar,
} from "@heroui/react";
import { LucideShoppingCart } from "lucide-react";
import { useState } from "react";

const NextNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className=" fixed bg-transparent py-2 top-0 z-50 backdrop-blur-2xl"
        maxWidth="full"
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <div className="">
              <Link
                href={"/"}
                className="flex justify-center items-center gap-4 "
              >
                <Image height={60} width={60} src={logo} alt="logo"></Image>
                <h1 className="text-2xl text-white font-bold">NexT FooD</h1>
              </Link>
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <div className="flex gap-3 text-xl">
              <Link href={"/foods"}>
                <Button color="warning" size="lg" className="font-bold">
                  Foods
                </Button>
              </Link>
              <Link href={"/reviews"}>
                <Button color="warning" size="lg" className="font-bold">
                  Reviews
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button color="primary" size="lg" className="font-bold">
                  About
                </Button>
              </Link>
              <Link href={"/locations"}>
                <Button color="primary" size="lg" className="font-bold">
                  Locations
                </Button>
              </Link>
              <Link href={"/cart"}>
                <Button color="primary" size="lg" className="font-bold">
                  Cart <LucideShoppingCart></LucideShoppingCart>
                </Button>
              </Link>
            </div>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="pt-10">
          {" "}
          <NavbarItem>
            <div className="flex flex-col gap-3 text-xl">
              <Link href={"/foods"}>
                <Button color="warning" size="lg" className="font-bold">
                  Foods
                </Button>
              </Link>
              <Link href={"/reviews"}>
                <Button color="warning" size="lg" className="font-bold">
                  Reviews
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button color="primary" size="lg" className="font-bold">
                  About
                </Button>
              </Link>
              <Link href={"/locations"}>
                <Button color="primary" size="lg" className="font-bold">
                  Locations
                </Button>
              </Link>
              <Link href={"/cart"}>
                <Button color="primary" size="lg" className="font-bold">
                  Cart <LucideShoppingCart></LucideShoppingCart>
                </Button>
              </Link>
            </div>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NextNavbar;
