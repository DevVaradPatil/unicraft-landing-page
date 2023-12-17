import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from "../assets/images/r1.png";
import r2 from "../assets/images/r2.png";
import r3 from "../assets/images/r3.png";
import SliderCard from "./Cards/SliderCard";

const Recents = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10%", // Adjust this value to control the space between cards
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    easing: "ease-in-out",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          centerPadding: "10%", // Adjust this value for the desired card width
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex mt-20 mb-8 flex-col w-full h-full">
      <Slider {...settings}>
        <SliderCard imgUrl={r1} />
        <SliderCard imgUrl={r2} />
        <SliderCard imgUrl={r3} />
        <SliderCard imgUrl={r1} />
        <SliderCard imgUrl={r2} />
        <SliderCard imgUrl={r3} />
      </Slider>
      <div className="w-full mt-10 flex justify-center items-center">
      <button className="text-lg rounded-lg border text-gray-600 border-gray-600 py-4 px-8 font-semibold transition-all duration-300 hover:bg-gray-700 hover:text-gray-100">
        View recent work
      </button>
      </div>
    </div>
  );
};

export default Recents;
