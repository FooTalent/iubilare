import React from "react";

interface CardNosotrosProps {
  name: string;
  status: string;
  image: string;
  className?: string;
  textClassName?: string;
  textClassTitle?: string;
}

const CardNosotros: React.FC<CardNosotrosProps> = ({ name, status, image, className, textClassName, textClassTitle }) => {
  const combinedClassName = `w-[160px] h-[200px] rounded-md pt-[16px] px-[16px] 2xl:w-[308px] 2xl:h-[376px] 2xl:px-[40px] ${className}`;
  const combinedTextClassName = `${textClassName}`;

  return (
    <div className={combinedClassName}>
      <img src={image} alt="" className="2xl:w-[227px]" />
      <p className={`${combinedTextClassName} ${textClassTitle} text-[13px] 2xl:text-[24px]`}>{name}</p>
      <p className={`${combinedTextClassName} text-[11px] 2xl:text-[18px]`}>{status}</p>
    </div>
  );
};

export default CardNosotros;