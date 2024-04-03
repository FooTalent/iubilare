interface Card {
  title: string;
  img: string;
  style: string;
}

const CardTramite = ({ title, img, style }: Card) => {
  return (
    <div className='w-[28.438rem] flex justify-center h-32 font-["source sans pro"] shadow-card-shadow '>
      <div className="w-[24.563rem] flex flex-row-reverse items-center justify-between">
        <img
          className="w-[110px] h-[107px] md:w-[83px] md:h-[82px] xl:w-[87px] xl:h-[87px]"
          src={img}
          alt={title}
        />
        <p className={` ${style}`}>{title}</p>
      </div>
    </div>
  );
};

export default CardTramite;
