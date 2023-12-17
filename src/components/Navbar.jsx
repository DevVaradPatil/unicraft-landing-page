import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-transparent pb-20 sm:pb-10 py-5 px-20 sm:px-4 justify-between items-center w-full">
      <div className="font-semibold text-2xl text-gray-700 transition-colors hover:text-gray-800 cursor-pointer">UniCraft</div>
      <div className="flex sm:hidden font-medium text-lg justify-center text-gray-600 items-center gap-10">
            <a href="#howItWorks" className="transition-colors hover:text-gray-500">How it works</a>
            <a href="#pricing" className="transition-colors hover:text-gray-500">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-gray-500">FAQ</a>
      </div>
      <a href="#contact" className="text-lg rounded-lg border text-gray-600 border-gray-600 py-2 px-4 font-semibold transition-all duration-300 hover:bg-gray-700 hover:text-gray-100">
        Contact Us
      </a>
    </div>
  );
};

export default Navbar;
