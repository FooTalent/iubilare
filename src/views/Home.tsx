import Card from "../components/card/Card";
import Form from "../components/form/Form";
import CardQueHacemos from "../components/cardQueHacemos/cardQueHacemos";

export default function Home() {

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

  return (
    <div>
      {/* Separador */}
      <div className="min-h-[69px] md:hidden"></div>

      {/* Seccion Inicio */}
      <div className="flex flex-col px-[16px] md:px-[40px] 2xl:px-[120px]">
        <div className="flex flex-col md:flex-col-reverse 2xl:flex-row- 2xl:flex-row-reverse 2xl:gap-[132px]  2xl:mt-[100px]">
        <div className="2xl:w-[50%] 2xl:flex">
        <div className="hidden md:block text-left md:m-[10px] 2xl:flex 2xl:flex-col 2xl:justify-around 2xl:w-[70%]">
            <h1 className="md:text-[20px] md:font-semibold 2xl:text-[40px]">Iubilare consultora previsional</h1>
            <p className="hidden 2xl:block 2xl:text-[28px]">27 años de experiencia. Asesoramiento personalizado. Soluciones previsionales confiables en <span className="2xl:font-bold">todo el país.</span></p>
            <p className="md:w-2/3 2xl:hidden">Somos un equipo de abogados y ejecutivos en gestión previsional con 27+ años de experiencia. Más de 4500 clientes en todo el país. Asesoramiento personalizado para tranquilidad y solución de problemas previsionales.</p>
            <div className="hidden 2xl:block 2xl:mt-5">
              <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] 2xl:w-[100%] font-bold">Contactate</button>
            </div>
        </div>
          <div className="text-[20px] md:hidden">
            <p>27 años de experiencia. Asesoramiento personalizado. Soluciones previsionales confiables en todo el país.</p>
          </div>
        </div>
          <div className="">
            <img className="w-full mx-auto mb-5 mt-5 md:w-[688px] md:h-auto" src="/Youtubeplayer.png" alt="Hero"/>
          </div>
        </div>
        <div className="2xl:hidden mt-8 md:mx-[10px] flex justify-start">
        <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] font-bold">Contactate</button>
        </div>

      </div>


      {/* Separador */}
      <div className="h-[78px] 2xl:h-[100px]"></div>
      {/* Seccion Que Hacemos */}
      <div className="flex flex-col justify-center px-[16px] 2xl:p-[36px] 2xl:">
          <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8">¿Qué hacemos?</h2>
          <div className="2xl:flex 2xl:justify-center"> 
          <p className="mt-5 ml-10 mr-10 text-justify md:text-center 2xl:text-[23px] 2xl:w-[860px]">Gestionamos todos los trámites relacionados con su renta vitalicia previsional o jubilación sin que sea necesario que visite nuestras oficinas.</p>
          </div>

        <div className="h-[32px]"></div>
        <div className="flex flex-col justify-center items-center">
          <CardQueHacemos 
            src="./QueHacemos1.jpeg" 
            title="No queremos que pierda su tiempo ni dinero" 
            description="Ofrecemos un primer diagnóstico previsional completamente gratuito que incluye un análisis detallado de sus años de servicio y contribuciones tanto como dependiente, autónomo o monotributista. De esta manera podemos determinar los pasos a seguir y evaluar si está en condiciones de iniciar su trámite."
          />
          <div className="h-[32px] md:[63px]"></div>
          <CardQueHacemos 
            src="./QueHacemos2.jpeg" 
            title="Seguimiento del beneficio previsional" 
            description="En una segunda etapa, realizamos la gestión del beneficio previsional y hacemos el seguimiento del caso desde que el expediente es caratulado hasta el momento del primer cobro de haberes."
            classStyle="md:flex-row-reverse"

          />
          <div className="h-[32px] md:[63px]"></div>
          <CardQueHacemos 
            src="./QueHacemos3.jpeg" 
            title="Amplia experiencia" 
            description="Contamos con una amplia experiencia y las mejores herramientas para brindarle un servicio de calidad que garantice que su Beneficio Previsional sea otorgado en el menor tiempo posible."
          />
        </div>

      </div>


        {/* Separador */}
        <div className="h-[84px] md:h-[172px]"></div>

        {/* Seccion tipo de Trámites */}
        <div className="px-[16px] flex flex-col justify-center 2xl:px-[120px] 2xl:p-[36px]">
        <div>
            <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">Tipos de trámites</h2>
        </div>
        <div className="text-left w-[328px] h-[708px] flex-col justify-start self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full 2xl:w-[1115px] 2xl:h-[500px] ">

        <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
            <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse md:h-full  2xl:justify-end">
              <div className="">
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-black md:h-full  md:text-center 2xl:h-auto  2xl:mb-[10px]">
                Renta Vitalicia Previsional en Dólares
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center">
                Le ofrecemos realizar una entrevista o conversación telefónica
                para brindarle un diagnóstico completo.
              </div>
              </div>
              <div className="flex justify-center w-full">
                <img className="md:hidden" src="/actualizacionIcono.png" alt="Hero" />
                <img className="hidden md:block 2xl:w-[197px]" src="./tramites/actualizacionFill.png" alt="Hero" />
              </div>
            </div>
          </div>

          <div className="h-[40px] md:hidden"></div>
          <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
            <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full 2xl:justify-end">
              <div>
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-black md:h-full md:text-center  2xl:h-auto 2xl:mb-[10px]">
                Complemento al Haber Mínimo
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center">
                Es un pago que realiza ANSES a quienes reciben una Renta
                Vitalicia y no alcanzan el Haber Mínimo Garantizado.
              </div>
              </div>
              <div className="flex justify-center w-full">
              <img  className="md:hidden" src="/complenebtoIcono.png" alt="Hero"/>
              <img  className="hidden md:block 2xl:w-[197px]" src="./tramites/complementoFill.png" alt="Hero"/>
              </div>
            </div>
          </div>
          <div className="h-[40px] md:hidden"></div>
          <div className="flex flex-col justify-start items-center h-[235px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
            <div className="flex h-[111px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full  2xl:justify-end">
              <div>
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-black md:h-full md:text-center 2xl:h-auto 2xl:mb-[10px]">
                Actualización de su Renta Previsional
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-center">
                La Compañía de Seguros de Retiro otorga aumentos menores a su
                Renta. Sin embargo, debería recibir los aumentos que ANSES ha
                otorgado desde enero de 2002.
              </div>
              </div>
              <div className="flex justify-center w-full">
              <img className="md:hidden" src="/rentaIcono.png" alt="Hero"  />
              <img className="hidden md:block 2xl:w-[197px]" src="./tramites/rentasFill.png" alt="Hero"  />
            </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-[36px]"></div>

        <div className="2xl:hidden">
            <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px]  font-bold">Más info</button>
        </div>
      </div>



      {/* Separador */}
      <div className="min-h-[110px]"></div>



      {/* Seccion Testimonios */}
      <div className="2xl:bg-background-violet px-[16px] md:px-[40px] 2xl:px-[120px] md:pt-[54px]">
        <div>
          <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 2xl:text-white">
            Testimonios
          </h2>
        </div>
        <div className="hidden md:block">
          <h3 className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px] 2xl:text-white">
            Estos son algunos de nuestros clientes
          </h3>
        </div>
        <div className="min-h-[48px]"></div>

        <div className="overflow-hidden w-full h-full 2xl:flex 2xl:justify-center">
          <div className="flex whitespace-nowrap animate-scroll gap-5 md:gap-[100px] md:justify-center 2xl:gap-[150px]">
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

      {/* Separador */}
      <div className="min-h-[106.08px]"></div>

      {/* Seccion Formulario */}
      <Form></Form>
      {/* Separador */}
      <div className="min-h-[106.08px]"></div>
    </div>
  );
}
