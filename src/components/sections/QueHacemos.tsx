import CardQueHacemos from "../cardQueHacemos/cardQueHacemos";

export default function QueHacemos() {
  return (
    <div className="flex flex-col justify-center items-center px-[16px] xl:p-[36px] md:bg-hero  md:bg-no-repeat md:bg-center md:bg-[length:690px] xl:bg-bottom xl:bg-[length:1290px] ">
      <h1 className="text-xl font-semibold md:text-[32px] xl:text-[49px] md:mb-8">
        ¿Qué hacemos?
      </h1>
      <div className="xl:flex xl:justify-center xl:w-[1076px]">
        <p className="mt-5 text-justify leading-tight md:text-center xl:text-[31px]">
          Gestionamos todos los trámites relacionados  con su Renta Vitalicia
          Previsional o Jubilación.
        </p>
      </div>
      <h2 className="lg:text-[31px] text-[#747DD6] py-16">
        Rentas Vitalicias Previsionales
      </h2>

      <div className="flex flex-col justify-center items-center">
        <CardQueHacemos
          src="./QueHacemos1.jpeg"
          description="A través de una conversación telefónica (interior del país) o una entrevista personalizada (CABA y GBA) realizamos un análisis gratuito de su Renta Vitalicia para determinar si usted tiene derecho a a iniciar un reclamo ante ANSES o su Compañía de Seguros de Retiro. 
          Proporcionamos un informe detallado con el monto estimado de su beneficio, el retroactivo aproximado y la duración estimada del proceso legal. También ofrecemos servicios de gestión completa de trámites previsionales y actualizaciones regulares sobre el progreso."
        />
      </div>
    </div>
  );
}
