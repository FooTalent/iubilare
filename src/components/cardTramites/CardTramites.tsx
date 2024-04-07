import React, { useState } from "react";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

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
    /* ------------------------------agregando padding */
    <div
      className={`flex flex-col my-3 px-5 rounded justify-between items-center shadow-card-shadow transition-all duration-500 ease-in-out w-[1120px] ${
        isExpanded ? "bg-747DD6 text-white" : ""
      }`}
    >
      <div className="flex flex-row items-center justify-between py-5 w-full md:w-[687px] md:h-[146px] xl:w-full xl:px-[53px]">
        <div className="flex w-2/3 justify-start items-center">
          <div className="md:w-[300px] flex items-center md:h-[62px]">
            <h2 className="text-left font-semibold text-base text-[.8rem] md:text-[28px]">
              {title}
            </h2>
          </div>
        </div>
        <div className="flex w-32 md:w-1/3 items-center xl:justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${
              isExpanded
                ? "w-full md:w-[165px] bg-white text-747DD6"
                : "bg-747DD6 text-white"
            } justify-center font-semibold flex flex-row py-0.5 px-[4px] items-center text-sm rounded shadow-card-shadow focus:outline-none md:w-[151px] md:h-[37px] md:pl-[22px] md:py-[6px] md:text-[20px]`}
          >
            {isExpanded ? (
              <>
                Ver menos <KeyboardArrowUpOutlined />
              </>
            ) : (
              <>
                Ver más <KeyboardArrowDownOutlined />
              </>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col justify-start transition-all delay-100 duration-700 ease-in-out ${
          isExpanded ? "h-auto " : "h-0 overflow-hidden"
        }`}
      >
        <p className="text-left font-semibold text-base 2xl:text-lg text-white my-5">
          {description}
        </p>
        {subtitle && (
          <p className="mx-5 my-5 text-left font-semibold text-base xl:text-lg text-white">
            {subtitle}
          </p>
        )}
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="my-5 text-left text-base xl:text-lg text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardTramites;
