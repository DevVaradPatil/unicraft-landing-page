import React from "react";
import PricingCard from "./Cards/PricingCard";

const Pricing = () => {
  return (
    <div id="pricing" className="py-10 px-20 sm:px-3 flex justify-center items-center flex-col">
      <h1 className="text-gray-800 text-center text-6xl sm:text-[40px] font-bold">
        Pricing made for collaborative support.
      </h1>
      <p className="text-gray-500 text-center mt-3 text-xl sm:text-base font-medium">
        Plain is made for your entire company. Only pay for users that actually{" "}
        <br className="sm:hidden" /> message customers. Everyone else is free, forever.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 mt-10 sm:mt-14">
        <PricingCard index={0} title="Freebie" subtitle="Ideal for individuals who need quick access to basic features." price="0" activeList={2}/>
        <PricingCard index={1} title="Professional" subtitle="Ideal for individuals who who need advanced features and tools for client work." price="25" activeList={5} isDark/>
        <PricingCard index={2} title="Enterprise" subtitle="Ideal for businesses who need personalized services and security for large teams." price="100" activeList={8}/>
      </div>
    </div>
  );
};

export default Pricing;
