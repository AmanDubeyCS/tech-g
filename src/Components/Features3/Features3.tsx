"use client";
import React from "react";
import fI from "../../Assets/carousel-illustration-01.jpg"
import Image from "next/image";

const Features3 = () => {
  return (
    <section className="py-20 bg-[rgb(39,39,42)]">
      <div className="container flex">
        <div className="w-[48%]">
          <div className=" mb-8">
            <div className="pera border rounded-full py-1 px-4 w-max bg-transparent mb-4">
              Scale Your Team
            </div>
            <h2 className="ft3head mb-4 text-4xl">
              Design-powered workflows for teams of any size
            </h2>
            <p className="ft3pera">
              Gray can understand what you are designing, learn from your
              feedback to take your creativity further, and turn it instantly
              into beautiful images.
            </p>
          </div>
          <div>
            <div className="flex items-center py-4 px-6  border-[#e5e7eb] border rounded-md ft3cardbg">
              <svg
                className="fill-[#a1a1aa] mr-3 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m7.951 14.537 6.296-7.196 1.506 1.318-7.704 8.804-3.756-3.756 1.414-1.414 2.244 2.244Zm11.296-7.196 1.506 1.318-7.704 8.804-1.756-1.756 1.414-1.414.244.244 6.296-7.196Z"></path>
              </svg>

              <div className="">
                <div className="ft3head text-lg">Make designs feel real</div>
                <div className="ft3pera">
                  Save time and keep things consistent with reusable images, and
                  3D assets in shared libraries.
                </div>
              </div>
            </div>
            <div className="flex items-center py-4 px-6 mt-2 ">
              <svg
                className="fill-[#a1a1aa] mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m16.997 19.056-1.78-.912A13.91 13.91 0 0 0 16.75 11.8c0-2.206-.526-4.38-1.533-6.344l1.78-.912A15.91 15.91 0 0 1 18.75 11.8c0 2.524-.602 5.01-1.753 7.256Zm-3.616-1.701-1.77-.93A9.944 9.944 0 0 0 12.75 11.8c0-1.611-.39-3.199-1.14-4.625l1.771-.93c.9 1.714 1.37 3.62 1.369 5.555 0 1.935-.47 3.841-1.369 5.555Zm-3.626-1.693-1.75-.968c.49-.885.746-1.881.745-2.895a5.97 5.97 0 0 0-.745-2.893l1.75-.968a7.968 7.968 0 0 1 .995 3.861 7.97 7.97 0 0 1-.995 3.863Zm-3.673-1.65-1.664-1.11c.217-.325.333-.709.332-1.103 0-.392-.115-.776-.332-1.102L6.082 9.59c.437.655.67 1.425.668 2.21a3.981 3.981 0 0 1-.668 2.212Z"></path>
              </svg>
              <div>
                <div className="ft3head text-lg">Bring creatives closer</div>
                <div className="ft3pera">
                  Save time and keep things consistent with reusable images, and
                  3D assets in shared libraries.
                </div>
              </div>
            </div>
            <div className="flex items-center py-4 px-6 mt-2">
              <svg
                className="fill-[#a1a1aa] mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m11.293 5.293 1.414 1.414-8 8-1.414-1.414 8-8Zm7-1 1.414 1.414-8 8-1.414-1.414 8-8Zm0 6 1.414 1.414-8 8-1.414-1.414 8-8Z"></path>
              </svg>
              <div>
                <div className="ft3head text-lg">Scale and align your design team</div>
                <div className="ft3pera">
                  Save time and keep things consistent with reusable images, and
                  3D assets in shared libraries.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 overflow-hidden">
            <Image src={fI} alt="image" width={800} height={620}/>
        </div>
      </div>
    </section>
  );
};

export default Features3;
