import React from "react";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, ",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[rgb(39,39,42)] text-white">
      <div className="max-ww-[48rem] text-center m-auto pb-12">
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
          Loved by thousands of creatives from around the world
        </h2>
      </div>

      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-[rgb(39,39,42)]  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-[rgb(39,39,42)]  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
