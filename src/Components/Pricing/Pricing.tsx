import React from "react";

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
        <div className="grid grid-cols-3">
            <div>
                <div className="card-bg p-6 border border-transparent rounded-lg">
                    <div className="mb-2">
                        <div className="head !text-lg">Essential</div>
                        <div className="mb-1">
                            <span className="head !text-2xl !font-bold">$</span>
                            <span className="head !text-3xl !font-bold">29</span>
                            <span className="pera">/mo</span>
                        </div>
                        <div className="pera !text-base">For power users who want access to creative features.</div>
                    </div>
                    <div>
                        <div className="pera">Includes:</div>
                        
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
