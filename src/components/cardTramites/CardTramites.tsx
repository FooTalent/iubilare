import React, { useState } from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

interface CardTramitesProps {
  title: string;
  subtitle?: string;
  description: string;
  items: string[];
}

const CardTramites: React.FC<CardTramitesProps> = ({
  title,
  description,
  subtitle,
  items,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col my-2 rounded justify-between items-center shadow-card-shadow ${isExpanded ? 'bg-747DD6 text-white' : ''}`}>
      <div className="flex flex-row justify align-middle py-5 w-full md:w-[687px] md:h-[146px] 2xl:w-full 2xl:px-[53px]">
        <div className="flex w-2/3 items-center">
          <div className="md:w-[213px] md:h-[62px]">
            <h2 className="ml-2 pl-2 text-left font-semibold text-base md:text-[20px]">{title}</h2>
          </div>
        </div>
        <div className="flex w-1/3 items-center 2xl:justify-end">
          <button onClick={() => setIsExpanded(!isExpanded)} className={`${isExpanded ? 'md:w-[165px] bg-white text-747DD6' : 'bg-747DD6 text-white'} font-semibold flex flex-row py-0.5 px-[4px] items-center text-sm rounded shadow-card-shadow focus:outline-none md:w-[151px] md:h-[37px] md:pl-[22px] md:py-[6px] md:text-[20px]`}>{isExpanded ? 'Ver menos' : 'Ver más'}
            <KeyboardArrowDownOutlined/>
          </button>
        </div>
      </div>
      {isExpanded && 
        <div className="flex flex-col justify-start px-5 py-5">
          <p className="ml-2 pl-2 text-left font-semibold text-base 2xl:text-lg">{description}</p>
          {subtitle && <p className="ml-2 pl-2 text-left font-semibold text-base 2xl:text-lg">{subtitle}</p>} {/* Renderiza el párrafo si se proporciona la propiedad 'subtitle' */}
          <ul>
            {items.map((item, index) => (
              <li key={index} className="ml-2 pl-2 text-left text-base 2xl:text-lg">{item}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default CardTramites;
