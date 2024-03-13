import React from "react";

interface CardInfoProps {
    url: string;
    info: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ info, url }) => {
  return (
    <div className="w-[328px] border border-inherit rounded p-[7px] shadow-avatar-shadow">
        <img src={url} alt="" />
      <p className="text-justify">{info}</p>
    </div>
  );
};

export default CardInfo;