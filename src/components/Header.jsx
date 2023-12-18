import React from "react";
import zapier from "../assets/logos/zapier.svg";
import spotify from "../assets/logos/spotify.svg";
import slack from "../assets/logos/slack.svg";
import amazon from "../assets/logos/amazon.svg";
import zoom from "../assets/logos/zoom.svg";
import adobe from "../assets/logos/adobe.svg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { textVariant } from "../motionVariants";

const Header = () => {
  const logos = [zapier, spotify, zoom, slack, amazon, adobe];

  return (
    <div className="bg-gradient-special2">
      <div className="bg-white/80">
        <Navbar />
        <div className="flex justify-center mt-11 flex-col items-center px-20 sm:px-4">
          <motion.h1
            variants={textVariant(0)}
            initial="hidden"
            animate="visible"
            className="text-gray-800 text-7xl sm:text-5xl font-boldest text-center px-20 sm:px-0"
          >
            Elevate Your Presence with Seamless Design and Innovation.
          </motion.h1>
          <motion.p
            variants={textVariant(0)}
            initial="hidden"
            animate="visible"
            className="text-gray-600 mt-5 text-xl sm:text-base text-center"
          >
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </motion.p>
          <a
            href="#pricing"
            className="text-lg rounded-lg border text-gray-50 bg-gray-800 py-3 px-8 mt-8 font-semibold transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl"
          >
            View Pricing
          </a>

          <p className="text-gray-400 mt-20 text-sm">
            Trusted By 250+ Companies
          </p>
          <div className="flex flex-wrap sm:flex-col justify-center mt-2 items-center gap-2">
            {logos.map((logo, index) => (
              <div key={index} className="px-10 py-4">
                <img src={logo} alt="logo" key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
