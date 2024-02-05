import React from "react";


const Card = ({ img, h1, h2 }) => {
  return (
    
      <div className="rounded-[10px] p-[25px] bg-[white] shadow-2xl w-[49%] md:w-[100%] dark:bg-[#1b1b1b] dark:text-white rounded-[5px]">
        <img src={img} alt="" />
        <h1 className="text-[18px] font-[600] mt-[25px]">
          {h1}
        </h1>
        <h1 className="text-[14px] text-[grey]">
          {h2}
        </h1>
      </div>
  
  );
};
export default Card;
