import React from 'react';

interface MyComponentProps {
  src: string;
  title: string;
  description: string;
  classStyle?: string;
}

const CardQueHacemos: React.FC<MyComponentProps> = ({ src, title, description, classStyle }) => (
  <div className= {`flex flex-col justify-center items-center w-[328px] h-auto p-[7px] bg-zinc-300 rounded-[5px] gap-[15px] md:m-0 md:bg-white md:flex md:flex-row md:w-[688px] ${classStyle}`}>
    <img className="w-[314px] h-[228px] rounded-md shadow md:w-[250px]" src={src} />
    <div className="w-[314px]">
        <h3 className="text-indigo-400 text-xl text-left font-semibold leading-normal md:text-black">{title}<br/></h3>
        <p className="text-gray-900 text-sm text-left font-light leading-none"><br/></p>
        <p className="text-gray-900 text-left font-medium leading-tight">{description}</p>
    </div>
  </div>
);

export default CardQueHacemos;
