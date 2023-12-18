import React from "react";
import logomark from "../assets/Logomark.svg";
import logotype from "../assets/Logotype.svg";
import avatar from "../assets/avatar.png";

const Quote = () => {
  return (
    <div className="w-full h-[568px] sm:h-full flex-col bg-gray-50 py-24 sm:py-5 px-24 sm:px-5 flex justify-center items-center text-center">
      <div className="flex items-center gap-3">
        <img src={logomark} alt="logo-mark" />
        <img src={logotype} alt="logo-type  " />
      </div>
      <h1 className="text-gray-800 font-bold text-5xl sm:text-3xl my-10">
        We’ve been with unicraft to kick start every new project and can’t
        imagine working without it.
      </h1>
      <img src={avatar} alt="avatar" className="w-16 h-16" />
      <p className="text-gray-900 font-medium text-lg mt-4">Candice Wu</p>
      <p className="text-gray-500 mt-1">Product Manager, Sisyphus</p>
    </div>
  );
};

export default Quote;
