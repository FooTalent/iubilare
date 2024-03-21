import { StarSharp } from "@mui/icons-material";
import React from "react";
interface CardProps {
  current: number;
  index: number;
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

  textTitle?: string,
  textAge?: string,
  textCity?: string,
  textSemi?: string,
  spanClassFirst?: string,
  spanClassEnd?: string,

  icon?: string,
  className?: string;
  textColor?: string;
  textDescription?: string;
}

const Card: React.FC<CardProps> = ({ index, current, name, age, city, description, imageUrl, numberStars, cardClass, cardElementsClass, cardTextImageWrapper, cardImageWrapper, cardImageClass, cardTextWrapper, 
  textTitle,
  textAge,
  textCity,
  textSemi,
  spanClassFirst,
  spanClassEnd,
  icon,
  className, textColor, textDescription }) => {
  const starsArray = Array.from({ length: numberStars || 0 });
  //
  return (
<div className={`${cardClass} ${className} ${index === current ? 'opacity-1' : 'opacity-0'} transition-opacity ease-in-out delay-150 duration-1000`} > 
      <div className={`${cardElementsClass}`}> 
        <div className={`${cardTextImageWrapper}`}>
          <div className={`${cardImageWrapper}`}>
            <img className={`${cardImageClass}`} src={imageUrl} alt="" />
          </div>
          <div>
            <p className={`${textTitle} ${textColor}`}>{name}</p>
            <p className={`${textAge} ${textColor}`}>{age}</p>
            <div className="flex flex-row justify-center items-center">
              <span className={`hidden ${icon}`}><img src="./tramites/location.png" alt="" /></span>
              <p className={`${textCity} ${textColor}`}>{city}</p>
            </div>
          </div>
        </div>

        <div className={`${cardTextWrapper}`}>
          <div className={`${spanClassFirst}`}>
            <img className={`hidden ${textSemi}`} src="./tramites/comOpen.png" />
          </div>
          <p className={`${textDescription} `}>{description}</p>
          <div className={`${spanClassEnd}`}>
            <img className={`hidden ${textSemi}`} src="./tramites/comClose.png" />
          </div>
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