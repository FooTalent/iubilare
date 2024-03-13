import Card from "../components/card/Card";
import Form from "../components/form/Form";


export default function Home() {
 
    const cards = [
        { id: 1, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "./testimonios/test01.png" },
        { id: 2, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "./testimonios/test02.png" },
        { id: 3, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "./testimonios/test03.png" },
        ];

        const data = [... cards];

    return (
        <div className="px-[16px] md:px-[40px] 2xl:px-[120px]">
            <div className="text-center mb-40" >
            27 años de experiencia. Asesoramiento personalizado. 
            Soluciones previsionales confiables en todo el país.
                <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto" />
                <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
            </div>
            <div className="mb-50">
                Que hacemos
            </div>
            <div>
                <h2 className='font-bold text-xl text-center mb-10'>¿Quienes somos?</h2>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src="/quienesSomos1.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Marcelo Visceglie" />
                        <h3 className='font-bold text-lg text-center'>Marcelo Visceglie</h3>
                        <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
                    </div>
                    <div>
                        <img src="/quienesSomos2.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Cristian Pavlovsky" />
                        <h3 className='font-bold text-lg text-center'>Cristian Pavlovsky</h3>
                        <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
                    </div>
                    <button className='w-11/12 bg-button-green text-white font-bold text-xl mx-auto max-h-[50px]'>Ver al equipo</button>
                </div>
            </div>

            <div className="min-h-[108px]"></div>

            <div className="2xl:bg-background-violet">
                <div className="min-h-[62px]"></div>
                <div><h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 2xl:text-white">Testimonios</h2></div>
                <div className="hidden md:block"><h3 className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] 2xl:text-white">Estos son algunos de nuestros clientes</h3></div>
                <div className="min-h-[48px]"></div>

                    <div className='overflow-hidden w-full h-full 2xl:flex 2xl:justify-center'>
                        <div className='flex whitespace-nowrap animate-scroll gap-5 md:gap-[100px] 2xl:gap-[150px]'>
                        {data.map((card, index) => (
                            <Card key={index} name={card.name} age={card.age} city={card.city} description={card.description} imageUrl={card.imageUrl} />
                        ))}
                        </div>
                    </div>
                    <div className="2xl:min-h-[63px]"></div>
            </div>

            <div className="min-h-[106.08px]"></div>
            <Form></Form>

        </div>
    )
};