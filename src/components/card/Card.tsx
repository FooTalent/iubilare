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
    <div className="flex flex-col justify-center items-center bg-[#e8e8e8] w-[208px] h-[233.92px] pt-[13px] pb-[13px] px-[8px] rounded-md md:h-[415px] md:bg-transparent md:w-[163px] 2xl:min-w-[338.94px] 2xl:min-h[410.83px] 2xl:bg-white 2xl:rounded-lg">
      <div className="flex flex-col justify-center items-center w-[192px] h-full md:h-[360px] overflow-hidden"> 
        <div className="flex flex-col justify-center items-center w-[95px] h-[84.73px] mb-[13px] md:h-[200px]">
          <div className="w-[48.73px] h-[48.73px] mb-[10px]  md:w-[163px] md:h-[163px]">
            <img className="rounded-full" src={imageUrl} alt="" />
          </div>
          <div>
            <p className="text-xs md:text-lg">{name}</p>
            <p className="text-xs">{age}</p>
            <p className="hidden md:block">{city}</p>
          </div>
        </div>

        <div className="w-[192px] h-auto md:mt-[24px]">
          <p className="text-xs whitespace-normal">{description}</p>
        </div>
      </div>
      <div className="md:hidden">
      {starsArray.map((_, index) => (
        <StarSharp key={index} />
      ))}
      </div>
    </div>
  );
};

export default Card;