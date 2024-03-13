import Card from "../components/card/Card";
import Form from "../components/form/Form";


export default function Home() {
 
    const cards = [
        { id: 1, name: "Lorena Ontivero", age: "53 años",description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
        { id: 2, name: "Lorena Ontivero", age: "53 años",description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
        { id: 3, name: "Lorena Ontivero", age: "53 años",description: "Valoré mucho el asesoramiento y  permanente contacto con Cristian, y agradezco nuevamente tu trabajo eficiente y el de todo tu equipo en general", imageUrl: "https://via.placeholder.com/300" },
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
                Quienes somos
            </div>

            <div className="min-h-[108px]"></div>
            <div><h2 className="text-xl font-semibold">Testimonios</h2></div>
            <div className="min-h-[48px]"></div>

				<div className='overflow-hidden w-full h-full'>
					<div className='flex whitespace-nowrap animate-scroll gap-5'>
                    {data.map((card, index) => (
                        <Card key={index} name={card.name} age={card.age} description={card.description} imageUrl={card.imageUrl} />
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