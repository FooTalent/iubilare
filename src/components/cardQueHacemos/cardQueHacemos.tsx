import React from 'react';

interface MyComponentProps {
  src: string;
  title: string;
  description: string;
}

const CardQueHacemos: React.FC<MyComponentProps> = ({ src, title, description }) => (
  <div className="w-[328px] h-[474px] p-2 bg-zinc-300 rounded-[5px] flex-col justify-center items-center gap-[15px] inline-flex mt-5">
    <img className="w-[314px] h-[228px] rounded-md shadow" src={src} />
    <div className="w-[314px]">
        <h3 className="text-indigo-400 text-xl text-left font-semibold leading-normal">{title}<br/></h3>
        <p className="text-gray-900 text-sm text-left font-light leading-none"><br/></p>
        <p className="text-gray-900 text-left font-medium leading-tight">{description}</p>
    </div>
  </div>
);

export default CardQueHacemos;
