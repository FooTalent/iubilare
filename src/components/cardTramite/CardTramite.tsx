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
      className={`md:w-[13.438rem] lg:w-[22.563rem] flex justify-center h-32 font-["source sans pro"] shadow-card-shadow  ${borde}`}
    >
      <div className="lg:w-[24.563rem] flex flex-row-reverse items-center justify-between md:justify-center">
        <img
          className="w-[79px] h-[79px] md:w-[49px] md:h-[49px] xl:w-[87px] xl:h-[87px]"
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
