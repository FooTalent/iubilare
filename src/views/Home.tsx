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
        <div className="">

        {/* Seccion Inicio */}
        <div className="flex flex-col lg:flex-row px-[16px] md:px-[40px] 2xl:px-[120px]">
        <div className="lg:w-1/2 lg:pr-8 hidden sm:block">
          <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto mb-5 mt-5" />
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex lg:hidden">
            <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <div className="text-left text-2xl mb-10 mt-8 ml-7">
            27 años de experiencia. Asesoramiento personalizado. Soluciones previsionales confiables en todo el país.
          </div>


        </div>

        {/* Content for small screens (mobile view) */}
        <div className="lg:hidden">
          <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto mb-3 mt-5" /> {/* Adjusted margin-bottom here */}
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
            <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
          </div>

          {/* Your other components for mobile view */}
          <div className="text-left w-[328px] h-[708px] flex-col justify-start items-start gap-10 inline-flex mt-8">
            <div className="h-[198px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className=" h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Renta Vitalicia Previsional en Dólares</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">Le ofrecemos realizar una entrevista o conversación telefónica para brindarle un diagnóstico completo.</div>
              </div>
              <div className="w-[55px] h-[53px] relative" />

            </div>
            <div className="h-[205px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Complemento al Haber Mínimo</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">Es un pago que realiza ANSES a quienes reciben una Renta Vitalicia y no alcanzan el Haber Mínimo Garantizado.</div>
              </div>
              <div className="w-[60px] h-[60px] relative" />
            </div>
            <div className="h-[225px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[111px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Actualización de su Renta Previsional</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">La Compañía de Seguros de Retiro otorga aumentos menores a su Renta. Sin embargo, debería recibir los aumentos que ANSES ha otorgado desde enero de 2002.</div>
              </div>
              <div className="w-[60px] h-[60px] justify-center items-center inline-flex">
                <div className="w-[60px] h-[60px] relative" />
              </div>
            </div>
          </div>
        </div>
        </div>


            {/* Separador */}
            <div className="min-h-[110px]"></div>

            {/* Seccion Quienes somos */}
            <div className="px-[16px] md:px-[40px] 2xl:px-[120px] md:hidden">
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
                        <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px]">Ver al equipo</button>
                </div>
            </div>

            {/* Separador */}
            <div className="min-h-[108px]"></div>

            {/* Seccion Testimonios */}
            <div className="2xl:bg-background-violet px-[16px] md:px-[40px] 2xl:px-[120px]">
                <div className="min-h-[62px]"></div>
                <div><h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 2xl:text-white">Testimonios</h2></div>
                <div className="hidden md:block"><h3 className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] 2xl:text-white">Estos son algunos de nuestros clientes</h3></div>
                <div className="min-h-[48px]"></div>

                    <div className='overflow-hidden w-full h-full 2xl:flex 2xl:justify-center'>
                        <div className='flex whitespace-nowrap animate-scroll gap-5 md:gap-[100px] md:justify-center 2xl:gap-[150px]'>
                        {data.map((card, index) => (
                            <Card key={index} name={card.name} age={card.age} city={card.city} description={card.description} imageUrl={card.imageUrl} />
                        ))}
                        </div>
                    </div>
                    <div className="2xl:min-h-[63px]"></div>
            </div>

            {/* Separador */}
            <div className="min-h-[106.08px]"></div>

            {/* Seccion Formulario */}
            <Form></Form>
            {/* Separador */}
            <div className="min-h-[106.08px]"></div>

        </div>
    )
};

