import React from "react";

interface CardProps {
  name: string;
  age: string;
  city: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, age, city, description, imageUrl }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#e8e8e8] w-[208px] h-[233.92px] pt-[18px] pb-[20px] px-[8px] rounded-md md:h-[364px] md:bg-transparent md:w-[163px]">
      <div className="flex flex-col justify-center items-center w-[192px] h-[171.73px] md:h-[298px] overflow-hidden">

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
          <p className="text-xs line-clamp-4">{description}</p>
        </div>
      </div>
      <div>stars</div>
    </div>
  );
};

export default Card;
