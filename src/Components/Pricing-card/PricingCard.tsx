import React from "react";
import Button from "../Button/Button";

interface priceCard {
  amount: string;
  typeOfOffer: string
  props?: any;
}

const PricingCard = ({ amount, typeOfOffer, props }: priceCard) => {
  return (
    <div >
      <div className={`${props? props: "card-bg"} p-6 border border-transparent rounded-lg`}>
        <div className="mb-2">
          <div className={`${props? "!text-white": ""} head !text-lg`}>{typeOfOffer}</div>
          <div className={`${props? "!text-white": ""} my-2`}>
            <span className="head !text-2xl !font-bold">$</span>
            <span className="head !text-3xl !font-bold">{amount}</span>
            <span className="pera">/mo</span>
          </div>
          <div className="pera !text-base">
            For power users who want access to creative features.
          </div>
        </div>
        <div>
          <div className={`${props? "!text-white": ""} pera mb-4`} >Includes:</div>
          <ul>
            <li className="flex items-center pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Unlimited workspace boards
            </li>
            <li className="flex items-center mt-3 pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Unlimited viewers
            </li>
            <li className="flex items-center mt-3 pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Unlimited project templates
            </li>
            <li className="flex items-center mt-3 pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Change management
            </li>
            <li className="flex items-center mt-3 pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Taxonomy development
            </li>
            <li className="flex items-center mt-3 pera">
              <svg
                className="fill-[#10b981] shrink-0 w-3 h-3 mr-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>{" "}
              Customer success manager
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <Button text="Try for Free" props={ `${props? 'bg-white text-gray-500' : ""} text-center`} />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
