interface Card {
  title: string;
  title2?: string;
  img: string;
  style: string;
  borde: string | undefined;
}

const CardTramite = ({ title, img, style, borde, title2 }: Card) => {
  return (
    <div
      className={`w-[28.438rem] flex justify-center h-32 font-["source sans pro"] shadow-card-shadow  ${borde}`}
    >
      <div className="w-[24.563rem] flex flex-row-reverse items-center justify-between">
        <img
          className="w-[110px] h-[107px] md:w-[83px] md:h-[82px] xl:w-[87px] xl:h-[87px]"
          src={img}
          alt={title}
        />
        <p className={` ${style}`}>
          {title} <br /> {title2}
        </p>
      </div>
    </div>
  );
};

export default CardTramite;
