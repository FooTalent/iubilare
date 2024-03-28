import React from "react";

interface CardNosotrosProps {
  name: string;
  status: string;
  image: string;
  className?: string;
  textClassName?: string;
  textClassTitle?: string;
}

const CardNosotros: React.FC<CardNosotrosProps> = ({
  name,
  status,
  image,
  className,
  textClassName,
  textClassTitle,
}) => {
  const combinedClassName = `w-[160px] h-[200px] rounded-md xl:w-[16.688rem] xl:h-[22.438rem] flex flex-col justify-center items-center  ${className}`;
  const combinedTextClassName = `${textClassName}`;

  return (
    <div className={combinedClassName}>
      <img
        src={image}
        alt=""
        className="w-[117px] h-[117px] xl:w-[210px] xl:h-[210px] my-2 md:mb-5 lg:mb-9"
      />
      <p
        className={`${textClassTitle} font-semibold text-[16px] lg:text-[25px]`}
      >
        {name}
      </p>
      <p
        className={`${combinedTextClassName} text-[13px] h-[60px] lg:text-[20px]`}
      >
        {status}
      </p>
    </div>
  );
};

export default CardNosotros;
