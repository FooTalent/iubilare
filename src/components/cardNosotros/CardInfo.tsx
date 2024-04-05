import React from "react";

interface CardInfoProps {
  url: string;
  info: string;
  classOptions?: string;
  classTitle?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  info,
  url,
  classOptions,
  classTitle,
}) => {
  return (
    <div
      className={`border border-inherit rounded shadow-[0_15px_10px_-13px_rgba(0,0,0,0.3)] flex flex-col md:flex-row md:gap-5 md:w-full items-center xl:gap-[65px] md:border-none md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] xl:border-none  ${classOptions}`}
    >
      <img
        src={url}
        alt=""
        className="h-[22.75rem] w-[19.75rem] md:h-[273px] md:w-1/2 lg:h-[472px]"
      />
      <div className="w-[19.75rem] my-2 md:my-0 md:h-[273px] md:w-1/2 lg:h-[472px]">
        <h1 className="hidden font-semibold md:text-[31px] lg:text-[49px] text-left leading-10 md:block md:mb-1 lg:mb-5">
          {classTitle}
        </h1>
        <p className="text-left w-[18.6rem] md:w-auto md:text-[16px] lg:text-[25px] text-pretty">
          {info}{" "}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
