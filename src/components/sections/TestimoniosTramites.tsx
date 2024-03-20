import Card from "../card/Card";



export default function TestimoniosTramites () {
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
                <div className="flex justify-center">
                    <h2 className="text-black text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
                        Testimonios
                    </h2>
                </div>
                <div className="flex justify-center">
                    <h3 className="text-black text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] ">
                        Ellos son algunos de nuestros clientes
                    </h3>
                </div>
                <div className="overflow-auto w-full h-full 2xl:flex 2xl:justify-center md:bg-background-violet">
                <div className="flex whitespace-nowrap gap-5 md:gap-[57px] md:justify-center md:overflow-hidden 2xl:gap-[150px] py-5">
                    {data.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        age={card.age}
                        city={card.city}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        numberStars={card.numberStars}
                        cardClass="flex flex-col justify-between items-center scroll-none shadow-light-top-heavy-bottom-light-sides w-[169px] h-[223px] pt-[8px] pb-[8px] px-[8px] rounded-md md:shadow-none md:w-[172px] md:h-[230px] md:bg-white  2xl:min-w-[338.94px] 2xl:h-[410.83px] 2xl:bg-white 2xl:rounded-lg"
                        cardElementsClass="flex flex-col justify-center items-center w-[192px] h-full md:h-[360px] overflow-hidden"
                        cardTextImageWrapper="flex flex-col justify-center items-center w-[95px] mb-[13px] md:h-[100px] 2xl:h-full"
                        cardImageWrapper="w-[60.73px] h-[60.73px] mb-[10px] md:mb-3 md:w-[78px] md:h-[65px]  2xl:w-[163px] 2xl:h-[163px]"
                        cardImageClass="rounded-full"
                        cardTextWrapper="w-[147px] h-auto md:mt-[5px] 2xl:w-full"

                        className="bg-background-violet"
                        textColor="text-white"
                        textDescription="text-[0.6rem] truncate leading-3 font-light italic whitespace-normal text-white 2xl:text-xs text-background-white"
                    />
                    ))}
                </div>
                </div>
        </>
    )


};