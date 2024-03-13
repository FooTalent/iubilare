import Card from "../components/card/Card";
import Form from "../components/form/Form";


export default function Home() {
 
    const cards = [
        { id: 1, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
        { id: 2, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
        { id: 3, name: "Lorena Ontivero", age: "53 años",city: "San Juan", description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
        ];

        const data = [... cards, ... cards];

    return (

        
        <>
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
            <div><h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8">Testimonios</h2></div>
            <div className="hidden md:block"><h3 className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px]">Estos son algunos de nuestros clientes</h3></div>
            <div className="min-h-[48px]"></div>

				<div className='overflow-hidden w-full h-full'>
					<div className='flex whitespace-nowrap animate-scroll gap-5 md:gap-[100px]'>
                    {data.map((card, index) => (
                        <Card key={index} name={card.name} age={card.age} city={card.city} description={card.description} imageUrl={card.imageUrl} />
                    ))}
					</div>
				</div>



            <div className="min-h-[106.08px]"></div>
            <Form></Form>

            <footer className="text-center py-4">
            </footer>
        </>
    )
};