import { useEffect, useState } from "react";
import Card from "../card/Card";

export default function TestimoniosTramites() {
  const [current, setCurrent] = useState(0);
  const data = [
    {
      id: 1,
      name: "Sandra Ambrosio",
      age: "52 años",
      city: "Arequito, Santa Fe",
      description:
        "Me contacté con el estudio en 2019. Gracias a ellos, finalmente pude actualizar la pensión que percibo por fallecimiento, la cual había ido perdiendo valor con los años. El equipo analizó mi caso y me guiaron a través del proceso legal con claridad y apoyo constante. Junto a un escribano de confianza iniciamos el juicio y gracias al estudio hoy mi pensión está completamente actualizada. Los recomiendo sin dudarlo; me demostraron ser profesionales comprometidos y confiables.",
      imageUrl: "./testimonios/sandra.svg",
      numberStars: 5,
    },
    {
      id: 2,
      name: "Sonia Raquel Bellos",
      age: "53 años",
      city: "Corral de Bustos, Córdoba",
      description:
        "Hace veintidós años mi esposo se jubiló y yo quedé con una pensión ínfima. Recientemente, el estudio me contactó ofreciéndome la posibilidad de reclamar una jubilación mínima. Al principio, desconfié, pero decidí probar. Desde el inicio, me pidieron paciencia, ya que los trámites son largos. Hace unos meses, el doctor Pavlovsky me informó que podía percibir mi pensión mínima. Les digo que confíen, estoy agradecida y sorprendida de haber logrado algo que pensé imposible. ",
      imageUrl: "./testimonios/sonia.svg",
      numberStars: 4,
    },
    {
      id: 3,
      name: "Mónica Vicario",
      age: "59 años",
      city: "Hurlingam, Buenos Aires",
      description:
        "Al principio, me costó confiar. Cuando me dijeron que iba a cobrar mucho más, no lo creía, pero cuando sucedió, fue una felicidad inmensa. Son excelentes profesionales y estoy muy contenta.",
      imageUrl: "./testimonios/monica.svg",
      numberStars: 5,
    },
    {
      id: 3,
      name: "Andrea Viviana Duarte",
      age: "52 años",
      city: "Mariano Acosta, Buenos Aires",
      description:
        "Estuve cobrando por años una Renta Vitalicia que era muy baja, no me alcanzaba ni para dos días. Gracias al estudio Iubilare, que me contactó pude iniciar un juicio contra Anses y así logré cobrar lo que merezco. El proceso fue largo, pero valió la pena. Ahora estoy más tranquila y al fin se hizo justicia. ¡Muchas gracias! ¡Recomiendo a estos profesionales!",
      imageUrl: "./testimonios/andrea.svg",
      numberStars: 5,
    },
  ];

  const cambiarCardAutomaticamente = () => {
    const siguienteCard = (current + 1) % data.length;
    setCurrent(siguienteCard);
  };

  useEffect(() => {
    const intervalId = setInterval(cambiarCardAutomaticamente, 5000);
    return () => clearInterval(intervalId);
  }, [current]); // Solo se ejecutará el useEffect cuando 'current' cambie

  return (
    <>
      {/* Contenedor de Cards */}
      <div className="flex flex-col justify-center mt-12 mb-7">
        <h2 className="text-black text-xl font-semibold md:text-[32px] xl:text-[49px]  ">
          Testimonios
        </h2>
        <h3 className="text-black text-xl xl:font-semibold md:text-[21px] xl:text-[31px] ">
          Ellos son algunos de nuestros clientes
        </h3>
      </div>
      <div className="flex justify-center"></div>
      <div className=" min-w-full h-full 2xl:flex bg-background-violet overflow-hidden relative ">
        {/* Mapeo para vista Tablet y Desktop */}
        <div
          className="flex whitespace-nowrap gap-0  margin-auto"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {data.map((card, index) => (
            <Card
              current={current}
              index={index}
              key={index}
              name={card.name}
              age={card.age}
              city={card.city}
              description={card.description}
              imageUrl={card.imageUrl}
              numberStars={card.numberStars}
              cardClass="flex flex-col justify-between items-center scroll-none   h-[31.5rem] pt-[8px]  px-[8px] rounded-md rounded-none md:h-[368px]  border-0 border-transparent  min-w-full h-[230px] xl:w-full xl:min-w-full"
              cardElementsClass="flex flex-col justify-center items-center w-[192px] w-full min-h-full md:flex-row overflow-hidden"
              cardTextImageWrapper="flex flex-col justify-center items-center   mb-0 w-[18.688rem] md:h-full"
              cardImageWrapper="w-[5rem] h-[5rem]  md:mb-0 md:mb-3 md:w-[141px] md:h-[141px]"
              cardImageClass="rounded-full "
              cardTextWrapper="w-[299px] h-auto  flex md:h-[195px] items-center md:justify-center md:w-2/3 overflow-hidden"
              textTitle="text-lg font-medium text-[16px] md:text-[24px] font-semibold leading-8 "
              textAge="text-xs text-[#747DD6] text-[14px] md:text-[20px] "
              textCity="text-xs text-[#747DD6] text-[14px] md:text-[20px]"
              textSemi="block font-semibold text-white text-[100px] italic font-serif leading-[100px]"
              spanClassFirst="h-full flex flex-col justify-start"
              spanClassEnd="h-full flex flex-col justify-end"
              icon="block w-[0.521rem] h-[0.729rem] mr-[8px]"
              className="bg-background-violet"
              textColor="text-white"
              textDescription="text-[0.875rem] truncate leading-3 font-light italic whitespace-normal text-white w-[41.938rem] not-italic leading-[1.5rem] text-background-white"
            />
          ))}
        </div>

        <div className="flex justify-center bg-background-violet">
          <div className="flex flex-row w-[113px] h-[21px] justify-around">
            {data.map((_, i) => (
              <div
                key={`circle-${i}`}
                onClick={() => {
                  setCurrent(i);
                }}
                className={`block rounded-full w-[11px] h-[11px] cursor-pointer ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
