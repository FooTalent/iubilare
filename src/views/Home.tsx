import { useState } from "react";
import Card from "../components/card/Card";
import Form from "../components/form/Form";
import CardQueHacemos from "../components/cardQueHacemos/cardQueHacemos";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonImage = isHovered
    ? "/botoncontactohover.png"
    : "/botoncontactodefault.png";

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
      {/* Seccion Inicio */}
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2 lg:pr-8 lg:block hidden">
          <img
            src="/Youtubeplayer.png"
            alt="Hero"
            className="mx-auto mb-5 mt-5  w-[637px] h-auto"
          />
        </div>

        {/* Text and Button */}
        <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
          {/* Desktop Message */}
          <div className="text-left text-2xl mb-10 lg:block hidden w-[452px]">Somos un equipo de abogados y ejecutivos en gestión previsional con 27+ años de experiencia. Más de 4500 clientes en todo el país. Asesoramiento personalizado para tranquilidad y solución de problemas previsionales.
          </div>

          {/* Button for desktop view */}
          <div className="lg:block hidden">
            <img
              src={buttonImage}
              alt="Hero"
              className="mx-auto mb-5 ml-1 "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Mobile Message */}
          <div className="text-left text-xl mb-5 lg:hidden ml-4">
            27 años de experiencia. Asesoramiento personalizado. Soluciones
            previsionales confiables en todo el país.
          </div>

          {/* Image */}
          <div className="lg:w-1/2 lg:pr-8">
            <img
              src="/Youtubeplayer.png"
              alt="Hero"
              className="mx-auto mb-5 mt-5 lg:hidden w-auto h-[200px]"
            />
          </div>

          {/* Button for mobile view */}
          <div className="lg:hidden">
            <img
              src={buttonImage}
              alt="Hero"
              className="mx-auto mb-5"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
      </div>


      {/* Separador */}
      <div className="h-[78px]"></div>
      {/* Seccion Que Hacemos */}
      <div className="flex flex-col justify-center px-[16px]">
        <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 2xl:text-white">¿Qué hacemos?</h2>
          <p className="mt-5 ml-10 mr-10 text-justify md:text-center">Gestionamos todos los trámites relacionados con su renta vitalicia previsional o jubilación sin que sea necesario que visite nuestras oficinas.</p>
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



        {/* Seccion tipo de Trámites */}
      <div className="lg:hidden px-[16px]">
        {/* Adjusted margin-bottom here */}
        <div className="text-neutral-900 text-2xl font-semibold font-['Source Sans Pro'] mt-20 md:text-[32px]">Tipos de trámites</div>
        <div className="text-left w-[328px] h-[708px] flex-col justify-start items-start gap-10 inline-flex mt-8">
        <div className="h-[198px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides flex-col justify-start items-center gap-[22px] flex">
            <div className=" h-[91px] flex-col justify-start items-start gap-[3px] flex">
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                Renta Vitalicia Previsional en Dólares
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                Le ofrecemos realizar una entrevista o conversación telefónica
                para brindarle un diagnóstico completo.
              </div>
              <img
                src="/actualizacionIcono.png"
                alt="Hero"
                className="mx-auto mt-3"
              />
            </div>
            <div className="w-[55px] h-[53px] relative" />
          </div>
          <div className="h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides flex-col justify-start items-center gap-[22px] flex">
            <div className="h-[91px] flex-col justify-start items-start gap-[3px] flex">
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                Complemento al Haber Mínimo
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                Es un pago que realiza ANSES a quienes reciben una Renta
                Vitalicia y no alcanzan el Haber Mínimo Garantizado.
              </div>
              <img
                src="/complenebtoIcono.png"
                alt="Hero"
                className="mx-auto mt-3"
              />
            </div>
            <div className="w-[60px] h-[60px] relative" />
          </div>
          <div className="h-[225px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides flex-col justify-start items-center gap-[22px] flex">
            <div className="h-[111px] flex-col justify-start items-start gap-[3px] flex">
              <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                Actualización de su Renta Previsional
              </div>
              <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                La Compañía de Seguros de Retiro otorga aumentos menores a su
                Renta. Sin embargo, debería recibir los aumentos que ANSES ha
                otorgado desde enero de 2002.
              </div>
            </div>
            <div className="w-[60px] h-[60px] justify-center items-center inline-flex">
              <div className="w-[60px] h-[60px] relative" />
              <img src="/rentaIcono.png" alt="Hero" className="mx-auto mt-3" />
            </div>
          </div>
        </div>
        <div className="h-[36px]"></div>
        <div className="lg:w-1/2 lg:pr-8">
            <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px]">Más info</button>
        </div>
      </div>



      {/* Separador */}
      <div className="min-h-[110px]"></div>

      {/* Seccion Testimonios */}
      <div className="2xl:bg-background-violet px-[16px] md:px-[40px] 2xl:px-[120px]">
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
