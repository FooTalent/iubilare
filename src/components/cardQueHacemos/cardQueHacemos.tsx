import React from 'react';

interface MyComponentProps {
  src: string;
  title: string;
  description: string;
  classStyle?: string;
}

const CardQueHacemos: React.FC<MyComponentProps> = ({ src, title, description, classStyle }) => (
  <div className= {`flex flex-col justify-center items-center w-[328px] h-auto p-[7px] bg-zinc-300 rounded-[5px] gap-[15px] md:m-0 md:bg-transparent md:flex md:flex-row md:w-[688px] 2xl:w-[1200px] ${classStyle}`}>
    <img className="w-[314px] h-[228px] rounded-md shadow md:w-[250px] 2xl:w-[460px] 2xl:h-[330px]" src={src} />
    <div className='hidden 2xl:block 2xl:min-w-[64px]'></div>
    <div className="w-[314px] 2xl:w-[700px]">
        <h3 className="text-indigo-400 text-xl text-left font-semibold leading-normal md:text-black 2xl:text-[24px]">{title}<br/></h3>
        <p className="text-gray-900 text-sm text-left font-light leading-none"><br/></p>
        <p className="text-gray-900 text-left font-medium leading-tight  2xl:text-[20px]">{description}</p>
    </div>
  </div>
);

export default CardQueHacemos;
