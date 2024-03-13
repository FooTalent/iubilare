import React from "react";

interface CardInfoProps {
    url: string;
    info: string;
    classOptions?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ info, url, classOptions }) => {

  return (
    <div className={ `w-[328px] border border-inherit rounded p-[7px] shadow-avatar-shadow md:flex md:flex-row md:gap-5 md:w-full ${classOptions}` }>
        <img src={url} alt="" className=" md:w-[309px] md:h-[248px]" />
        <p className="text-justify ">{info} </p>
    </div>
  );
};

export default CardInfo;