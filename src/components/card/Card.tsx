import React from "react";

interface CardProps {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, age, description, imageUrl }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#e8e8e8] w-[208px] h-[233.92px] pt-[18px] pb-[20px] px-[8px] rounded-md">
      <div className="flex flex-col justify-center items-center w-[192px] h-[171.73px] overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[95px] h-[84.73px] mb-[13px]">
          <div className="w-[48.73px] h-[48.73px] mb-[10px]">
            <img className="rounded-full" src={imageUrl} alt="" />
          </div>
          <div>
            <p className="text-xs">{name}</p>
            <p className="text-xs">{age}</p>
          </div>
        </div>
        <div className="w-[192px] h-[71px]">
          <p className="text-xs line-clamp-4">{description}</p>
        </div>
      </div>
      <div>stars</div>
    </div>
  );
};

export default Card;
