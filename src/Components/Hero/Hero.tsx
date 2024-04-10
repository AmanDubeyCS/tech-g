"use client";
import Image from "next/image";
import React from "react";
import heroImage from "../../Assets/hero-image.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="pt-[160px] pb-20">
      <div className="container">
        <div className="max-w-[48rem] m-auto text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold pb-4 leading-tight tracking-tight">
            The creative {" "}
            <span className="italic relative items-center justify-center inline-flex text-black">
              <svg
                className="absolute fill-[#a1a1aa] -z-10"
                style={{
                  width: "calc(100% + 1rem) "
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="62"
                viewBox="0 0 223 62"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852"></path>
              </svg>
              platform 
            </span>{" "}
            for cross-functional work
          </h2>
          <p className="text-lg mb-8 text-[#71717A]">
            Turbocharge your creative process with a powerful AI design platform
            that gives creatives the power of creating without limits.
          </p>
          <div className="flex flex-col justify-center gap-5 md:flex-row max-w-80 m-auto">
            <div>
              <Button text="Request Demo" />
            </div>
            <div>
              <Button text="Try For Free" props="bg-white text-gray-500" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl h-auto flex justify-center pb-20">
          <Image src={heroImage} alt="hero image" width={1104} height={620} className="shadow-2xl rounded-md"/>
        </div>
        <div className="relative m-auto grid sm:grid-cols-2 lg:grid-cols-4 text-center gap-12 md:gap-0">
          <div className="px-5  ">
            <div className="text-[32px] font-bold">476K</div>
            <p className="text-sm font-normal leading-6 text-[#71717A] text-center">
              Assets packed with power beyond your imagination.
            </p>
          </div>
          <div className="px-5 ">
            <div className="text-[32px] font-bold">1.44K</div>
            <p className="text-sm font-normal leading-6 text-[#71717A]">
              Assets packed with power beyond your imagination.
            </p>
          </div>
          <div className="px-5 ">
            <div className="text-[32px] font-bold">1.5M+</div>
            <p className="text-sm font-normal leading-6 text-[#71717A]">
              Assets packed with power beyond your imagination.
            </p>
          </div>
          <div className="px-5 ">
            <div className="text-[32px] font-bold">192K</div>
            <p className="text-sm font-normal leading-6 text-[#71717A]">
              Assets packed with power beyond your imagination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
