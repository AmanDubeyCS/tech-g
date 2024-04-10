import React from "react";
import Button from "../Button/Button";
import PricingCard from "../Pricing-card/PricingCard";
import pricingDecor from "../../Assets/pricing-decoration.png";
import Image from "next/image";

interface faqs {
  question: string,
  answer?: string
}

const FaqS = ({question, answer}:faqs) => {
  return (
    <div className="px-4 py-2 bg-[#f4f4f5] rounded-md">
      <div className="flex justify-between">
        <h2 className="ft3pera">{question}?</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#a1a1aa"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="w-[48rem] text-center m-auto pb-12">
          <h2 className="text-[40px] font-bold leading-tight mb-4">
            Start your journey today
          </h2>
          <p className="text-lg text-[#71717A]">
            Start creating realtime design experiences for free. Upgrade for
            extra features and collaboration with your team.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 pb-20">
          <PricingCard amount="24" typeOfOffer="Essential" />
          <div className="relative">
            <Image
              src={pricingDecor}
              alt="pricing decoration"
              width={76}
              height={74}
              className="absolute right-8 -top-4 mix-blend-exclusion"
            />
            <PricingCard
              amount="49"
              typeOfOffer="Premium"
              props="bg-[#27272a]"
            />
          </div>
          <PricingCard amount="99" typeOfOffer="Enterprise" />
        </div>

        <div className="w-[42rem] m-auto">
          <div className="flex flex-col gap-2">
          <FaqS question="Can I use the product for free" />
          <FaqS question="What payment methods can I use" />
          <FaqS question="Can I change from monthly to yearly billing" />
          <FaqS question="Can I use the tool for personal, client, and commercial projects"/>
          <FaqS question="How can I ask other questions about pricing" />
          <FaqS question="Do You Offer discount for students and non-profit companies" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
