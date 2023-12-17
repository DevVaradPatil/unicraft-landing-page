import React from "react";
import tickWhite from "../../assets/tick-white.svg";
import tickBlack from "../../assets/tick-black.svg";
import tickGray from "../../assets/tick-gray.svg";
import { motion } from "framer-motion";
import { zoomIn } from "../../motionVariants";
import { useInView } from "react-intersection-observer";

const PricingCard = ({ title, subtitle, price, activeList, isDark, index }) => {
  const FeatureList = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
    ref={ref}
      variants={zoomIn(index*0.25, 0.15)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col max-w-[380px] py-10 pb-20 px-6 border transition-all duration-300  border-gray-200 rounded-2xl ${
        isDark ? "bg-gray-800 rounded-xl  shadow-pricingBox hover:bg-gray-900" : "hover:bg-gray-100"
      }`}
    >
      <h3
        className={`${
          isDark ? "text-white" : "text-neutral-800"
        } font-bold text-[22px]`}
      >
        {title}
      </h3>
      <p
        className={`${
          isDark ? "text-gray-100" : "text-gray-500"
        } font-medium mt-2`}
      >
        {subtitle}
      </p>
      <div className="flex items-center gap-1 mt-5">
        <h1
          className={`${
            isDark ? "text-gray-50" : "text-gray-800"
          } font-medium text-6xl`}
        >
          ${price}
        </h1>
        <p className={`${isDark ? "text-gray-50" : "text-gray-600"}`}>/Month</p>
      </div>
      <button
        className={`mt-6 w-full py-2 rounded-lg text-gray-600 font-semibold border border-gray-600 transition-all duration-200 hover:opacity-70 ${
          isDark && "bg-gray-50 border-none text-gray-800"
        }`}
      >
        Get Started Now
      </button>
      <div className="mt-10 flex flex-col gap-3">
        {FeatureList.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 font-medium ${
              index < activeList
                ? isDark
                  ? "text-gray-50"
                  : "text-gray-800"
                : "text-gray-400"
            }`}
          >
            <img
              src={
                index < activeList ? (isDark ? tickWhite : tickBlack) : tickGray
              }
              alt="tick"
            />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
