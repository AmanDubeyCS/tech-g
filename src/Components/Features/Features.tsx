import Image from "next/image";
import React from "react";
import featured1 from "../../Assets/feature-01.png"
import Illustration from "../../Assets/feature-illustration.png"

const Features = () => {
  return (
    <section className=" py-20 bg-[rgb(250,250,250)]">
      <div className="container">
        <div className="w-[48rem] text-center m-auto pb-12">
          <h2 className="text-[40px] font-bold leading-tight mb-4">
            Go further than the speed of thought
          </h2>
          <p className="text-lg text-[#71717A]">
            AI reads and understands your designs, and with nothing more than a
            single line of feedback, perform complex actions autonomously.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-4">
            <div className="px-4 py-5 border rounded-md shadow-md">
              <h3 className="head">AI Effects</h3>
              <p className="pera">Visually structure your designs and structure them easily.</p>
            </div>
            <div className="px-4 py-5">
              <h3 className="head">Creative Mode</h3>
              <p className="pera">Visually structure your designs and structure them easily.</p>
            </div>
            <div className="px-4 py-5">
              <h3 className="head">Realistic Images</h3>
              <p className="pera">Visually structure your designs and structure them easily.</p>
            </div>
            <div className="px-4 py-5">
              <h3 className="head">Powerful Plugins</h3>
              <p className="pera">Visually structure your designs and structure them easily.</p>
            </div>
          </div>
          <div className="flex justify-center pt-20 relative">
            <div className="absolute right-0 -translate-x-[70%]">
            <Image src={Illustration} alt="illustration" width={273} height={288}/>
            </div>
            <Image src={featured1} alt="featured image" width={600} height={360} className=" shadow-md"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
