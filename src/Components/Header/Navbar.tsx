"use client";
import React from "react";
import logo from "../../Assets/logo.png"
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="absolute top-5 w-full  px-4">
        <div className="m-auto max-w-[48rem] h-14 flex justify-between p-3 border rounded-lg border-gray-300 items-center">
            <Link href="/">
            <div className="shadow-md bg-white p-1 rounded-md">
            <Image src={logo} alt="logo" width={24} height={24}/>
            </div>
            </Link>
          
          <nav>
            <ul className="flex gap-4 items-center">
              <li><Link href="login"><div className="text-sm font-semibold text-gray-600 cursor-pointer">Log In</div></Link></li>
              <li><Link href="Registration"><Button text="Request Demo"/></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
