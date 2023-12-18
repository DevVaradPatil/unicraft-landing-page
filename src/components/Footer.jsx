import React, { useState } from "react";
import twitter from "../assets/social-icons/twitter.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import facebook from "../assets/social-icons/facebook.svg";
import github from "../assets/social-icons/github.svg";
import peace from "../assets/social-icons/peace.svg";
import basketball from "../assets/social-icons/basketball.svg";
import { motion } from "framer-motion";
import { textVariant } from "../motionVariants";
import { useInView } from "react-intersection-observer";
import ContactForm from "./Cards/ContactForm";

const Footer = () => {
  const socialIcons = [twitter, linkedin, facebook, github, peace, basketball];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      id="contact"
      className="flex flex-col bg-gradient-special w-full justify-center items-center mt-8 pb-8 pt-20 px-20 sm:px-3 text-center"
    >
      <motion.h1
        variants={textVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-gray-900 text-center text-7xl font-boldest sm:text-5xl"
      >
        No long-term contracts. <br /> No catches. Simple.
      </motion.h1>
      <motion.p
        variants={textVariant(0)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-gray-500 text-xl font-medium mt-4"
      >
        Start your 30-day free trial. Cancel anytime.
      </motion.p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-lg rounded-lg border text-gray-50 bg-gray-800 py-3 px-8 mt-8 font-semibold transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl"
      >
        Contact Us
      </button>

      {isModalOpen && <ContactForm setIsModalOpen={setIsModalOpen} />}

      <div className="mt-32 flex items-start w-full justify-center flex-col border-t border-t-gray-300">
        <div className="flex justify-start my-8 items-start flex-col gap-3">
          <p className="text-gray-700 text-2xl font-bold">UniCraft</p>
          <p className="text-gray-400 mt-3 text-lg text-left font-medium">
            Design amazing digital experiences that <br /> create more happy in
            the world.
          </p>
        </div>
        <div className="w-full flex text-left gap-5 justify-between items-center">
          <div className="text-gray-400">
            © 2077 Untitled UI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="social-icon"
                className="w-6 h-6 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
