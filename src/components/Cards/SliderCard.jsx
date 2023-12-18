import React from "react";

const SliderCard = ({ imgUrl }) => {
  return (
    <div className="w-[360px] h-[400px] sm:w-[300px] sm:h-[340px] shadow-md rounded-md flex justify-center items-center">
      <img src={imgUrl} alt="image" className="w-full h-full object-cover" />
    </div>
  );
};

export default SliderCard;
