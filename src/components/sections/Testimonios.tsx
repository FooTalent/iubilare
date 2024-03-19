import Card from "../card/Card"


export default function Testimonios (){
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
      ];
    
      const data = [...cards];

    return(
        <div className="md:bg-background-violet px-[16px] md:px-[40px] 2xl:px-[120px] md:pt-[54px]">
        <div>
          <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 md:text-white">
            Testimonios
          </h2>
        </div>
        <div className="hidden md:block">
          <h3 className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] md:text-white">
            Estos son algunos de nuestros clientes
          </h3>
        </div>
        <div className="min-h-[48px]"></div>

        <div className="overflow-auto w-full h-full 2xl:flex 2xl:justify-center">
          <div className="flex whitespace-nowrap gap-5 md:gap-[100px] md:justify-center md:overflow-hidden 2xl:gap-[150px]  py-5">
            {data.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                age={card.age}
                city={card.city}
                description={card.description}
                imageUrl={card.imageUrl}
                numberStars={card.numberStars}
              />
            ))}
          </div>
        </div>
        <div className="2xl:min-h-[63px]"></div>
      </div>
    )


};