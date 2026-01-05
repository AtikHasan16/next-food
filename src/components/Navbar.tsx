"use client";
import Image from "next/image";
import logo from "../../public/image.png";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <header className=" flex justify-between items-center py-4 px-6 fixed w-full top-0 z-50 backdrop-blur-2xl">
        <div className="">
          <Link href={"/"} className="flex justify-center items-center gap-4 ">
            <Image height={60} width={60} src={logo} alt="logo"></Image>
            <h1 className="text-2xl text-white font-bold">NexT FooD</h1>
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href={"/foods"}>
            <Button color="primary">Foods</Button>
          </Link>
          <Link href={"/reviews"}>
            <Button color="primary">Reviews</Button>
          </Link>
          <Link href={"/about"}>
            <Button color="secondary">About</Button>
          </Link>
          <Link href={"/locations"}>
            <Button color="secondary">Locations</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
