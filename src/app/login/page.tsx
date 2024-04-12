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
                <div className="flex justify-between">
                <label className="pera !text-black mb-2 block" htmlFor="email">
                  Password
                </label>
                <a href="#0" className="underline pera">Forgot?</a>
                </div>
                
                <input
                  id="password"
                  className="w-full rounded-md border py-2 px-4 shadow-sm outline-none"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-8">
              <Button text="Log In" />
            </div>
          </form>

          <div className="items-center flex my-5 before:border-t before:flex-grow before:mr-3 after:border-t after:flex-grow after:ml-3">
            <div className="italic text-sm text-gray-400  ">Or</div>
          </div>

          <div className="shadow-md w-full flex py-2 px-4 items-center justify-center rounded-md border border-transparent text-base font-medium cursor-pointer antialiased ">
            <div className="items-center mr-5 sm:mr-10 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#a1a1aa"
                className="shrink-0 "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
              </svg>
            </div>
            <span className="pl-6 flex-1 text-sm text-gray-500">Continue With Google</span>
          </div>
          <div className="text-center mt-6">
            <div className="pera !text-xs">
            By loggin in you agree with our {" "}
            <a href="#0" className="underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
