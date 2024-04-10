import React from "react";

interface MyComponentProps {
  src: string;
  description: string;
  description1?: string;
  description2?: string;
  classStyle?: string;
}

const CardQueHacemos: React.FC<MyComponentProps> = ({
  src,
  description,
  description1,
  description2,
  classStyle,
}) => (
  <div
    className={`flex flex-col justify-evenly xl:justify-center w-[328px] h-auto xl:p-[7px]  rounded-[5px] gap-[15px] md:m-0 md:bg-transparent md:flex md:flex-row md:w-full xl:w-[1200px] items-center shadow-card-shadow ${classStyle}`}
  >
    <img
      className="w-[314px] h-[228px] mx-auto md:mx-0 rounded-md shadow md:w-[337px] xl:w-[460px] xl:h-[330px]"
      src={src}
    />
    <div className="hidden xl:block xl:min-w-[64px]"></div>
    <div className="w-[314px] md:w-[358px] mx-auto mb-2 md:mx-0 xl:w-[700px]">
      <p className="text-gray-900 text-left  leading-tight xl:text-[25px]">
        {description} <br />
        {description1}
        <br />
        {description2}
      </p>
    </div>
  </div>
);

export default CardQueHacemos;
