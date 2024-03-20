import { StarSharp } from "@mui/icons-material";
import React from "react";
interface CardProps {
  name: string;
  age: string;
  city: string;
  description: string;
  imageUrl: string;
  numberStars?: number;

  cardClass?: string;
  cardElementsClass?: string;
  cardTextImageWrapper?: string;
  cardImageWrapper?: string;
  cardImageClass?: string;
  cardTextWrapper?: string;

  className?: string;
  textColor?: string;
  textDescription?: string;
}

const Card: React.FC<CardProps> = ({ name, age, city, description, imageUrl, numberStars, cardClass, cardElementsClass, cardTextImageWrapper, cardImageWrapper, cardImageClass, cardTextWrapper, className, textColor, textDescription }) => {
  const starsArray = Array.from({ length: numberStars || 0 });
  //
  return (
    <div className={`${cardClass} ${className}`} >
      <div className={`${cardElementsClass}`}> 
        <div className={`${cardTextImageWrapper}`}>
          <div className={`${cardImageWrapper}`}>
            <img className={`${cardImageClass}`} src={imageUrl} alt="" />
          </div>
          <div>
            <p className={`md:text-lg font-medium ${textColor}`}>{name}</p>
            <p className={`text-xs text-[#747DD6] ${textColor}`}>{age}</p>
            <p className={`text-xs text-[#747DD6] ${textColor}`}>{city}</p>
          </div>
        </div>
        <div className={`${cardTextWrapper}`}>
          <p className={`${textDescription} `}>{description}</p>
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