import React from "react";
import arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../motionVariants";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation only happens once
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Ensures animation only happens once
  });
  return (
    <div
      ref={ref}
      id="howItWorks"
      className="w-[90%] h-[535px] sm:h-full pb-20 pt-10 justify-between shadow-box mb-10 border border-gray-200 flex flex-col items-center p-5 rounded-xl"
    >
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-center justify-center flex-col"
      >
        <h1 className="text-gray-800 text-5xl sm:text-4xl font-bold">How It Works</h1>
        <p className="text-gray-600 text-xl sm:text-base text-center font-medium mt-2">
          Premium designs, unlimited requests, super fast delivery, for one flat
          monthly fee.
        </p>
      </motion.div>

      <div ref={ref2} className="flex sm:flex-col sm:gap-20 sm:mt-20 text-center justify-evenly w-full items-center">
        <motion.div 
        variants={fadeIn("up","",0.25,0.25)}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        className="flex w-[350px] sm:w-[90%] flex-col justify-center items-center relative">
          <h1 className="absolute -bottom-10 -z-10 text-gradient font-extrabold text-[200px] sm:text-[150px] sm:bottom-0">
            1
          </h1>
          <h2 className="text-gray-800 text-4xl sm:text-3xl font-extrabold">Subscribe</h2>
          <p className="text-gray-500 sm:text-base mt-2 font-medium text-lg">
            Subscribe to a plan & you’ll get an instant access to your private
            Slack channel.
          </p>
        </motion.div>
        <img src={arrow} alt="" className="sm:hidden" />
        <motion.div
         variants={fadeIn("up","",0.5,0.25)}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
        className="flex w-[350px] sm:w-[90%] flex-col justify-center items-center relative">
          <h1 className="absolute -bottom-10 -z-10 text-gradient font-extrabold text-[200px] sm:text-[150px] sm:bottom-0">
            2
          </h1>
          <h2 className="text-gray-800 text-4xl sm:text-3xl font-extrabold">Request</h2>
          <p className="text-gray-500 sm:text-base mt-2 font-medium text-lg">
            Submit any number of requests. We'll work through them, one at a
            time, ensuring consistent updates every 24-48 hours
          </p>
        </motion.div>
        <img src={arrow} alt=""  className="sm:hidden"/>
        <motion.div
         variants={fadeIn("up","",0.75,0.25)}
         initial="hidden"
         animate={inView2 ? "visible" : "hidden"}
        className="flex w-[350px] sm:w-[90%] flex-col justify-center items-center relative">
          <h1 className="absolute -bottom-10 -z-10 text-gradient font-extrabold text-[200px] sm:text-[150px] sm:bottom-0">
            3
          </h1>
          <h2 className="text-gray-800 text-4xl sm:text-3xl font-extrabold">Revise</h2>
          <p className="text-gray-500 sm:text-base mt-2 font-medium text-lg">
            Need changes? We guarantee unlimited revisions until you're 200%
            satisfied.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
