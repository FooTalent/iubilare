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
    className={`flex flex-col justify-center  w-[328px] h-auto p-[7px] bg-zinc-300 rounded-[5px] gap-[15px] md:m-0 md:bg-transparent md:flex md:flex-row md:w-[688px] xl:w-[1200px] items-start ${classStyle}`}
  >
    <img
      className="w-[314px] h-[228px] rounded-md shadow md:w-[250px] xl:w-[460px] xl:h-[330px]"
      src={src}
    />
    <div className="hidden xl:block xl:min-w-[64px]"></div>
    <div className="w-[314px] xl:w-[700px]">
      {/* <p className="text-gray-900 text-sm text-left font-light leading-none">
        <br />
      </p> */}
      <p className="text-gray-900 text-left font-medium leading-tight xl:text-[25px]">
        {description}
      </p>
    </div>
  </div>
);

export default CardQueHacemos;
