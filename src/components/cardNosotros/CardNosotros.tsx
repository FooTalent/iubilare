import React from "react";

interface CardNosotrosProps {
  name: string;
  status: string;
  image: string;
  className?: string;
  textClassName?: string; // Nueva propiedad para las clases de los elementos <p>
}

const CardNosotros: React.FC<CardNosotrosProps> = ({ name, status, image, className, textClassName }) => {
  const combinedClassName = `w-[160px] h-[200px] rounded-md shadow-2xl pt-[16px] px-[16px] ${className}`;
  const combinedTextClassName = `${textClassName}`;

  return (
    <div className={combinedClassName}>
      <img src={image} alt="" />
      <p className={`${combinedTextClassName} text-[13px]`}>{name}</p>
      <p className={`${combinedTextClassName} text-[11px]`}>{status}</p>
    </div>
  );
};

export default CardNosotros;