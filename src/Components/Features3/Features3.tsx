"use client";
import React, { useState } from "react";
import fI1 from "../../Assets/carousel-illustration-01.jpg";
import fI2 from "../../Assets/feature-post-02.png";
import fI3 from "../../Assets/feature-post-03.png";
import Image from "next/image";
import ring from "../../Assets/features-illustration.png";

const Features3 = () => {
  const [Img, setImg] = useState(fI1)

  return (
    <section className="py-20 bg-[rgb(39,39,42)] relative  overflow-hidden">
      <div className="container lg:flex">
        <div className="max-w-lg lg:w-[48%] m-auto lg:m-0">
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
            <div className={`flex items-center py-4 px-6 mt-2 cursor-pointer ${ (Img === fI1) ? "ft3cardbg": ""}`} onClick={() => setImg(fI1)}>
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
            <div className={`flex items-center py-4 px-6 mt-2 cursor-pointer ${ (Img === fI2) ? "ft3cardbg": ""}`} onClick={() => setImg(fI2)}>
              <svg
                className="fill-[#a1a1aa] mr-3 shrink-0"
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
            <div className={`flex items-center py-4 px-6 mt-2 cursor-pointer ${ (Img === fI3) ? "ft3cardbg": ""}`} onClick={() => setImg(fI3)}>
              <svg
                className="fill-[#a1a1aa] mr-3 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m11.293 5.293 1.414 1.414-8 8-1.414-1.414 8-8Zm7-1 1.414 1.414-8 8-1.414-1.414 8-8Zm0 6 1.414 1.414-8 8-1.414-1.414 8-8Z"></path>
              </svg>
              <div>
                <div className="ft3head text-lg">
                  Scale and align your design team
                </div>
                <div className="ft3pera">
                  Save time and keep things consistent with reusable images, and
                  3D assets in shared libraries.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg m-auto lg:ml-24 mt-5 ">
          <div className="lg:absolute w-full">
            <Image src={Img} alt="image" width={800} height={620}/>
            <div className="max-w-32 lg:max-w-full absolute -translate-x-1/2 -translate-y-2/3 mix-blend-exclusion">
              <Image src={ring} alt="ring" width={173} height={167} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 mg:gap-16 mt-24">
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M15 9a1 1 0 0 1 0 2c-.441 0-1.243.92-1.89 1.716.319 1.005.529 1.284.89 1.284a1 1 0 0 1 0 2 2.524 2.524 0 0 1-2.339-1.545A3.841 3.841 0 0 1 9 16a1 1 0 0 1 0-2c.441 0 1.243-.92 1.89-1.716C10.57 11.279 10.361 11 10 11a1 1 0 0 1 0-2 2.524 2.524 0 0 1 2.339 1.545A3.841 3.841 0 0 1 15 9Zm-5-1H7.51l-.02.142C6.964 11.825 6.367 16 3 16a3 3 0 0 1-3-3 1 1 0 0 1 2 0 1 1 0 0 0 1 1c1.49 0 1.984-2.48 2.49-6H3a1 1 0 1 1 0-2h2.793c.52-3.1 1.4-6 4.207-6a3 3 0 0 1 3 3 1 1 0 0 1-2 0 1 1 0 0 0-1-1C8.808 2 8.257 3.579 7.825 6H10a1 1 0 0 1 0 2Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Team views</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M13 16c-.153 0-.306-.035-.447-.105l-3.851-1.926c-.231.02-.465.031-.702.031-4.411 0-8-3.14-8-7s3.589-7 8-7 8 3.14 8 7c0 1.723-.707 3.351-2 4.63V15a1.003 1.003 0 0 1-1 1Zm-4.108-4.054c.155 0 .308.036.447.105L12 13.382v-2.187c0-.288.125-.562.341-.752C13.411 9.506 14 8.284 14 7c0-2.757-2.691-5-6-5S2 4.243 2 7s2.691 5 6 5c.266 0 .526-.02.783-.048a1.01 1.01 0 0 1 .109-.006Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Discussions</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
              >
                <path d="M13 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM2 2h10v8H8v4H2V2Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Team views</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Powerful search</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M14.6.085 8 2.885 1.4.085c-.5-.2-1.4-.1-1.4.9v11c0 .4.2.8.6.9l7 3c.3.1.5.1.8 0l7-3c.4-.2.6-.5.6-.9v-11c0-1-.9-1.1-1.4-.9ZM2 2.485l5 2.1v8.8l-5-2.1v-8.8Zm12 8.8-5 2.1v-8.7l5-2.1v8.7Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Enhancing</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <svg
                className="fill-[#a1a1aa] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
              >
                <path d="M13 14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h12Zm-6.707-2.293-5-5a1 1 0 0 1 1.414-1.414L6 8.586V1a1 1 0 1 1 2 0v7.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0Z"></path>
              </svg>
              <h3 className="ft3head !leading-[0]">Powerful search</h3>
            </div>
            <p className="pera">
              Keep workflows efficient with tools that give teams visibility
              throughout the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3;
