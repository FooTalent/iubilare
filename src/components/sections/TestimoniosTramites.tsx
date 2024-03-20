import { useState } from "react";
import Card from "../card/Card";



export default function TestimoniosTramites () {

    const [current, setCurrent] = useState(0);

    const data = [
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
      ];

    return (
        <>
                {/* Encabezado Fondo Blando */}
                <div className="flex justify-center">
                <div className="hidden md:block md:min-h-[26px]"></div>
                    <h2 className="text-black text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
                        Testimonios
                    </h2>
                </div>
                <div className="flex justify-center">
                    <h3 className="text-black text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] ">
                        Ellos son algunos de nuestros clientes
                    </h3>
                </div>

                {/* Separador */}
                <div className="min-h-[46px] md:min-h-[35px] 2xl:min-h-[55px]"></div>

                {/* Contenedor de Cards */}
                <div className="overflow-auto w-full h-full 2xl:flex 2xl:justify-center md:bg-background-violet md:overflow-hidden md:relative ">
                {/* Separador */}
                <div className="hidden md:block md:min-h-[26px] 2xl:min-h-[56px]"></div>

                <div className="flex whitespace-nowrap gap-5 md:gap-0 md:justify-start"
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                
                >

                    {data.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        age={card.age}
                        city={card.city}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        numberStars={card.numberStars}
                        cardClass="flex flex-col justify-between items-center scroll-none shadow-light-top-heavy-bottom-light-sides w-[169px] h-[223px] pt-[8px] pb-[8px] px-[8px] rounded-md md:rounded-none md:h-[368px] md:shadow-none md:border-0 md:border-transparent md:shadow-[0px_0px_0px] md:min-w-full md:h-[230px] 2xl:w-full 2xl:min-w-full"
                        cardElementsClass="flex flex-col justify-center items-center w-[192px] md:w-full md:min-h-full md:flex-row overflow-hidden"
                            cardTextImageWrapper="flex flex-col justify-center items-center w-[95px] mb-[13px] md:mb-0 md:w-1/3 md:h-full"
                                cardImageWrapper="w-[60.73px] h-[60.73px] mb-[10px] md:mb-0 md:mb-3 md:w-[141px] md:h-[141px] md:mb-[32px]"
                                cardImageClass="rounded-full"

                            cardTextWrapper="w-[147px] h-auto md:flex md:h-[195px] md:items-center md:justify-center md:w-2/3 md:h-full "
                              textTitle="md:text-lg font-medium md:text-[24px] md:font-semibold md:leading-8 md:mb-[12px]"
                              textAge="text-xs text-[#747DD6] md:text-[20px] md:mb-[12px]"
                              textCity="text-xs text-[#747DD6] md:text-[20px]"
                              textSemi="md:block md:font-semibold md:text-white md:text-[100px] md:italic md:font-serif md:leading-[100px]"
                              spanClassFirst="md:h-full flex flex-col justify-start"
                              spanClassEnd="md:h-full flex flex-col justify-end"
                              icon="md:block mr-[8px]"
                        className="bg-background-violet"
                        textColor="text-white"
                        textDescription="text-[0.6rem] truncate leading-3 font-light italic whitespace-normal text-white md:w-[285px] md:not-italic md:leading-[1.5rem] md:text-[16px] text-background-white"
                    />
                    ))}

                </div>

                </div>
                <div className="hidden md:flex justify-center md:bg-background-violet">
                    <div className="flex flex-row w-[113px] h-[21px] justify-around">
                    {
                        data.map((_, i) => (
                            <div key={`circle-${i}`} onClick={() => {setCurrent(i)}} className={`hiddenmd:block rounded-full w-[11px] h-[11px] cursor-pointer ${i === current ? "bg-white" : "bg-gray-500"}`}></div>
                        )
                        )
                    }    
                    </div>
                    {/* Separador */}
                    <div className="hidden md:block md:min-h-[26px] 2xl:min-h-[56px]"></div>
                  </div>

        </>
    )


};