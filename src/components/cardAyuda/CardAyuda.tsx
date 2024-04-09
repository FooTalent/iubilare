interface Card {
  number: string;
  title: string;
  desc: string;
  color: string;
}

const CardAyuda = ({ number, title, desc, color }: Card) => {
  return (
    <div className="flex   rounded-md bg-slate-200  mb-[36px]">
      {color === "green" ? (
        <>
          <div className="bg-slate-500 w-[5.125rem] h-[12.5rem]   place-content-center font-bold rounded-l-md">
            <p className="text-white text-[30px] ">{number}</p>
          </div>
          <div className=" w-[27.75rem] h-[12.5rem]  grid text-left ml-6 mr-4 md:mr-6 xl:mr-14">
            <h4 className="mt-[18px] font-bold text-[20px] xl:text-[25px]">
              {title}
            </h4>
            <p className="text-[16px] leading-5 md:text-[13px]  xl:text-[16px]">
              {desc}
            </p>
          </div>
        </>
      ) : null}

      {color === "blue" ? (
        <>
          <div className=" w-[22.438rem] h-[14.5rem] grid text-left  ml-6 mr-4 md:mr-6 xl:mr-14">
            <h4 className="mt-[18px] font-bold text-[20px] xl:text-[25px]">
              {title}
            </h4>
            <p className="text-[16px] leading-5 md:text-[13px]  xl:text-[16px]">
              {desc}
            </p>
          </div>
          <div className="bg-indigo-400 w-[5.125rem] h-[14.5rem] place-content-center font-bold rounded-r-md">
            <p className="text-white text-[30px]">{number}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default CardAyuda;
