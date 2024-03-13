import React from "react";

interface CardInfoProps {
    url: string;
    info: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ info, url }) => {
  return (
    <div>
        <img src={url} alt="" />
      <p>{info}</p>
    </div>
  );
};

export default CardInfo;