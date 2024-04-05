import React from "react";

interface MyComponentProps {
  src: string;
  description: string;
  classStyle?: string;
}

const CardQueHacemos: React.FC<MyComponentProps> = ({
  src,
  description,
  classStyle,
}) => (
  <div
    className={`flex flex-col justify-between xl:justify-center w-[328px] h-auto xl:p-[7px] bg-zinc-300 rounded-[5px] gap-[15px] md:m-0 md:bg-transparent md:flex md:flex-row md:w-full xl:w-[1200px] items-start ${classStyle}`}
  >
    <img
      className="w-[314px] h-[228px] mx-auto md:mx-0 rounded-md shadow md:w-[337px] xl:w-[460px] xl:h-[330px]"
      src={src}
    />
    <div className="hidden xl:block xl:min-w-[64px]"></div>
    <div className="w-[314px] mx-auto mb-2 md:mx-0 xl:w-[700px]">
      <p className="text-gray-900 text-left  leading-tight xl:text-[25px]">
        {description}
      </p>
    </div>
  </div>
);

export default CardQueHacemos;
