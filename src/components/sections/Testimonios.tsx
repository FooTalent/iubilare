import Card from "../card/Card";

export default function Testimonios() {
  const cards = [
    {
      id: 1,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test01.png",
      numberStars: 5,
    },
    {
      id: 2,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test02.png",
      numberStars: 4,
    },
    {
      id: 3,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test03.png",
      numberStars: 5,
    },
    {
      id: 4,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test03.png",
      numberStars: 5,
    },
    {
      id: 5,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test03.png",
      numberStars: 5,
    },
    {
      id: 6,
      name: "Lorena Ontivero",
      age: "53 años",
      city: "San Juan",
      description:
        "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general",
      imageUrl: "./testimonios/test03.png",
      numberStars: 5,
    },
  ];

  const data = [...cards];

  return (
    <div className="md:bg-background-violet px-[16px] md:px-[40px] xl:px-[120px] md:pt-[54px]">
      <div>
        <h2 className="text-xl font-semibold md:text-[32px] xl:text-[49px] md:mb-8 md:text-white">
          Testimonios
        </h2>
      </div>
      <div className="hidden md:block">
        <h3 className="text-xl xl:font-semibold md:text-[21px] xl:text-[31px] md:text-white">
          Estos son algunos de nuestros clientes
        </h3>
      </div>
      <div className="min-h-[48px]"></div>

      <div className="overflow-hidden w-full h-full flex-nowrap xl:flex xl:justify-center my-6 mx-4 ">
        <div className="flex whitespace-nowrap gap-5 md:gap-[57px] md:justify-center py-5 animate-slide">
          {data.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              age={card.age}
              city={card.city}
              description={card.description}
              imageUrl={card.imageUrl}
              numberStars={card.numberStars}
              cardClass="flex flex-col justify-between items-center scroll-none shadow-light-top-heavy-bottom-light-sides w-[169px] h-[223px] pt-[8px] pb-[8px] px-[8px] rounded-md md:shadow-none md:w-[172px] md:h-[230px] md:bg-white  xl:min-w-[338.94px] xl:h-[410.83px] xl:bg-white xl:rounded-lg"
              cardElementsClass="flex flex-col justify-center items-center w-[192px] h-full md:h-[360px] overflow-hidden"
              cardTextImageWrapper="flex flex-col justify-center items-center w-[95px] mb-[13px] md:h-[100px] xl:h-full"
              cardImageWrapper="w-[60.73px] h-[60.73px] mb-[10px] md:mb-3 md:w-[78px] md:h-[65px]  xl:w-[163px] xl:h-[163px]"
              cardImageClass="rounded-full"
              cardTextWrapper="w-[147px] h-auto md:mt-[5px] xl:w-full"
              textTitle="md:text-lg font-medium"
              textAge="text-xs text-[#747DD6]"
              textCity="text-xs text-[#747DD6]"
              className="bg-transparent"
              textColor="text-base text-[#747DD6]"
              textDescription="text-[0.6rem] truncate leading-3 font-light italic whitespace-normal xl:text-xs"
            />
          ))}
        </div>
      </div>
      <div className="2xl:min-h-[63px]"></div>
    </div>
  );
}
