import React from "react";

interface CardInfoProps {
    url: string;
    info: string;
    classOptions?: string;
    classTitle?: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ info, url, classOptions, classTitle }) => {

  return (
    <div className={ `w-[328px]  p-[7px] border border-inherit rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex md:flex-row md:gap-5 md:w-full md:items-center 2xl:gap-[65px] 2xl:shadow-[0_35px_60px_-15px_rgba(255,255,255)] 2xl:border-none ${classOptions}` }>
        <img src={url} alt="" className=" md:min-w-[309px] md:h-[248px] 2xl:w-[482px] 2xl:h-[387px]" />
        <div>
          <h1 className="hidden font-semibold text-[25px] text-left leading-10 md:block">{classTitle}</h1>
          <p className="text-justify 2xl:text-[23px] 2xl:w-[751px]">{info} </p>
        </div>

    </div>
  );
};

export default CardInfo;