import Button from "@/Components/Button/Button";
import Navbar from "@/Components/Header/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container pt-40">
        <div className="max-w-[48rem] m-auto text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold pb-4 leading-tight tracking-tight">
            Log in to Gray
          </h2>
        </div>

        <div className="max-w-sm m-auto border p-6 rounded-md shadow-2xl">
          <form>
            <div className="flex flex-col gap-4">
              <div>
                <label className="pera !text-black mb-2 block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  type="email"
                  placeholder="mark@acmecorp.com"
                />
              </div>

              <div>
                <label className="pera !text-black mb-2 block" htmlFor="email">
                  Password
                </label>
                <input
                  id="password"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-8">
              <Button text="Log In"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
