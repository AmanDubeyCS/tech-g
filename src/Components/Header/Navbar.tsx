"use client";
import React from "react";
import logo from "../../Assets/logo.png"
import Image from "next/image";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header>
      <div className="absolute top-5 w-full px-4">
        <div className="m-auto max-w-[48rem] flex justify-between p-3 border rounded-lg border-gray-300 items-center">
            <div className="shadow-md bg-white p-1 rounded-md">
            <Image src={logo} alt="logo" width={24} height={24}/>
            </div>
          
          <nav>
            <ul className="flex gap-4 items-center">
              <li className="text-sm font-medium text-gray-400">Log In</li>
              <li><Button text="Request Demo"/></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
