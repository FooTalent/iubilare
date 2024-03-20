import CardQueHacemos from "../cardQueHacemos/cardQueHacemos"


export default function QueHacemos (){


    return (
        <div className="flex flex-col justify-center px-[16px] 2xl:p-[36px] md:bg-hero  md:bg-no-repeat md:bg-center md:bg-[length:690px] 2xl:bg-bottom 2xl:bg-[length:1290px]">
        <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8">¿Qué hacemos?</h2>
        <div className="2xl:flex 2xl:justify-center"> 
        <p className="mt-5 text-justify leading-tight md:text-center 2xl:text-[23px] 2xl:w-[860px]">Gestionamos todos los trámites relacionados con su renta vitalicia previsional o jubilación sin que sea necesario que visite nuestras oficinas.</p>
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
    )

};