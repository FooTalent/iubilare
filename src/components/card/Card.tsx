import { StarSharp } from "@mui/icons-material";
import React from "react";
interface CardProps {
  name: string;
  age: string;
  city: string;
  description: string;
  imageUrl: string;
  numberStars?: number;
}

const Card: React.FC<CardProps> = ({ name, age, city, description, imageUrl, numberStars }) => {
  const starsArray = Array.from({ length: numberStars || 0 });
  return (
    <div className="flex flex-col justify-between items-center bg-transparent scroll-none shadow-light-top-heavy-bottom-light-sides w-[169px] h-[223px] pt-[8px] pb-[8px] px-[8px] rounded-md md:shadow-none md:w-[172px] md:h-[230px] md:bg-white  2xl:min-w-[338.94px] 2xl:h-[410.83px] 2xl:bg-white 2xl:rounded-lg">
      <div className="flex flex-col justify-center items-center w-[192px] h-full md:h-[360px] overflow-hidden"> 
        <div className="flex flex-col justify-center items-center w-[95px] mb-[13px] md:h-[100px] ">
          <div className="w-[60.73px] h-[60.73px] mb-[10px] md:mb-3 md:w-[78px] md:h-[65px]  2xl:w-[163px] 2xl:h-[163px]">
            <img className="rounded-full" src={imageUrl} alt="" />
          </div>
          <div>
            <p className="text-base text-[#747DD6] md:text-lg">{name}</p>
            <p className="text-xs text-[#747DD6]">{age}</p>
            <p className="text-xs text-[#747DD6]">{city}</p>
          </div>
        </div>

        <div className=" w-[147px] h-auto md:mt-[5px]">
          <p className="text-[0.6rem] truncate leading-3 font-light italic whitespace-normal">{description}</p>
        </div>
      </div>
      <div className="hidden">
      {starsArray.map((_, index) => (
        <StarSharp key={index} />
      ))}
      </div>
    </div>
  );
};

export default Card;