"use client";
import React from "react";
import f1 from "../../Assets/feature-post-01.png";
import f2 from "../../Assets/feature-post-02.png";
import f3 from "../../Assets/feature-post-03.png";
import f4 from "../../Assets/feature-post-04.png";
import f5 from "../../Assets/feature-post-05.png";
import Image from "next/image";

const Features2 = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-[48rem] text-center m-auto pb-12">
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
            AI-powered features and effects
          </h2>
          <p className="text-lg text-[#71717A]">
            Whenever you are ready, just hit publish to turn your site sketches
            into an actual designs. No creating, no skills, no reshaping.
          </p>
        </div>
        <div className="grid max-w-80 m-auto sm:max-w-full sm:grid-cols-2 sm:grid-row-3 md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-8">
          <div className="sm:col-span-2 border rounded-xl card-bg">
            <div className=" p-5 ">
              <div className="flex">
                <svg
                  className="fill-[#a1a1aa]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M17 9c.6 0 1 .4 1 1v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6c.6 0 1 .4 1 1s-.4 1-1 1H4v12h12v-6c0-.6.4-1 1-1Zm-.7-6.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8Z"></path>
                </svg>
                <h1 className="head ml-3">Truly Collaborative</h1>
              </div>

              <p className="pera">
                Create teams and organize your designs into folders using
                project
                <br /> specs and insights.
              </p>
            </div>
            <Image src={f1} alt="features Image" className="object-cover object-left h-72"/>
          </div>
          <div className="border rounded-xl card-bg">
            <div className=" p-5">
              <div className="flex">
                <svg
                  className="fill-[#a1a1aa]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="m6.035 17.335-4-14c-.2-.8.5-1.5 1.3-1.3l14 4c.9.3 1 1.5.1 1.9l-6.6 2.9-2.8 6.6c-.5.9-1.7.8-2-.1Zm-1.5-12.8 2.7 9.5 1.9-4.4c.1-.2.3-.4.5-.5l4.4-1.9-9.5-2.7Z"></path>
                </svg>
                <h1 className="head ml-3">Advanced AI</h1>
              </div>
              <p className="pera">
                Generate images and explore new ways of presenting your designs
                with AI.
              </p>
            </div>
            <Image src={f2} alt="features Image" />
          </div>
          <div className="border rounded-xl card-bg">
            <div className=" p-5">
              <div className="flex">
                <svg
                  className="fill-[#a1a1aa]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M8.974 16c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z"></path>
                </svg>
                <h1 className="head ml-3">Simple Snippets</h1>
              </div>
              <p className="pera">
                Get your scenes inside your projects using simple embed
                code/snippets.
              </p>
            </div>
            <Image src={f3} alt="features Image" />
          </div>
          <div className="border rounded-xl card-bg">
            <div className=" p-5">
              <div className="flex">
                <svg
                  className="fill-[#a1a1aa]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M9.3 11.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM9.3 17.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM2.3 12.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z"></path>
                </svg>
                <h1 className="head ml-3">Precise Activity</h1>
              </div>
              <p className="pera">
                Easily make drag and drop interactions without coding.
              </p>
            </div>
            <Image src={f4} alt="features Image" />
          </div>
          <div className="border rounded-xl card-bg">
            <div className=" p-5">
              <div className="flex">
                <svg
                  className="fill-[#a1a1aa]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M16 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8.667l3.733 2.8A1 1 0 0 0 18 17V4a2 2 0 0 0-2-2Zm0 13-2.4-1.8a1 1 0 0 0-.6-.2H4V4h12v11Z"></path>
                </svg>
                <h1 className="head ml-3">Real-time Feedback</h1>
              </div>
              <p className="pera">
                Create tasks, projects, issues and more in just seconds.
              </p>
            </div>
            <Image src={f5} alt="features Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
